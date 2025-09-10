'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Check, ArrowRight, Star, TrendingUp, Search, BarChart3, Target, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SEODanismanligiPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)

  const seoProcess = [
    {
      titleTr: 'SEO Audit & Analiz',
      titleEn: 'SEO Audit & Analysis',
      descTr: 'Mevcut web sitenizin teknik durumunu, içerik kalitesini ve rakip analizini detaylı olarak inceliyoruz.',
      descEn: 'We examine the technical status, content quality and competitor analysis of your current website in detail.',
      duration: '5-7 gün',
      icon: Search
    },
    {
      titleTr: 'Anahtar Kelime Stratejisi',
      titleEn: 'Keyword Strategy',
      descTr: 'Hedef kitlenizin aradığı kelimeleri tespit edip, rekabet analizi yaparak strateji oluşturuyoruz.',
      descEn: 'We identify the words your target audience is searching for and create a strategy by analyzing the competition.',
      duration: '3-5 gün',
      icon: Target
    },
    {
      titleTr: 'Teknik SEO Optimizasyonu',
      titleEn: 'Technical SEO Optimization',
      descTr: 'Site hızı, mobil uyumluluk, URL yapısı, meta etiketler gibi teknik faktörleri optimize ediyoruz.',
      descEn: 'We optimize technical factors such as site speed, mobile compatibility, URL structure, meta tags.',
      duration: '10-15 gün',
      icon: BarChart3
    },
    {
      titleTr: 'İçerik & Link Building',
      titleEn: 'Content & Link Building',
      descTr: 'SEO dostu içerikler oluşturup, kaliteli backlinkler kazanarak otoritenizi artırıyoruz.',
      descEn: 'We create SEO-friendly content and increase your authority by gaining quality backlinks.',
      duration: '30-60 gün',
      icon: TrendingUp
    }
  ]

  const seoPackages = [
    {
      nameTr: 'Temel SEO',
      nameEn: 'Basic SEO',
      price: '₺8.000',
      descTr: 'Küçük işletmeler için ideal',
      descEn: 'Perfect for small businesses',
      features: [
        { tr: 'Teknik SEO audit ve düzeltmeler', en: 'Technical SEO audit and fixes' },
        { tr: '10 anahtar kelime optimizasyonu', en: '10 keyword optimization' },
        { tr: 'Google My Business optimizasyonu', en: 'Google My Business optimization' },
        { tr: 'Aylık performans raporu', en: 'Monthly performance report' }
      ],
      duration: '30 gün',
      guarantee: 'tr: "3 ay garanti", en: "3 month guarantee"'
    },
    {
      nameTr: 'Profesyonel SEO',
      nameEn: 'Professional SEO',
      price: '₺18.000',
      descTr: 'Orta ölçekli işletmeler için',
      descEn: 'For medium-sized businesses',
      popular: true,
      features: [
        { tr: 'Kapsamlı SEO audit ve optimizasyon', en: 'Comprehensive SEO audit and optimization' },
        { tr: '25 anahtar kelime stratejisi', en: '25 keyword strategy' },
        { tr: 'İçerik optimizasyonu (10 sayfa)', en: 'Content optimization (10 pages)' },
        { tr: 'Local SEO + Google Maps', en: 'Local SEO + Google Maps' },
        { tr: '2 haftada bir detaylı rapor', en: 'Detailed report every 2 weeks' }
      ],
      duration: '60 gün',
      guarantee: 'tr: "6 ay garanti", en: "6 month guarantee"'
    },
    {
      nameTr: 'Kurumsal SEO',
      nameEn: 'Enterprise SEO',
      price: '₺35.000+',
      descTr: 'Büyük şirketler için',
      descEn: 'For large companies',
      features: [
        { tr: 'Enterprise SEO stratejisi', en: 'Enterprise SEO strategy' },
        { tr: 'Sınırsız anahtar kelime', en: 'Unlimited keywords' },
        { tr: 'E-ticaret SEO optimizasyonu', en: 'E-commerce SEO optimization' },
        { tr: 'Link building kampanyası', en: 'Link building campaign' },
        { tr: 'Haftalık analitik rapor', en: 'Weekly analytics report' },
        { tr: 'Özel SEO uzmanı ataması', en: 'Dedicated SEO specialist' }
      ],
      duration: '90+ gün',
      guarantee: 'tr: "12 ay garanti", en: "12 month guarantee"'
    }
  ]

  const seoResults = [
    {
      metric: 'Organik Trafik',
      metricEn: 'Organic Traffic',
      increase: '+380%',
      period: '6 ay',
      periodEn: '6 months'
    },
    {
      metric: 'Anahtar Kelime Sıralaması',
      metricEn: 'Keyword Rankings',
      increase: '+450%',
      period: 'İlk 3 ayda',
      periodEn: 'First 3 months'
    },
    {
      metric: 'Dönüşüm Oranı',
      metricEn: 'Conversion Rate',
      increase: '+125%',
      period: '4 ay',
      periodEn: '4 months'
    },
    {
      metric: 'Yerel Aramalar',
      metricEn: 'Local Searches',
      increase: '+280%',
      period: '3 ay',
      periodEn: '3 months'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                {language === 'tr' ? 'SEO Danışmanlığı' : 'SEO Consulting'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {language === 'tr' ? (
                  <>
                    <span className="block">Google'da</span>
                    <span className="block text-green-600">1. Sırada</span>
                    <span className="block">Görünün</span>
                  </>
                ) : (
                  <>
                    <span className="block">Rank #1</span>
                    <span className="block text-green-600">on Google</span>
                    <span className="block">Search</span>
                  </>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === 'tr' 
                  ? 'Organik trafik artışı ve sürdürülebilir büyüme için profesyonel SEO danışmanlığı. Rakiplerinizi geride bırakın, satışlarınızı katlamak istiyorsanız doğru yerdesiniz.'
                  : 'Professional SEO consulting for organic traffic growth and sustainable growth. Leave your competitors behind, you are in the right place if you want to multiply your sales.'
                }
              </p>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  {language === 'tr' ? '4.9/5 Müşteri Memnuniyeti' : '4.9/5 Customer Satisfaction'}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-600" />
                  {language === 'tr' ? '200+ Başarılı Proje' : '200+ Successful Projects'}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#packages"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  {language === 'tr' ? 'Paketleri İncele' : 'View Packages'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  {language === 'tr' ? 'Ücretsiz Analiz' : 'Free Analysis'}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  {/* TODO: Add SEO illustration */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">📈</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'tr' ? 'SEO Başarı Grafikleri' : 'SEO Success Charts'}
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
                ? 'Müşterilerimizin Aldığı Sonuçlar'
                : 'Results Our Clients Get'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Veriye dayalı SEO stratejileriyle elde edilen gerçek performans artışları.'
                : 'Real performance improvements achieved with data-driven SEO strategies.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {seoResults.map((result, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {result.increase}
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'tr' ? result.metric : result.metricEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'tr' ? result.period : result.periodEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'SEO Sürecimiz Nasıl İşler?'
                : 'How Does Our SEO Process Work?'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? '4 adımda sistematik yaklaşımla Google\'da üst sıralara çıkın.'
                : 'Reach the top ranks on Google with a systematic approach in 4 steps.'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {seoProcess.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-4 p-6 rounded-xl border transition-all cursor-pointer',
                      activeTab === index 
                        ? 'bg-green-50 border-green-200 shadow-md' 
                        : 'bg-background hover:bg-muted/50'
                    )}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className={cn(
                      'flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0',
                      activeTab === index 
                        ? 'bg-green-600 text-white' 
                        : 'bg-muted text-muted-foreground'
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">
                          {language === 'tr' ? step.titleTr : step.titleEn}
                        </h3>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {language === 'tr' ? step.descTr : step.descEn}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="sticky top-8">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                {/* TODO: Add process illustration */}
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {activeTab === 0 && '🔍'}
                    {activeTab === 1 && '🎯'}
                    {activeTab === 2 && '⚙️'}
                    {activeTab === 3 && '🚀'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'tr' ? seoProcess[activeTab].titleTr : seoProcess[activeTab].titleEn}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'SEO Paketlerimiz'
                : 'Our SEO Packages'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'İhtiyacınıza ve bütçenize uygun SEO çözümü seçin.'
                : 'Choose the SEO solution that fits your needs and budget.'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <div
                key={index}
                className={cn(
                  'relative p-8 rounded-2xl border transition-all hover:shadow-lg',
                  pkg.popular 
                    ? 'border-green-500 bg-green-50 scale-105' 
                    : 'bg-background'
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
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
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pkg.duration}
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'border border-green-600 text-green-600 hover:bg-green-50'
                  )}
                >
                  {language === 'tr' ? 'Paketi Seç' : 'Choose Package'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Sık Sorulan Sorular'
                : 'Frequently Asked Questions'
              }
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                questionTr: 'SEO sonuçlarını ne zaman görmeye başlarım?',
                questionEn: 'When will I start seeing SEO results?',
                answerTr: 'SEO uzun vadeli bir stratejidir. İlk sonuçlar genellikle 3-6 ay içinde görülmeye başlar. Teknik optimizasyonların etkisi daha hızlı olurken, organik trafik artışı için sabır gerekir.',
                answerEn: 'SEO is a long-term strategy. First results usually start to be seen within 3-6 months. The impact of technical optimizations is faster, while organic traffic growth requires patience.'
              },
              {
                questionTr: 'Hangi anahtar kelimeler için çalışacağız?',
                questionEn: 'Which keywords will we work on?',
                answerTr: 'Detaylı anahtar kelime araştırması yaparak, sektörünüzdeki en değerli ve ulaşılabilir kelimeleri tespit ediyoruz. Rekabet analizi ve arama hacmi verilerini kullanarak strateji oluşturuyoruz.',
                answerEn: 'We conduct detailed keyword research to identify the most valuable and achievable words in your industry. We create strategy using competitive analysis and search volume data.'
              },
              {
                questionTr: 'SEO garantisi veriyor musunuz?',
                questionEn: 'Do you guarantee SEO results?',
                answerTr: 'Google sıralaması için kesin garanti veremeyiz çünkü algoritmalar sürekli değişir. Ancak trafikte artış, teknik iyileştirmeler ve raporlama konusunda garanti veriyoruz.',
                answerEn: 'We cannot guarantee exact Google rankings because algorithms are constantly changing. However, we guarantee traffic growth, technical improvements and reporting.'
              }
            ].map((faq, index) => (
              <details key={index} className="group border rounded-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-semibold">
                    {language === 'tr' ? faq.questionTr : faq.questionEn}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'tr' ? faq.answerTr : faq.answerEn}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {language === 'tr' 
              ? 'Google\'da Rakiplerinizi Geride Bırakın'
              : 'Leave Your Competitors Behind on Google'
            }
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Ücretsiz SEO analizi ile web sitenizin potansiyelini keşfedin. 24 saat içinde detaylı rapor hazırlıyoruz.'
              : 'Discover your website\'s potential with free SEO analysis. We prepare a detailed report within 24 hours.'
            }
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {language === 'tr' ? 'Ücretsiz SEO Analizi Al' : 'Get Free SEO Analysis'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}