'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function IletisimPage() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { value: 'web-design', labelTr: 'Web Tasarım', labelEn: 'Web Design' },
    { value: 'seo', labelTr: 'SEO Danışmanlığı', labelEn: 'SEO Consulting' },
    { value: 'social-media', labelTr: 'Sosyal Medya İçerik', labelEn: 'Social Media Content' },
    { value: 'consultation', labelTr: 'Genel Danışmanlık', labelEn: 'General Consultation' },
    { value: 'other', labelTr: 'Diğer', labelEn: 'Other' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      labelTr: 'Telefon',
      labelEn: 'Phone',
      value: '+90 555 123 45 67', // TODO: Gerçek telefon numarası
      href: 'tel:+905551234567'
    },
    {
      icon: Mail,
      labelTr: 'E-posta',
      labelEn: 'Email',
      value: 'hello@shakn.com', // TODO: Gerçek email
      href: 'mailto:hello@shakn.com'
    },
    {
      icon: MapPin,
      labelTr: 'Konum',
      labelEn: 'Location',
      value: language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey', // TODO: Gerçek adres
      href: '#'
    },
    {
      icon: Clock,
      labelTr: 'Çalışma Saatleri',
      labelEn: 'Working Hours',
      value: language === 'tr' ? 'Pazartesi - Cuma, 09:00 - 18:00' : 'Monday - Friday, 09:00 - 18:00',
      href: '#'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: API endpoint'e form gönderimi
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error('Form gönderilemedi')
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error)
      alert(language === 'tr' 
        ? 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
        : 'An error occurred while sending the form. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">
              {language === 'tr' ? 'Mesajınız Alındı!' : 'Message Received!'}
            </h1>
            <p className="text-muted-foreground mb-6">
              {language === 'tr'
                ? 'Mesajınızı aldık ve 24 saat içinde size geri dönüş yapacağız. Teşekkür ederiz!'
                : 'We received your message and will get back to you within 24 hours. Thank you!'
              }
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {language === 'tr' ? 'Yeni Mesaj Gönder' : 'Send New Message'}
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'tr' 
                ? (
                  <>
                    <span className="block">Bizimle</span>
                    <span className="block text-primary">İletişime Geçin</span>
                  </>
                ) : (
                  <>
                    <span className="block">Get In</span>
                    <span className="block text-primary">Touch With Us</span>
                  </>
                )
              }
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Projelerinizi konuşmak ve size nasıl yardımcı olabileceğimizi keşfetmek için bizimle iletişime geçin.'
                : 'Contact us to discuss your projects and discover how we can help you.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {language === 'tr'
                    ? 'Size en uygun iletişim yöntemini seçin. 24 saat içinde geri dönüş garantisi veriyoruz.'
                    : 'Choose the most convenient contact method for you. We guarantee a response within 24 hours.'
                  }
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {language === 'tr' ? info.labelTr : info.labelEn}
                        </h3>
                        {info.href && info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="tel:+905551234567" // TODO: Gerçek telefon
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {language === 'tr' ? 'Hemen Ara' : 'Call Now'}
                </a>
                <a
                  href="https://wa.me/905551234567" // TODO: Gerçek WhatsApp
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://t.me/shakncom" // TODO: Gerçek Telegram username
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                {language === 'tr' ? 'Mesaj Gönderin' : 'Send Message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {language === 'tr' ? 'Ad Soyad *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder={language === 'tr' ? 'Adınız ve soyadınız' : 'Your full name'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {language === 'tr' ? 'E-posta *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder={language === 'tr' ? 'email@ornek.com' : 'email@example.com'}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      {language === 'tr' ? 'Telefon' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder={language === 'tr' ? '0555 123 45 67' : '+90 555 123 45 67'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      {language === 'tr' ? 'İlgilendiğiniz Hizmet' : 'Service of Interest'}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    >
                      <option value="">
                        {language === 'tr' ? 'Hizmet seçin' : 'Select service'}
                      </option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {language === 'tr' ? service.labelTr : service.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {language === 'tr' ? 'Mesajınız *' : 'Your Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                    placeholder={language === 'tr' 
                      ? 'Projeniz hakkında detaylı bilgi verin...'
                      : 'Provide detailed information about your project...'
                    }
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 w-4 h-4 text-primary border-2 border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    {language === 'tr' ? (
                      <>
                        <a href="/privacy-policy" className="text-primary hover:underline">
                          Gizlilik Politikası
                        </a>
                        'nı okudum ve kabul ediyorum. *
                      </>
                    ) : (
                      <>
                        I have read and agree to the{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        . *
                      </>
                    )}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-colors',
                    isSubmitting
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                      {language === 'tr' ? 'Gönderiliyor...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {language === 'tr' ? 'Mesaj Gönder' : 'Send Message'}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'tr' ? 'Konumumuz' : 'Our Location'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'tr'
                ? 'İstanbul merkezli olarak hizmet veriyoruz.'
                : 'We serve from our Istanbul base.'
              }
            </p>
          </div>
          
          {/* TODO: Google Maps entegrasyonu */}
          <div className="aspect-[16/9] bg-muted rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {language === 'tr' ? 'Harita Entegrasyonu Yakında' : 'Map Integration Coming Soon'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}