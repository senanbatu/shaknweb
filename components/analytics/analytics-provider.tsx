'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ClientAnalytics } from '@/lib/analytics'

let analytics: ClientAnalytics | null = null

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Skip analytics on admin pages
    if (pathname.startsWith('/admin')) {
      return
    }

    // Initialize analytics
    if (!analytics) {
      analytics = new ClientAnalytics()
    }

    // Track page view
    analytics.trackPageView()

  }, [pathname])

  return <>{children}</>
}

// Export analytics instance for manual tracking
export { analytics }