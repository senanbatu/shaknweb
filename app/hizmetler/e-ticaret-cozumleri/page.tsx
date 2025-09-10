'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Check, ArrowRight, ShoppingCart, CreditCard, Package, TrendingUp, Shield, Smartphone, Globe, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function EticaretCozumleriPage() {
  const { language } = useLanguage()
  const [activeFeature, setActiveFeature] = useState(0)

  const ecommerceFeatures = [
    {
      titleTr: 'Modern E-Ticaret Tasarımı',
      titleEn: 'Modern E-Commerce Design',
      descTr: 'Kullanıcı dostu, dönüşüm odaklı ve mobil uyumlu e-ticaret tasarımları.',
      descEn: 'User-friendly, conversion-focused and mobile-compatible e-commerce designs.',
      icon: Smartphone,
      benefits: [
        { tr: 'Dönüşüm oranını %40\'a kadar artırır', en: 'Increases conversion rate up to 40%' },
        { tr: 'Mobil satışları %60 artırır', en: 'Increases mobile sales by 60%' },
        { tr: 'Sayfa yükleme hızını optimize eder', en: 'Optimizes page loading speed' }
      ]
    },
    {
      titleTr: 'Ödeme Sistemleri Entegrasyonu',
      titleEn: 'Payment Systems Integration',
      descTr: 'Güvenli ve hızlı ödeme altyapısı ile müşteri güvenini kazanın.',
      descEn: 'Gain customer trust with secure and fast payment infrastructure.',
      icon: CreditCard,
      benefits: [
        { tr: 'İyzico, PayTR, Stripe entegrasyonu', en: 'Iyzico, PayTR, Stripe integration' },
        { tr: '3D Secure güvenlik protokolü', en: '3D Secure security protocol' },
        { tr: 'Taksitli ödeme seçenekleri', en: 'Installment payment options' }
      ]
    },
    {
      titleTr: 'Envanter & Sipariş Yönetimi',
      titleEn: 'Inventory & Order Management',
      descTr: 'Otomatik stok takibi ve sipariş süreçlerini kolaylaştırın.',
      descEn: 'Automate stock tracking and simplify order processes.',
      icon: Package,
      benefits: [
        { tr: 'Otomatik stok uyarıları', en: 'Automatic stock alerts' },
        { tr: 'Sipariş durumu takibi', en: 'Order status tracking' },
        { tr: 'Kargo entegrasyonları', en: 'Cargo integrations' }
      ]
    },
    {
      titleTr: 'SEO & Pazarlama Araçları',
      titleEn: 'SEO & Marketing Tools',
      descTr: 'Arama motorlarında üst sıralarda yer alın ve satışları artırın.',
      descEn: 'Rank at the top in search engines and increase sales.',
      icon: TrendingUp,
      benefits: [
        { tr: 'Ürün sayfası SEO optimizasyonu', en: 'Product page SEO optimization' },
        { tr: 'Google Shopping entegrasyonu', en: 'Google Shopping integration' },
        { tr: 'Email pazarlama otomasyonu', en: 'Email marketing automation' }
      ]
    }
  ]

  const platforms = [
    {
      name: 'Shopify',
      icon: '🛍️',
      descTr: 'Dünya\'nın en popüler e-ticaret platformu',
      descEn: 'World\'s most popular e-commerce platform',
      features: ['Kolay kurulum', 'App store', 'Mobil optimize', '99.9% uptime']
    },
    {
      name: 'WooCommerce',
      icon: '🔌',
      descTr: 'WordPress tabanlı esnek e-ticaret çözümü',
      descEn: 'WordPress-based flexible e-commerce solution',
      features: ['Open source', 'Özelleştirilebilir', 'SEO dostu', 'Ücretsiz başlangıç']
    },
    {
      name: 'Magento',
      icon: '🏪',
      descTr: 'Büyük ölçekli işletmeler için güçlü platform',
      descEn: 'Powerful platform for large-scale businesses',
      features: ['Enterprise çözüm', 'Multi-store', 'B2B desteği', 'Gelişmiş raporlama']
    },
    {
      name: 'Custom',
      icon: '⚙️',
      descTr: 'İhtiyacınıza özel geliştirilmiş çözümler',
      descEn: 'Custom developed solutions for your needs',
      features: ['Tam kontrol', 'Özel özellikler', 'API entegrasyonu', 'Scalable']
    }
  ]

  const packages = [
    {
      nameTr: 'E-Ticaret Starter',
      nameEn: 'E-Commerce Starter',
      price: '₺25.000',
      descTr: 'Yeni başlayanlar için',
      descEn: 'For beginners',
      platform: 'Shopify / WooCommerce',
      features: [
        { tr: 'Temel e-ticaret kurulumu', en: 'Basic e-commerce setup' },
        { tr: '50 ürün kadar ekleme', en: 'Add up to 50 products' },
        { tr: 'Ödeme sistemi entegrasyonu', en: 'Payment system integration' },
        { tr: 'Responsive tasarım', en: 'Responsive design' },
        { tr: 'Temel SEO optimizasyonu', en: 'Basic SEO optimization' },
        { tr: '3 ay teknik destek', en: '3 months technical support' }
      ],
      deliveryTime: '15-20 gün'
    },
    {
      nameTr: 'E-Ticaret Pro',
      nameEn: 'E-Commerce Pro',
      price: '₺45.000',
      descTr: 'Büyüyen işletmeler için',
      descEn: 'For growing businesses',
      popular: true,
      platform: 'Shopify Plus / Magento',
      features: [
        { tr: 'Gelişmiş e-ticaret kurulumu', en: 'Advanced e-commerce setup' },
        { tr: 'Sınırsız ürün ekleme', en: 'Unlimited product addition' },
        { tr: 'Çoklu ödeme seçenekleri', en: 'Multiple payment options' },
        { tr: 'Envanter yönetim sistemi', en: 'Inventory management system' },
        { tr: 'Google Analytics & Facebook Pixel', en: 'Google Analytics & Facebook Pixel' },
        { tr: 'Email pazarlama entegrasyonu', en: 'Email marketing integration' },
        { tr: '6 ay premium destek', en: '6 months premium support' }
      ],
      deliveryTime: '25-35 gün'
    },
    {
      nameTr: 'E-Ticaret Enterprise',
      nameEn: 'E-Commerce Enterprise',
      price: '₺85.000+',
      descTr: 'Büyük şirketler için',
      descEn: 'For large companies',
      platform: 'Custom / Magento Commerce',
      features: [
        { tr: 'Kurumsal e-ticaret çözümü', en: 'Enterprise e-commerce solution' },
        { tr: 'Multi-store & multi-language', en: 'Multi-store & multi-language' },
        { tr: 'B2B & B2C hibrit model', en: 'B2B & B2C hybrid model' },
        { tr: 'ERP & CRM entegrasyonu', en: 'ERP & CRM integration' },
        { tr: 'Gelişmiş analitik & raporlama', en: 'Advanced analytics & reporting' },
        { tr: 'API & 3. parti entegrasyonlar', en: 'API & 3rd party integrations' },
        { tr: '12 ay enterprise destek', en: '12 months enterprise support' }
      ],
      deliveryTime: '45-60 gün'
    }
  ]

  const successMetrics = [
    {
      metric: 'Dönüşüm Oranı',
      metricEn: 'Conversion Rate',
      increase: '+165%',
      period: 'Ortalama artış',
      periodEn: 'Average increase'
    },
    {
      metric: 'Sepet Değeri',
      metricEn: 'Cart Value',
      increase: '+89%',
      period: 'Ortalama yükseliş',
      periodEn: 'Average increase'
    },
    {
      metric: 'Mobil Satışlar',
      metricEn: 'Mobile Sales',
      increase: '+240%',
      period: '6 ayda',
      periodEn: 'in 6 months'
    },
    {
      metric: 'Müşteri Memnuniyeti',
      metricEn: 'Customer Satisfaction',
      increase: '4.8/5',
      period: 'Ortalama puan',
      periodEn: 'Average score'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium">
                <ShoppingCart className="w-4 h-4" />
                {language === 'tr' ? 'E-Ticaret Çözümleri' : 'E-Commerce Solutions'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {language === 'tr' ? (
                  <>
                    <span className="block">Online Satışlarınızı</span>
                    <span className="block text-orange-600">10x Artırın</span>
                  </>
                ) : (
                  <>
                    <span className="block">Increase Your</span>
                    <span className="block text-orange-600">Online Sales 10x</span>
                  </>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === 'tr' 
                  ? 'Profesyonel e-ticaret çözümleri ile online mağazanızı kurun. Dönüşüm odaklı tasarım, güvenli ödeme altyapısı ve pazarlama araçları ile satışlarınızı katlamak istiyorsanız doğru yerdesiniz.'
                  : 'Set up your online store with professional e-commerce solutions. If you want to multiply your sales with conversion-focused design, secure payment infrastructure and marketing tools, you are in the right place.'
                }
              </p>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-500" />
                  {language === 'tr' ? '100% Güvenli Ödeme' : '100% Secure Payment'}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-600" />
                  {language === 'tr' ? '24/7 Destek' : '24/7 Support'}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#packages"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  {language === 'tr' ? 'Paketleri İncele' : 'View Packages'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 border border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                >
                  {language === 'tr' ? 'Demo Talep Et' : 'Request Demo'}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  {/* TODO: Add e-commerce mockup */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">🛒</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'tr' ? 'E-Ticaret Site Örnekleri' : 'E-Commerce Site Examples'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Müşterilerimizin E-Ticaret Başarıları'
                : 'Our Clients\' E-Commerce Success'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Profesyonel e-ticaret çözümleri ile elde edilen gerçek satış artışları.'
                : 'Real sales increases achieved with professional e-commerce solutions.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {metric.increase}
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'tr' ? metric.metric : metric.metricEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'tr' ? metric.period : metric.periodEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'E-Ticaret Çözümlerimizin Özellikleri'
                : 'Features of Our E-Commerce Solutions'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Satışlarınızı artıracak her detayı düşündük ve uyguladık.'
                : 'We thought and implemented every detail that will increase your sales.'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {ecommerceFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-4 p-6 rounded-xl border transition-all cursor-pointer',
                      activeFeature === index 
                        ? 'bg-orange-50 border-orange-200 shadow-md' 
                        : 'bg-background hover:bg-muted/50'
                    )}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className={cn(
                      'flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0',
                      activeFeature === index 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-muted text-muted-foreground'
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">
                        {language === 'tr' ? feature.titleTr : feature.titleEn}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {language === 'tr' ? feature.descTr : feature.descEn}
                      </p>
                      <div className="space-y-1">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-orange-600" />
                            <span className="text-xs text-muted-foreground">
                              {language === 'tr' ? benefit.tr : benefit.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="sticky top-8">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
                {/* TODO: Add feature-specific mockup */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.createElement(ecommerceFeatures[activeFeature].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {language === 'tr' ? ecommerceFeatures[activeFeature].titleTr : ecommerceFeatures[activeFeature].titleEn}
                  </div>
                  <div className="text-sm text-muted-foreground max-w-xs">
                    {language === 'tr' ? ecommerceFeatures[activeFeature].descTr : ecommerceFeatures[activeFeature].descEn}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Hangi Platformları Kullanıyoruz?'
                : 'Which Platforms Do We Use?'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'İhtiyacınıza ve bütçenize en uygun e-ticaret platformunu seçiyoruz.'
                : 'We choose the most suitable e-commerce platform for your needs and budget.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-lg font-semibold mb-3">
                  {platform.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {language === 'tr' ? platform.descTr : platform.descEn}
                </p>
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'E-Ticaret Paketlerimiz'
                : 'Our E-Commerce Packages'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Online mağazanızı kurmak için ihtiyacınız olan her şey dahil.'
                : 'Everything you need to set up your online store is included.'
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
                    ? 'border-orange-500 bg-orange-50 scale-105' 
                    : 'bg-background'
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      {language === 'tr' ? 'En Popüler' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'tr' ? pkg.nameTr : pkg.nameEn}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === 'tr' ? pkg.descTr : pkg.descEn}
                  </p>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {pkg.deliveryTime}
                  </div>
                  <div className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                    {pkg.platform}
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'border border-orange-600 text-orange-600 hover:bg-orange-50'
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {language === 'tr' 
              ? 'Online Satışlarınızı Bugün Başlatın'
              : 'Start Your Online Sales Today'
            }
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Profesyonel e-ticaret sitenizle rakiplerinizin önüne geçin. Ücretsiz demo ile başlayın.'
              : 'Get ahead of your competitors with your professional e-commerce site. Start with a free demo.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {language === 'tr' ? 'Ücretsiz Demo Al' : 'Get Free Demo'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:+905551234567"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              {language === 'tr' ? 'Hemen Arayın' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}