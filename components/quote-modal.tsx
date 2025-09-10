'use client'

import { useLanguage } from '@/components/language-provider'
import { X, MessageCircle, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  planName?: string
}

export function QuoteModal({ isOpen, onClose, planName }: QuoteModalProps) {
  const { t, language } = useLanguage()

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleWhatsAppClick = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    if (!whatsappNumber) {
      console.error('NEXT_PUBLIC_WHATSAPP_NUMBER not configured')
      return
    }

    const message = language === 'tr' 
      ? `Merhaba, ${planName} planı için teklif almak istiyorum.`
      : `Hello, I would like to get a quote for the ${planName} plan.`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

  const handleTelegramClick = () => {
    const telegramUsername = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME
    if (!telegramUsername) {
      console.error('NEXT_PUBLIC_TELEGRAM_USERNAME not configured')
      return
    }

    // Direct link to Telegram bot/user
    const telegramUrl = `https://t.me/${telegramUsername}`
    
    window.open(telegramUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-background border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 id="quote-modal-title" className="text-xl font-bold gradient-text">
                {t('pricing.modal.title')}
                {planName && (
                  <span className="text-sm font-normal text-muted-foreground block mt-1">
                    {planName}
                  </span>
                )}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Subtitle */}
            <p className="text-muted-foreground mb-6 text-center">
              {t('pricing.modal.subtitle')}
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full btn-outline flex items-center justify-center gap-3 h-12 group hover:border-green-500 hover:text-green-500"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('pricing.modal.whatsapp')}
              </button>
              
              <button
                onClick={handleTelegramClick}
                className="w-full btn-primary flex items-center justify-center gap-3 h-12 group hover:bg-blue-500"
              >
                <Send className="h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('pricing.modal.telegram')}
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted-foreground/20" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    {language === 'tr' ? 'veya' : 'or'}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  })
                  onClose()
                }}
                className="w-full btn-outline flex items-center justify-center gap-3 h-12 group"
              >
                <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'tr' ? 'Formu Doldurun' : 'Fill the Form'}
              </button>
            </div>

            {/* Footer note */}
            <p className="text-xs text-muted-foreground text-center mt-4 opacity-70">
              {language === 'tr' 
                ? 'Seçtiğiniz platform yeni sekmede açılacaktır'
                : 'Your selected platform will open in a new tab'
              }
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}