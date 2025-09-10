'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Check, ArrowRight, Heart, MessageCircle, Share2, Camera, Film, Palette, Users2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SosyalMedyaIcerikPage() {
  const { language } = useLanguage()
  const [activePlatform, setActivePlatform] = useState(0)

  const platforms = [
    {
      name: 'Instagram',
      icon: '📸',
      color: 'from-pink-500 to-orange-500',
      descTr: 'Görsel odaklı içerikler, story\'ler ve reels ile markanızı güçlendirin.',
      descEn: 'Strengthen your brand with visual-focused content, stories and reels.',
      services: [
        { tr: 'Feed gönderi tasarımı', en: 'Feed post design' },
        { tr: 'Instagram Story & Highlights', en: 'Instagram Story & Highlights' },
        { tr: 'Reels video üretimi', en: 'Reels video production' },
        { tr: 'Hashtag stratejisi', en: 'Hashtag strategy' }
      ]
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: 'from-blue-600 to-blue-800',
      descTr: 'Profesyonel ağ kurma ve B2B pazarlama için etkili içerikler.',
      descEn: 'Effective content for professional networking and B2B marketing.',
      services: [
        { tr: 'Profesyonel makale yazımı', en: 'Professional article writing' },
        { tr: 'Şirket sayfası yönetimi', en: 'Company page management' },
        { tr: 'Thought leadership içerikleri', en: 'Thought leadership content' },
        { tr: 'LinkedIn ads yönetimi', en: 'LinkedIn ads management' }
      ]
    },
    {
      name: 'Facebook',
      icon: '👥',
      color: 'from-blue-500 to-blue-700',
      descTr: 'Geniş kitle erişimi ve topluluk oluşturma odaklı içerikler.',
      descEn: 'Content focused on broad audience reach and community building.',
      services: [
        { tr: 'Sayfa yönetimi & moderasyon', en: 'Page management & moderation' },
        { tr: 'Facebook ads kampanyaları', en: 'Facebook ad campaigns' },
        { tr: 'Etkinlik tanıtımları', en: 'Event promotions' },
        { tr: 'Topluluk oluşturma', en: 'Community building' }
      ]
    },
    {
      name: 'YouTube',
      icon: '🎥',
      color: 'from-red-500 to-red-700',
      descTr: 'Video içerik üretimi ve kanal büyütme stratejileri.',
      descEn: 'Video content production and channel growth strategies.',
      services: [
        { tr: 'Video senaryo yazımı', en: 'Video script writing' },
        { tr: 'Thumbnail tasarımı', en: 'Thumbnail design' },
        { tr: 'SEO optimize başlık/açıklama', en: 'SEO optimized title/description' },
        { tr: 'Kanal branding', en: 'Channel branding' }
      ]
    }
  ]

  const contentTypes = [
    {
      iconTr: '🎨',
      iconEn: '🎨',
      titleTr: 'Görsel Tasarım',
      titleEn: 'Visual Design',
      descTr: 'Markanıza uygun, göz alıcı sosyal medya görselleri tasarlıyoruz.',
      descEn: 'We design eye-catching social media visuals that match your brand.',
      icon: Palette
    },
    {
      iconTr: '🎬',
      iconEn: '🎬',
      titleTr: 'Video İçerik',
      titleEn: 'Video Content',
      descTr: 'Reels, TikTok ve YouTube için etkileyici video içerikleri üretiyoruz.',
      descEn: 'We produce impressive video content for Reels, TikTok and YouTube.',
      icon: Film
    },
    {
      iconTr: '✍️',
      iconEn: '✍️',
      titleTr: 'Metin & Copy',
      titleEn: 'Text & Copy',
      descTr: 'Etkileşim artıran, markanızın sesini yansıtan metinler yazıyoruz.',
      descEn: 'We write texts that increase engagement and reflect your brand voice.',
      icon: MessageCircle
    },
    {
      iconTr: '📊',
      iconEn: '📊',
      titleTr: 'Strateji & Analiz',
      titleEn: 'Strategy & Analytics',
      descTr: 'Veriye dayalı içerik stratejisi geliştirip performansı analiz ediyoruz.',
      descEn: 'We develop data-driven content strategy and analyze performance.',
      icon: Users2
    }
  ]

  const packages = [
    {
      nameTr: 'Başlangıç Paketi',
      nameEn: 'Starter Package',
      price: '₺20.000',
      descTr: 'Küçük işletmeler için',
      descEn: 'For small businesses',
      platforms: ['Instagram'],
      features: [
        { tr: '12 feed gönderi tasarımı', en: '12 feed post designs' },
        { tr: '8 story tasarımı', en: '8 story designs' },
        { tr: 'Içerik takvimi', en: 'Content calendar' },
        { tr: 'Temel hashtag araştırması', en: 'Basic hashtag research' },
        { tr: 'Aylık performans raporu', en: 'Monthly performance report' }
      ],
      duration: 'Aylık'
    },
    {
      nameTr: 'Profesyonel Paket',
      nameEn: 'Professional Package',
      price: '₺30.000',
      descTr: 'Büyüyen işletmeler için',
      descEn: 'For growing businesses',
      popular: true,
      platforms: ['Instagram', 'Facebook', 'LinkedIn'],
      features: [
        { tr: '30 çoklu platform gönderi', en: '30 multi-platform posts' },
        { tr: '15 story & reels içerik', en: '15 story & reels content' },
        { tr: 'Topluluk yönetimi', en: 'Community management' },
        { tr: 'İçerik stratejisi danışmanlığı', en: 'Content strategy consulting' },
        { tr: 'Rekabetçi analiz', en: 'Competitive analysis' },
        { tr: '2 haftada bir detaylı rapor', en: 'Detailed report every 2 weeks' }
      ],
      duration: 'Aylık'
    },
    {
      nameTr: 'Kurumsal Paket',
      nameEn: 'Enterprise Package',
      price: '₺50.000+',
      descTr: 'Büyük markalar için',
      descEn: 'For large brands',
      platforms: ['Tüm Platformlar', 'All Platforms'],
      features: [
        { tr: 'Sınırsız içerik üretimi', en: 'Unlimited content production' },
        { tr: 'Video içerik üretimi', en: 'Video content production' },
        { tr: '7/24 topluluk yönetimi', en: '24/7 community management' },
        { tr: 'Influencer işbirlikleri', en: 'Influencer collaborations' },
        { tr: 'Kriz yönetimi desteği', en: 'Crisis management support' },
        { tr: 'Özel sosyal medya uzmanı', en: 'Dedicated social media specialist' },
        { tr: 'Haftalık strateji toplantısı', en: 'Weekly strategy meeting' }
      ],
      duration: 'Aylık'
    }
  ]

  const socialStats = [
    {
      metric: 'Takipçi Artışı',
      metricEn: 'Follower Growth',
      increase: '+245%',
      period: '6 ayda',
      periodEn: 'in 6 months'
    },
    {
      metric: 'Etkileşim Oranı',
      metricEn: 'Engagement Rate',
      increase: '+180%',
      period: 'Ortalama',
      periodEn: 'Average'
    },
    {
      metric: 'Marka Bilinirliği',
      metricEn: 'Brand Awareness',
      increase: '+320%',
      period: '4 ayda',
      periodEn: 'in 4 months'
    },
    {
      metric: 'Lead Generation',
      metricEn: 'Lead Generation',
      increase: '+156%',
      period: 'Aylık ortalama',
      periodEn: 'Monthly average'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-600 text-sm font-medium">
                <Heart className="w-4 h-4" />
                {language === 'tr' ? 'Sosyal Medya Yönetimi' : 'Social Media Management'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {language === 'tr' ? (
                  <>
                    <span className="block">Sosyal Medyada</span>
                    <span className="block text-pink-600">Viral Olun</span>
                    <span className="block">Satışlarınızı Artırın</span>
                  </>
                ) : (
                  <>
                    <span className="block">Go Viral on</span>
                    <span className="block text-pink-600">Social Media</span>
                    <span className="block">Boost Your Sales</span>
                  </>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === 'tr' 
                  ? 'Etkileşim artıran içerikler, profesyonel tasarımlar ve stratejik sosyal medya yönetimi ile markanızı milyonlarca kişiye ulaştırın.'
                  : 'Reach millions of people with your brand through engagement-boosting content, professional designs and strategic social media management.'
                }
              </p>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-500" />
                  {language === 'tr' ? '2M+ Toplam Etkileşim' : '2M+ Total Engagement'}
                </div>
                <div className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-pink-600" />
                  {language === 'tr' ? '100+ Marka Deneyimi' : '100+ Brand Experience'}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#packages"
                  className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                >
                  {language === 'tr' ? 'Paketleri İncele' : 'View Packages'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 border border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
                >
                  {language === 'tr' ? 'Portföyü İncele' : 'View Portfolio'}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                  {/* TODO: Add social media mockup */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'tr' ? 'Sosyal Medya Örnekleri' : 'Social Media Examples'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Müşterilerimizin Sosyal Medya Başarıları'
                : 'Our Clients\' Social Media Success'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Stratejik içerik yönetimi ile elde edilen gerçek performans artışları.'
                : 'Real performance improvements achieved through strategic content management.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {socialStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  {stat.increase}
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'tr' ? stat.metric : stat.metricEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'tr' ? stat.period : stat.periodEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Hangi Platformlarda Hizmet Veriyoruz?'
                : 'Which Platforms Do We Serve?'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Her platformun kendine özgü stratejisiyle maksimum etkileşim sağlıyoruz.'
                : 'We achieve maximum engagement with each platform\'s unique strategy.'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-4 p-6 rounded-xl border transition-all cursor-pointer',
                    activePlatform === index 
                      ? 'bg-pink-50 border-pink-200 shadow-md' 
                      : 'bg-background hover:bg-muted/50'
                  )}
                  onClick={() => setActivePlatform(index)}
                >
                  <div className={cn(
                    'flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-r text-white text-xl',
                    platform.color
                  )}>
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {language === 'tr' ? platform.descTr : platform.descEn}
                    </p>
                    <div className="space-y-1">
                      {platform.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-pink-600" />
                          <span className="text-xs text-muted-foreground">
                            {language === 'tr' ? service.tr : service.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="sticky top-8">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                {/* TODO: Add platform-specific mockup */}
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {platforms[activePlatform].icon}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {platforms[activePlatform].name}
                  </div>
                  <div className="text-sm text-muted-foreground max-w-xs">
                    {language === 'tr' ? platforms[activePlatform].descTr : platforms[activePlatform].descEn}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Ne Tür İçerikler Üretiyoruz?'
                : 'What Types of Content Do We Produce?'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Markanızın hedeflerine uygun, etkileşim artıran çeşitli içerik türleri.'
                : 'Various content types that match your brand goals and increase engagement.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {language === 'tr' ? type.titleTr : type.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {language === 'tr' ? type.descTr : type.descEn}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Sosyal Medya Paketlerimiz'
                : 'Our Social Media Packages'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Markanıza ve bütçenize en uygun sosyal medya çözümünü seçin.'
                : 'Choose the social media solution that best fits your brand and budget.'
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
                    ? 'border-pink-500 bg-pink-50 scale-105' 
                    : 'bg-background'
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
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
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pkg.duration}
                  </div>
                  
                  {/* Platforms */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {pkg.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
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
                      ? 'bg-pink-600 text-white hover:bg-pink-700'
                      : 'border border-pink-600 text-pink-600 hover:bg-pink-50'
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {language === 'tr' 
              ? 'Sosyal Medyada Viral Olmaya Hazır Mısınız?'
              : 'Are You Ready to Go Viral on Social Media?'
            }
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Markanızı milyonlarca kişiye ulaştıracak içerik stratejinizi birlikte oluşturalım.'
              : 'Let\'s create your content strategy that will reach millions of people with your brand.'
            }
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {language === 'tr' ? 'Hemen Başlayalım' : 'Let\'s Start Now'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}