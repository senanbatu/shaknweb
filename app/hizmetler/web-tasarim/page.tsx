'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Check, ArrowRight, Star, Clock, Users, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function WebTasarimPage() {
  const { language, t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      titleTr: 'Keşif ve Analiz',
      titleEn: 'Discovery & Analysis', 
      descTr: 'Marka analizi, hedef kitle araştırması ve rakip analizi yaparak projenizin temellerini atıyoruz.',
      descEn: 'We lay the foundations of your project by conducting brand analysis, target audience research and competitor analysis.',
      duration: '1-2 gün'
    },
    {
      titleTr: 'Tasarım ve Prototip',
      titleEn: 'Design & Prototype',
      descTr: 'Wireframe\'den başlayarak yüksek çözünürlüklü tasarımlar ve interaktif prototip geliştiriyoruz.',
      descEn: 'Starting from wireframes, we develop high-resolution designs and interactive prototypes.',
      duration: '3-5 gün'
    },
    {
      titleTr: 'Geliştirme ve Optimizasyon',
      titleEn: 'Development & Optimization',
      descTr: 'Modern teknolojilerle kodlama, performans optimizasyonu ve SEO entegrasyonu gerçekleştiriyoruz.',
      descEn: 'We perform coding with modern technologies, performance optimization and SEO integration.',
      duration: '5-10 gün'
    },
    {
      titleTr: 'Test ve Yayınlama',
      titleEn: 'Testing & Launch',
      descTr: 'Kapsamlı testler, performans kontrolü ve canlıya alım sürecini tamamlıyoruz.',
      descEn: 'We complete comprehensive testing, performance checks and the go-live process.',
      duration: '2-3 gün'
    }
  ]

  const features = [
    {
      iconTr: '⚡',
      iconEn: '⚡',
      titleTr: 'Yüksek Performans',
      titleEn: 'High Performance',
      descTr: 'Core Web Vitals optimizasyonu ile sayfa yükleme hızınızı maksimize ediyoruz.',
      descEn: 'We maximize your page loading speed with Core Web Vitals optimization.'
    },
    {
      iconTr: '🔍',
      iconEn: '🔍', 
      titleTr: 'SEO Hazır',
      titleEn: 'SEO Ready',
      descTr: 'Teknik SEO altyapısı ve yapılandırılmış verilerle arama motorlarında öne çıkın.',
      descEn: 'Stand out in search engines with technical SEO infrastructure and structured data.'
    },
    {
      iconTr: '📱',
      iconEn: '📱',
      titleTr: 'Responsive Tasarım', 
      titleEn: 'Responsive Design',
      descTr: 'Mobil-first yaklaşımla her cihazda mükemmel görünüm sağlıyoruz.',
      descEn: 'We provide perfect appearance on every device with mobile-first approach.'
    }
  ]

  const packages = [
    {
      nameTr: 'Temel Paket',
      nameEn: 'Basic Package',
      price: '₺15.000',
      descTr: 'Küçük işletmeler için ideal',
      descEn: 'Perfect for small businesses',
      features: [
        { tr: '5 sayfa responsive web sitesi', en: '5-page responsive website' },
        { tr: 'Temel SEO optimizasyonu', en: 'Basic SEO optimization' },
        { tr: 'İletişim formu entegrasyonu', en: 'Contact form integration' },
        { tr: '3 aylık teknik destek', en: '3 months technical support' }
      ]
    },
    {
      nameTr: 'Profesyonel Paket',
      nameEn: 'Professional Package', 
      price: '₺35.000',
      descTr: 'Büyüyen işletmeler için',
      descEn: 'For growing businesses',
      popular: true,
      features: [
        { tr: '10 sayfa responsive web sitesi', en: '10-page responsive website' },
        { tr: 'Gelişmiş SEO + Analytics', en: 'Advanced SEO + Analytics' },
        { tr: 'E-ticaret entegrasyonu', en: 'E-commerce integration' },
        { tr: 'Blog sistemi', en: 'Blog system' },
        { tr: '6 aylık teknik destek', en: '6 months technical support' }
      ]
    },
    {
      nameTr: 'Kurumsal Paket',
      nameEn: 'Enterprise Package',
      price: '₺75.000+',
      descTr: 'Büyük şirketler için',
      descEn: 'For large companies',
      features: [
        { tr: 'Sınırsız sayfa + özel tasarım', en: 'Unlimited pages + custom design' },
        { tr: 'Kurumsal SEO + performans', en: 'Enterprise SEO + performance' },
        { tr: 'Çoklu dil desteği', en: 'Multi-language support' },
        { tr: 'API entegrasyonları', en: 'API integrations' },
        { tr: '12 aylık premium destek', en: '12 months premium support' }
      ]
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                {language === 'tr' ? 'Profesyonel Web Tasarım' : 'Professional Web Design'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {language === 'tr' ? (
                  <>
                    <span className="block">Modern</span>
                    <span className="block text-primary">Web Tasarım</span>
                    <span className="block">Hizmeti</span>
                  </>
                ) : (
                  <>
                    <span className="block">Modern</span>
                    <span className="block text-primary">Web Design</span>
                    <span className="block">Service</span>
                  </>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === 'tr' 
                  ? 'Core Web Vitals odaklı, kullanıcı dostu ve SEO optimize web siteleri ile markanızı dijital dünyada öne çıkarın.'
                  : 'Stand out your brand in the digital world with Core Web Vitals focused, user-friendly and SEO optimized websites.'
                }
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {language === 'tr' ? '10-20 gün teslimat' : '10-20 days delivery'}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  {language === 'tr' ? '15+ yıl deneyim' : '15+ years experience'}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  {language === 'tr' ? '%98 müşteri memnuniyeti' : '98% customer satisfaction'}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  {language === 'tr' ? 'Ücretsiz Keşif Görüşmesi' : 'Free Discovery Meeting'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="#packages"
                  className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  {language === 'tr' ? 'Paketleri İncele' : 'View Packages'}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {/* TODO: Add hero image */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'tr' ? 'Modern Web Tasarım Örnekleri' : 'Modern Web Design Examples'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Neden Shakn Web Tasarım?'
                : 'Why Shakn Web Design?'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Modern teknolojiler ve kullanıcı deneyimi odaklı yaklaşımımızla fark yaratıyoruz.'
                : 'We make a difference with our modern technologies and user experience focused approach.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl border bg-card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6">{feature.iconTr}</div>
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'tr' ? feature.titleTr : feature.titleEn}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'tr' ? feature.descTr : feature.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Web Tasarım Sürecimiz'
                : 'Our Web Design Process'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? '4 adımda profesyonel web sitenize kavuşun.'
                : 'Get your professional website in 4 steps.'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-4 p-6 rounded-xl border transition-all cursor-pointer',
                    activeStep === index 
                      ? 'bg-primary/5 border-primary' 
                      : 'bg-background hover:bg-muted/50'
                  )}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={cn(
                    'flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm flex-shrink-0',
                    activeStep === index 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  )}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">
                        {language === 'tr' ? step.titleTr : step.titleEn}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {language === 'tr' ? step.descTr : step.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                {/* TODO: Add process illustration */}
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {['🔍', '🎨', '⚙️', '🚀'][activeStep]}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'tr' ? steps[activeStep].titleTr : steps[activeStep].titleEn}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Web Tasarım Paketlerimiz'
                : 'Our Web Design Packages'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'İhtiyacınıza uygun paketi seçin, hemen başlayalım.'
                : 'Choose the package that suits your needs, let\'s get started right away.'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={cn(
                  'relative p-8 rounded-2xl border transition-all hover:shadow-lg',
                  pkg.popular 
                    ? 'border-primary bg-primary/5 scale-105' 
                    : 'bg-card'
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                      {language === 'tr' ? 'En Popüler' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'tr' ? pkg.nameTr : pkg.nameEn}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === 'tr' ? pkg.descTr : pkg.descEn}
                  </p>
                  <div className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        {language === 'tr' ? feature.tr : feature.en}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/iletisim"
                  className={cn(
                    'block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors',
                    pkg.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  )}
                >
                  {language === 'tr' ? 'Paketi Seç' : 'Choose Package'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {language === 'tr' 
              ? 'Web Sitesi Projenizi Başlatalım'
              : 'Let\'s Start Your Website Project'
            }
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Ücretsiz keşif görüşmesinde projenizi detaylandırıp size özel çözümümüzü sunalım.'
              : 'Let us detail your project in a free discovery meeting and present our customized solution.'
            }
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors"
          >
            {language === 'tr' ? 'Hemen Başlayalım' : 'Start Right Now'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}