'use client'

import { useLanguage } from '@/components/language-provider'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, AlertCircle } from 'lucide-react'

export default function NotFound() {
  const { language } = useLanguage()

  const content = {
    tr: {
      title: 'Üzgünüz!',
      subtitle: 'Aradığınız sayfa bulunamadı.',
      description: 'Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.',
      backToHome: 'Ana Sayfaya Dön'
    },
    en: {
      title: 'Sorry!',
      subtitle: 'The page you are looking for was not found.',
      description: 'The page you are looking for might have been moved, deleted, or never existed.',
      backToHome: 'Back to Home'
    }
  }

  const currentContent = content[language as 'tr' | 'en'] || content.tr

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <AlertCircle className="h-20 w-20 text-primary mx-auto mb-4" />
          <h1 className="text-6xl font-bold gradient-text mb-2">404</h1>
        </div>

        <h2 className="text-2xl font-semibold mb-2">{currentContent.title}</h2>
        <p className="text-lg text-muted-foreground mb-2">{currentContent.subtitle}</p>
        <p className="text-sm text-muted-foreground mb-8">{currentContent.description}</p>

        <Link 
          href="/" 
          className="btn-primary inline-flex items-center gap-2"
        >
          <Home className="h-4 w-4" />
          {currentContent.backToHome}
        </Link>
      </motion.div>
    </div>
  )
}