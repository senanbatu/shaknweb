import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'SUPER_ADMIN')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '30')

    // Calculate date range
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Get daily analytics
    const dailyAnalytics = await prisma.analytics.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      },
      orderBy: {
        date: 'asc'
      }
    })

    // Get page views for the period
    const pageViews = await prisma.pageView.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      },
      select: {
        path: true,
        country: true,
        device: true,
        browser: true,
        referrer: true,
        createdAt: true
      }
    })

    // Calculate top pages
    const pageStats = pageViews.reduce((acc, view) => {
      acc[view.path] = (acc[view.path] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const topPages = Object.entries(pageStats)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 10)
      .map(([path, views]) => ({ path, views }))

    // Calculate top referrers
    const referrerStats = pageViews
      .filter(view => view.referrer && !view.referrer.includes(request.headers.get('host') || ''))
      .reduce((acc, view) => {
        const referrer = new URL(view.referrer!).hostname
        acc[referrer] = (acc[referrer] || 0) + 1
        return acc
      }, {} as Record<string, number>)

    const topReferrers = Object.entries(referrerStats)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 10)
      .map(([referrer, views]) => ({ referrer, views }))

    // Calculate device stats
    const deviceStats = pageViews.reduce((acc, view) => {
      const device = view.device || 'Unknown'
      acc[device] = (acc[device] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Calculate browser stats
    const browserStats = pageViews.reduce((acc, view) => {
      const browser = view.browser?.split(' ')[0] || 'Unknown'
      acc[browser] = (acc[browser] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Calculate country stats
    const countryStats = pageViews.reduce((acc, view) => {
      const country = view.country || 'Unknown'
      acc[country] = (acc[country] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Calculate totals
    const totalViews = pageViews.length
    const uniqueCountries = Object.keys(countryStats).length
    const avgDailyViews = Math.round(totalViews / days)

    // Calculate bounce rate (simplified - visits with only one page view)
    const sessionStats = pageViews.reduce((acc, view) => {
      if (!view.createdAt) return acc
      const sessionKey = `${view.createdAt.toDateString()}_${view.country}_${view.device}`
      acc[sessionKey] = (acc[sessionKey] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const bounces = Object.values(sessionStats).filter(count => count === 1).length
    const totalSessions = Object.keys(sessionStats).length
    const bounceRate = totalSessions > 0 ? Math.round((bounces / totalSessions) * 100) : 0

    return NextResponse.json({
      summary: {
        totalViews,
        avgDailyViews,
        uniqueCountries,
        bounceRate,
        period: `${days} days`
      },
      dailyAnalytics,
      topPages,
      topReferrers,
      deviceStats: Object.entries(deviceStats).map(([device, count]) => ({
        device,
        count: count as number,
        percentage: Math.round(((count as number) / totalViews) * 100)
      })),
      browserStats: Object.entries(browserStats).map(([browser, count]) => ({
        browser,
        count: count as number,
        percentage: Math.round(((count as number) / totalViews) * 100)
      })),
      countryStats: Object.entries(countryStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([country, count]) => ({
          country,
          count: count as number,
          percentage: Math.round(((count as number) / totalViews) * 100)
        }))
    })

  } catch (error) {
    console.error('Error fetching analytics dashboard:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}