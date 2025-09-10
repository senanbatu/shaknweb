'use client'

import { useLanguage } from '@/components/language-provider'
import { Check, Zap, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { QuoteModal } from '@/components/quote-modal'
import { useState } from 'react'

export function Pricing() {
  const { t } = useLanguage()
  const [quoteModal, setQuoteModal] = useState({ isOpen: false, planName: '' })

  const plans = [
    {
      name: t('pricing.starter.name'),
      desc: t('pricing.starter.desc'),
      features: t('pricing.starter.features') as unknown as string[],
      popular: false,
      planKey: 'Starter'
    },
    {
      name: t('pricing.growth.name'),
      desc: t('pricing.growth.desc'),
      features: t('pricing.growth.features') as unknown as string[],
      popular: true,
      badge: t('pricing.growth.popular'),
      planKey: 'Growth'
    },
    {
      name: t('pricing.scale.name'),
      desc: t('pricing.scale.desc'),
      features: t('pricing.scale.features') as unknown as string[],
      popular: false,
      planKey: 'Scale'
    },
  ]

  const openQuoteModal = (planName: string) => {
    setQuoteModal({ isOpen: true, planName })
  }

  const closeQuoteModal = () => {
    setQuoteModal({ isOpen: false, planName: '' })
  }

  return (
    <section id="pricing" className="section bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{t('pricing.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn(
                'card-premium p-8 relative group hover:scale-105 transition-all duration-300',
                plan.popular && 'ring-2 ring-primary/50 shadow-2xl scale-110 z-10'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="glass-effect px-4 py-2 rounded-full border border-primary/30">
                    <span className="flex items-center gap-2 text-sm font-bold gradient-text">
                      <Zap className="h-4 w-4" />
                      {plan.badge}
                    </span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 gradient-text">{plan.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/20 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openQuoteModal(plan.planKey)}
                className={cn(
                  'w-full group/btn',
                  plan.popular ? 'btn-primary' : 'btn-outline'
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  {t('pricing.getQuote')}
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Premium glow effect */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 -z-10 blur-xl opacity-50"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote Modal */}
        <QuoteModal
          isOpen={quoteModal.isOpen}
          onClose={closeQuoteModal}
          planName={quoteModal.planName}
        />
      </div>
    </section>
  )
}