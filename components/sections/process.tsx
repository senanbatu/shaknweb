'use client'

import { useLanguage } from '@/components/language-provider'
import { Search, Palette, Code, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export function Process() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Search,
      title: t('process.steps.discovery.title'),
      desc: t('process.steps.discovery.desc'),
      items: t('process.steps.discovery.items') as unknown as string[],
    },
    {
      icon: Palette,
      title: t('process.steps.design.title'),
      desc: t('process.steps.design.desc'),
      items: t('process.steps.design.items') as unknown as string[],
    },
    {
      icon: Code,
      title: t('process.steps.development.title'),
      desc: t('process.steps.development.desc'),
      items: t('process.steps.development.items') as unknown as string[],
    },
    {
      icon: Rocket,
      title: t('process.steps.launch.title'),
      desc: t('process.steps.launch.desc'),
      items: t('process.steps.launch.items') as unknown as string[],
    },
  ]

  return (
    <section id="process" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{t('process.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative z-10 bg-background border-4 border-background">
                    <step.icon className="h-6 w-6 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center mt-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 max-w-md mx-auto">{step.desc}</p>
                    <ul className="space-y-2 max-w-sm mx-auto">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}