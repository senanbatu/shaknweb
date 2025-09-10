'use client'

import { useLanguage } from '@/components/language-provider'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function FAQ() {
  const { t } = useLanguage()

  const questions = t('faq.questions') as unknown as Array<{ q: string; a: string }>

  return (
    <section id="faq" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{t('faq.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Accordion.Item
                  value={`item-${index}`}
                  className="card overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors group">
                      <span className="font-medium">{item.q}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown">
                    <div className="px-4 pb-4 text-sm text-muted-foreground">
                      {item.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}