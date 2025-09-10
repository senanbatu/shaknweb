'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './theme-provider'
import { useLanguage } from './language-provider'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, t, toggleLanguage } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t('nav.home') },
    { 
      href: '/hizmetler', 
      label: t('nav.services'),
      dropdown: [
        { href: '/hizmetler/web-tasarim', label: t('nav.webDesign') },
        { href: '/hizmetler/seo-danismanligi', label: t('nav.seoConsulting') },
        { href: '/hizmetler/sosyal-medya-icerik', label: t('nav.socialMedia') }
      ]
    },
    { href: '/blog', label: t('nav.blog') },
    { href: '/hakkimizda', label: t('nav.about') },
    { href: '/iletisim', label: t('nav.contact') },
  ]

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-2xl border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold gradient-text tracking-tight"
          >
            ⚡ shakn
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="glass-effect px-3 py-2 rounded-lg hover:bg-primary/10 transition-all group"
              aria-label="Toggle language"
            >
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-xs font-semibold">
                  {language.toUpperCase()}
                </span>
              </div>
            </button>

            <button
              onClick={toggleTheme}
              className="glass-effect p-2 rounded-lg hover:bg-primary/10 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden glass-effect p-2 rounded-lg hover:bg-primary/10 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}