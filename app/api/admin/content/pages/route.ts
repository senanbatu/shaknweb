import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET - List all pages
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
    const type = searchParams.get('type')
    const language = searchParams.get('language')
    const published = searchParams.get('published')

    const where: any = {}
    
    if (type) where.type = type
    if (language) where.language = language
    if (published !== null) where.published = published === 'true'

    const pages = await prisma.page.findMany({
      where,
      orderBy: {
        updatedAt: 'desc'
      },
      select: {
        id: true,
        slug: true,
        type: true,
        language: true,
        title: true,
        description: true,
        published: true,
        featured: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return NextResponse.json(pages)

  } catch (error) {
    console.error('Error fetching pages:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Create new page
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'SUPER_ADMIN')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const {
      slug,
      type,
      language = 'TR',
      title,
      description,
      content,
      metaTitle,
      metaDescription,
      featured = false,
      published = false
    } = body

    // Validate required fields
    if (!slug || !type || !title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: slug, type, title, content' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const existingPage = await prisma.page.findUnique({
      where: { slug }
    })

    if (existingPage) {
      return NextResponse.json(
        { error: 'Page with this slug already exists' },
        { status: 400 }
      )
    }

    const page = await prisma.page.create({
      data: {
        slug,
        type,
        language,
        title,
        description,
        content,
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || description,
        featured,
        published
      }
    })

    return NextResponse.json(page, { status: 201 })

  } catch (error) {
    console.error('Error creating page:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}