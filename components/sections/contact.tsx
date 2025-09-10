'use client'

import { useLanguage } from '@/components/language-provider'
import { Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function Contact() {
  const { t, language } = useLanguage()
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleContact = async (type: 'email' | 'telegram') => {
    if (type === 'email') {
      window.location.href = 'mailto:info@example.com'
      setShowModal(false)
    } else {
      // Telegram - submit form directly
      setShowModal(false)
      await handleFormSubmit()
    }
  }

  const handleFormSubmit = async () => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.company, // Using company field as phone for compatibility
          subject: `Website Contact from ${formData.name}`,
          message: formData.message,
          honeypot: '' // Anti-spam
        })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: language === 'tr' 
            ? 'Mesajınız başarıyla gönderildi!' 
            : 'Your message has been sent successfully!'
        })
        // Reset form
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || (language === 'tr' 
            ? 'Bir hata oluştu. Lütfen tekrar deneyin.' 
            : 'An error occurred. Please try again.')
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: language === 'tr' 
          ? 'Bağlantı hatası. Lütfen daha sonra tekrar deneyin.' 
          : 'Connection error. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8"
          >
            {/* Status Messages */}
            {submitStatus && (
              <div className={`mb-4 p-3 rounded-md ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                  : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowModal(true) }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  {t('contact.form.company')} ({language === 'tr' ? 'Opsiyonel' : 'Optional'})
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    {language === 'tr' ? 'Gönderiliyor...' : 'Sending...'}
                  </span>
                ) : (
                  t('contact.form.send')
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Contact Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-lg p-6 max-w-sm w-full"
            >
              <h3 className="text-lg font-semibold mb-4">
                {language === 'tr' ? 'Nasıl iletişime geçmek istersiniz?' : 'How would you like to contact?'}
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleContact('email')}
                  className="w-full btn-outline flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {language === 'tr' ? 'E-posta Gönder' : 'Send Email'}
                </button>
                <button
                  onClick={() => handleContact('telegram')}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  {language === 'tr' ? 'Telegram ile Yaz' : 'Write on Telegram'}
                </button>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 w-full text-sm text-muted-foreground hover:text-foreground"
              >
                {language === 'tr' ? 'İptal' : 'Cancel'}
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}