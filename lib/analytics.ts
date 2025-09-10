import { UAParser } from 'ua-parser-js'

export interface AnalyticsData {
  path: string
  title?: string
  referrer?: string
  userAgent?: string
  sessionId?: string
  userId?: string
  duration?: number
}

export interface ParsedAnalytics {
  path: string
  title?: string
  referrer?: string
  userAgent?: string
  ip?: string
  country?: string
  city?: string
  device?: string
  browser?: string
  os?: string
  sessionId?: string
  userId?: string
  duration?: number
}

export function parseUserAgent(userAgent: string) {
  const parser = new UAParser(userAgent)
  const result = parser.getResult()
  
  return {
    device: `${result.device.vendor || ''} ${result.device.model || ''}`.trim() || 'Desktop',
    browser: `${result.browser.name || ''} ${result.browser.version || ''}`.trim(),
    os: `${result.os.name || ''} ${result.os.version || ''}`.trim()
  }
}

export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export function getClientIP(request: Request): string | undefined {
  // Try different headers for IP detection
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const clientIP = request.headers.get('x-client-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  return realIP || clientIP || undefined
}

// Client-side analytics helper
export class ClientAnalytics {
  private sessionId: string
  private startTime: number

  constructor() {
    this.sessionId = this.getOrCreateSessionId()
    this.startTime = Date.now()
    
    // Track page unload to calculate duration
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.trackPageExit()
      })
    }
  }

  private getOrCreateSessionId(): string {
    if (typeof window === 'undefined') return generateSessionId()
    
    let sessionId = sessionStorage.getItem('analytics_session_id')
    if (!sessionId) {
      sessionId = generateSessionId()
      sessionStorage.setItem('analytics_session_id', sessionId)
    }
    return sessionId
  }

  async trackPageView(data: Partial<AnalyticsData> = {}) {
    if (typeof window === 'undefined') return

    const analyticsData: AnalyticsData = {
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || undefined,
      userAgent: navigator.userAgent,
      sessionId: this.sessionId,
      ...data
    }

    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(analyticsData)
      })
    } catch (error) {
      console.error('Analytics tracking failed:', error)
    }
  }

  private async trackPageExit() {
    const duration = Math.floor((Date.now() - this.startTime) / 1000)
    
    if (duration > 5) { // Only track if user spent more than 5 seconds
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            path: window.location.pathname,
            sessionId: this.sessionId,
            duration
          })
        })
      } catch (error) {
        // Ignore errors on page exit
      }
    }
  }

  trackEvent(eventName: string, properties: Record<string, any> = {}) {
    if (typeof window === 'undefined') return

    this.trackPageView({
      path: `${window.location.pathname}#${eventName}`,
      title: `Event: ${eventName}`,
      ...properties
    })
  }
}