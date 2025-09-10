'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Palette, Code, TrendingUp, BarChart3, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Services() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.desc'),
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      href: '/hizmetler/web-tasarim',
      cta: language === 'tr' ? 'Web Tasarım Detayları' : 'Web Design Details'
    },
    {
      icon: Code,
      title: t('services.development.title'),
      description: t('services.development.desc'),
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      href: '/hizmetler/e-ticaret-cozumleri',
      cta: language === 'tr' ? 'E-Ticaret Çözümleri' : 'E-Commerce Solutions'
    },
    {
      icon: TrendingUp,
      title: t('services.seo.title'),
      description: t('services.seo.desc'),
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      href: '/hizmetler/seo-danismanligi',
      cta: language === 'tr' ? 'SEO Danışmanlığı' : 'SEO Consulting'
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.desc'),
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
      href: '/hizmetler/sosyal-medya-icerik',
      cta: language === 'tr' ? 'Sosyal Medya Yönetimi' : 'Social Media Management'
    },
  ]

  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 border border-white/20">
            <span className="text-sm font-semibold text-primary">🚀 Premium Services</span>
          </div>
          <h2 className="mb-6 gradient-text">{t('services.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-premium p-8 hover:transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className={`p-4 rounded-2xl ${service.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>
                
                {/* CTA Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}