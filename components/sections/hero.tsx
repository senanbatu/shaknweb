'use client'

import { useLanguage } from '@/components/language-provider'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="section pt-32 lg:pt-40 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-[100px] animate-first" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-[120px] animate-second" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-primary/35 to-accent/35 rounded-full blur-[90px] animate-third" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-[80px] animate-fourth" />
          <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full blur-[70px] animate-fifth" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-primary/35 to-accent/35 rounded-full blur-[60px] animate-float" />
          <div className="absolute top-3/4 right-1/2 w-60 h-60 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-[85px] animate-floatReverse" />
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect mb-8 border border-white/20">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('hero.badge')}
            </span>
          </div>

          <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex justify-center">
            <button 
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                })
              }}
              className="btn-primary group"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <div className="text-muted-foreground">{t('hero.stats.projects')}</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-muted-foreground">{t('hero.stats.satisfaction')}</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">{t('hero.stats.support')}</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}