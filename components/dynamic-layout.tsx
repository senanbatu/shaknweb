'use client'

import { useLanguage } from '@/components/language-provider'
import { useEffect } from 'react'

export function DynamicLayout() {
  const { language } = useLanguage()

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language
    
    // Update metadata based on language
    const title = language === 'tr' 
      ? 'shakn | Modern Web Çözümleri'
      : 'shakn | Modern Web Solutions'
    
    const description = language === 'tr'
      ? 'Yüksek performanslı ve erişilebilir web çözümleri. Modern teknolojiler ile işinizi dijitalde büyütün.'
      : 'High-performance, accessible web solutions. Grow your business digitally with modern technologies.'
    
    document.title = title
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    }
    
    // Update og:title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', language === 'tr' ? 'shakn - Modern Web Çözümleri' : 'shakn - Modern Web Solutions')
    }
    
    // Update og:description
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute('content', language === 'tr' ? 'Yüksek performanslı dijital deneyimler' : 'High-performance digital experiences')
    }
    
  }, [language])

  return null
}