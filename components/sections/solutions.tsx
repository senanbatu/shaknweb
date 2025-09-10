'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import * as Tabs from '@radix-ui/react-tabs'
import { Check, Palette, Code, TrendingUp, BarChart3, FileText, Headphones, ArrowRight, Sparkles, Zap, Target } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Solutions() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState('design')
  const [isHovered, setIsHovered] = useState<string | null>(null)

  useEffect(() => {
    // Auto-cycle through tabs for engagement
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const tabs = ['design', 'development', 'seo', 'analytics', 'content', 'support']
        const currentIndex = tabs.indexOf(prev)
        return tabs[(currentIndex + 1) % tabs.length]
      })
    }, 5000) // Change tab every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const tabs = [
    { 
      value: 'design', 
      label: t('solutions.tabs.design'), 
      icon: Palette,
      color: 'from-blue-500 to-purple-500',
      emoji: '🎨',
      href: '/hizmetler/web-tasarim'
    },
    { 
      value: 'development', 
      label: t('solutions.tabs.development'), 
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      emoji: '⚙️',
      href: '/hizmetler/e-ticaret-cozumleri'
    },
    { 
      value: 'seo', 
      label: t('solutions.tabs.seo'), 
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      emoji: '📈',
      href: '/hizmetler/seo-danismanligi'
    },
    { 
      value: 'analytics', 
      label: t('solutions.tabs.analytics'), 
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      emoji: '📊',
      href: '/hizmetler/sosyal-medya-icerik'
    },
    { 
      value: 'content', 
      label: t('solutions.tabs.content'), 
      icon: FileText,
      color: 'from-cyan-500 to-blue-500',
      emoji: '✍️',
      href: '/hizmetler/sosyal-medya-icerik'
    },
    { 
      value: 'support', 
      label: t('solutions.tabs.support'), 
      icon: Headphones,
      color: 'from-yellow-500 to-orange-500',
      emoji: '🤝',
      href: '/iletisim'
    },
  ]

  const content = {
    design: {
      desc: t('solutions.design.desc'),
      features: t('solutions.design.features') as unknown as string[],
      stats: { clients: '50+', projects: '200+', satisfaction: '98%' },
      highlight: language === 'tr' ? 'Modern tasarımlar ile markanızı öne çıkarın' : 'Stand out your brand with modern designs'
    },
    development: {
      desc: t('solutions.development.desc'),
      features: t('solutions.development.features') as unknown as string[],
      stats: { performance: '3x', conversion: '+65%', uptime: '99.9%' },
      highlight: language === 'tr' ? 'Hızlı ve güvenli web uygulamaları' : 'Fast and secure web applications'
    },
    seo: {
      desc: t('solutions.seo.desc'),
      features: t('solutions.seo.features') as unknown as string[],
      stats: { traffic: '+380%', keywords: '1000+', rankings: 'Top 3' },
      highlight: language === 'tr' ? 'Google\'da 1. sırada görünün' : 'Rank #1 on Google'
    },
    analytics: {
      desc: t('solutions.analytics.desc'),
      features: t('solutions.analytics.features') as unknown as string[],
      stats: { insights: '24/7', growth: '+250%', roi: '400%' },
      highlight: language === 'tr' ? 'Veriyle desteklenen kararlar alın' : 'Make data-driven decisions'
    },
    content: {
      desc: t('solutions.content.desc'),
      features: t('solutions.content.features') as unknown as string[],
      stats: { engagement: '+180%', reach: '2M+', content: '1000+' },
      highlight: language === 'tr' ? 'Viral içerikler ile büyüyün' : 'Grow with viral content'
    },
    support: {
      desc: t('solutions.support.desc'),
      features: t('solutions.support.features') as unknown as string[],
      stats: { response: '< 2h', availability: '24/7', satisfaction: '4.9/5' },
      highlight: language === 'tr' ? 'Her zaman yanınızda güvenilir destek' : 'Reliable support always by your side'
    },
  }

  return (
    <section id="solutions" className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {language === 'tr' ? '✨ Kapsamlı Çözümler' : '✨ Comprehensive Solutions'}
            </span>
          </div>
          <h2 className="mb-6 gradient-text">{t('solutions.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          {/* Interactive Tab Pills */}
          <Tabs.List className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab, index) => {
              const currentTab = tabs.find(t => t.value === activeTab)
              const isActive = tab.value === activeTab
              
              return (
                <motion.div
                  key={tab.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Tabs.Trigger
                    value={tab.value}
                    onMouseEnter={() => setIsHovered(tab.value)}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`relative group flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'bg-background/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-muted/50'
                    }`}
                  >
                    {/* Tab Icon & Emoji */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{tab.emoji}</span>
                      <tab.icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-primary'}`} />
                    </div>
                    
                    {/* Tab Label */}
                    <span className="text-sm font-semibold">{tab.label}</span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-xl bg-primary/10 border border-primary/20"
                        initial={false}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Tabs.Trigger>
                </motion.div>
              )
            })}
          </Tabs.List>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            {Object.entries(content).map(([key, value]) => (
              <Tabs.Content key={key} value={key} asChild>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className="space-y-6">
                      {/* Highlight Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {value.highlight}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {value.desc}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-1 gap-4">
                        {value.features.slice(0, 4).map((feature, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-white/10 hover:bg-primary/5 transition-colors"
                          >
                            <div className="mt-1 p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        {tabs.find(t => t.value === key) && (
                          <Link
                            href={tabs.find(t => t.value === key)!.href}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                          >
                            <Zap className="w-4 h-4" />
                            {language === 'tr' ? 'Detayları Keşfet' : 'Explore Details'}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Stats Side */}
                    <div className="relative">
                      <div className="card-premium p-8">
                        <div className="text-center mb-6">
                          <div className="text-4xl mb-2">
                            {tabs.find(t => t.value === key)?.emoji}
                          </div>
                          <h3 className="text-xl font-bold gradient-text">
                            {language === 'tr' ? 'Başarı Metrikleri' : 'Success Metrics'}
                          </h3>
                        </div>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(value.stats).map(([statKey, statValue], index) => (
                            <motion.div
                              key={statKey}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                              className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10"
                            >
                              <div className="text-2xl font-bold text-primary mb-1">
                                {statValue}
                              </div>
                              <div className="text-xs text-muted-foreground capitalize">
                                {statKey}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-70"
                      />
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full opacity-50"
                      />
                    </div>
                  </div>
                </motion.div>
              </Tabs.Content>
            ))}
          </AnimatePresence>
        </Tabs.Root>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
          >
            <span>{language === 'tr' ? 'Tüm Hizmetlerimizi Keşfet' : 'Explore All Our Services'}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}