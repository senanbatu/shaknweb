import { NextRequest, NextResponse } from 'next/server'
import { createAdminUser, verifyAdminSetup } from '@/lib/utils/admin'

export async function POST(request: NextRequest) {
  try {
    // Check if admin already exists
    const hasAdmin = await verifyAdminSetup()
    if (hasAdmin) {
      return NextResponse.json(
        { error: 'Admin user already exists' },
        { status: 400 }
      )
    }

    const { email, password, name } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    const result = await createAdminUser(email, password, name)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      )
    }

    return NextResponse.json({
      message: 'Admin user created successfully',
      user: result.user
    })

  } catch (error) {
    console.error('Admin setup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const hasAdmin = await verifyAdminSetup()
    return NextResponse.json({ hasAdmin })
  } catch (error) {
    console.error('Admin check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}