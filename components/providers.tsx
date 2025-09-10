'use client'

import { ThemeProvider } from './theme-provider'
import { LanguageProvider } from './language-provider'
import { SessionProvider } from './providers/session-provider'
import { AnalyticsProvider } from './analytics/analytics-provider'
import { DynamicLayout } from './dynamic-layout'
import { Navbar } from './navbar'
import { Footer } from './footer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AnalyticsProvider>
        <ThemeProvider>
          <LanguageProvider>
            <DynamicLayout />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </AnalyticsProvider>
    </SessionProvider>
  )
}