'use client'

import { useLanguage } from '@/components/language-provider'
import { FileText, Download, ExternalLink, Figma } from 'lucide-react'
import { motion } from 'framer-motion'

export function Resources() {
  const { t } = useLanguage()

  const resources = t('resources.items') as unknown as Array<{
    title: string
    desc: string
    type: string
  }>

  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return FileText
      case 'Figma':
        return Figma
      default:
        return ExternalLink
    }
  }

  return (
    <section id="resources" className="section bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{t('resources.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = getIcon(resource.type)
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {resource.desc}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}