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

    // Get current date for calculations
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)

    // Get total page views
    const totalViews = await prisma.pageView.count()

    // Get today's views
    const todayViews = await prisma.pageView.count({
      where: {
        createdAt: {
          gte: today
        }
      }
    })

    // Get total contacts
    const totalContacts = await prisma.contact.count()

    // Get total posts
    const totalPosts = await prisma.post.count()

    // Calculate average session time (mock data for now)
    const avgSessionTime = 180 // 3 minutes in seconds

    // Calculate weekly growth (mock calculation)
    const lastWeekViews = await prisma.pageView.count({
      where: {
        createdAt: {
          gte: weekAgo,
          lt: today
        }
      }
    })

    const thisWeekViews = await prisma.pageView.count({
      where: {
        createdAt: {
          gte: today
        }
      }
    })

    const weeklyGrowth = lastWeekViews > 0 
      ? Math.round(((thisWeekViews - lastWeekViews) / lastWeekViews) * 100)
      : 0

    const stats = {
      totalViews,
      todayViews,
      totalContacts,
      totalPosts,
      avgSessionTime,
      weeklyGrowth: Math.max(weeklyGrowth, 0) // Ensure positive growth for demo
    }

    return NextResponse.json(stats)

  } catch (error) {
    console.error('Error fetching admin stats:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}