import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { parseUserAgent, getClientIP, type AnalyticsData, type ParsedAnalytics } from '@/lib/analytics'

export async function POST(request: NextRequest) {
  try {
    const body: AnalyticsData = await request.json()
    
    if (!body.path) {
      return NextResponse.json(
        { error: 'Path is required' },
        { status: 400 }
      )
    }

    // Parse user agent for device info
    const userAgentInfo = body.userAgent ? parseUserAgent(body.userAgent) : {}
    
    // Get client IP
    const ip = getClientIP(request)
    
    // TODO: Add geolocation lookup based on IP
    // For now, we'll use mock data
    const geoInfo = {
      country: 'Turkey', // You can integrate with a GeoIP service
      city: 'Istanbul'
    }

    const analyticsData: ParsedAnalytics = {
      path: body.path,
      title: body.title,
      referrer: body.referrer,
      userAgent: body.userAgent,
      ip,
      country: geoInfo.country,
      city: geoInfo.city,
      device: userAgentInfo.device,
      browser: userAgentInfo.browser,
      os: userAgentInfo.os,
      sessionId: body.sessionId,
      userId: body.userId,
      duration: body.duration
    }

    // Store page view
    const pageView = await prisma.pageView.create({
      data: analyticsData
    })

    // Update daily analytics
    await updateDailyAnalytics(analyticsData)

    return NextResponse.json({ 
      success: true, 
      id: pageView.id 
    })

  } catch (error) {
    console.error('Analytics tracking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function updateDailyAnalytics(data: ParsedAnalytics) {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Check if analytics record exists for today
    const existing = await prisma.analytics.findUnique({
      where: { date: today }
    })

    if (existing) {
      // Update existing record
      await prisma.analytics.update({
        where: { date: today },
        data: {
          totalViews: { increment: 1 },
          // We'll calculate unique visitors separately
          updatedAt: new Date()
        }
      })
    } else {
      // Create new record
      await prisma.analytics.create({
        data: {
          date: today,
          totalViews: 1,
          uniqueVisitors: 1
        }
      })
    }

    // Update unique visitors count (by session)
    if (data.sessionId) {
      const todayStart = new Date(today)
      const todayEnd = new Date(today)
      todayEnd.setDate(todayEnd.getDate() + 1)

      const uniqueSessions = await prisma.pageView.findMany({
        where: {
          createdAt: {
            gte: todayStart,
            lt: todayEnd
          },
          sessionId: { not: null }
        },
        select: { sessionId: true },
        distinct: ['sessionId']
      })

      await prisma.analytics.update({
        where: { date: today },
        data: {
          uniqueVisitors: uniqueSessions.length
        }
      })
    }
  } catch (error) {
    console.error('Error updating daily analytics:', error)
  }
}