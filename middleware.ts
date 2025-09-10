import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl
    const token = req.nextauth.token

    // Admin routes protection
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
      if (!token) {
        return NextResponse.redirect(new URL('/admin/login', req.url))
      }

      // Check if user has admin role
      if (token.role !== 'ADMIN' && token.role !== 'SUPER_ADMIN') {
        return NextResponse.redirect(new URL('/admin/login', req.url))
      }
    }

    // Redirect authenticated users away from login page
    if (pathname === '/admin/login' && token) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Allow access to login page and public routes
        if (pathname === '/admin/login' || !pathname.startsWith('/admin')) {
          return true
        }

        // For admin routes, check if user is authenticated
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*']
}