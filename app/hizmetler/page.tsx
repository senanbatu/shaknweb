'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { ArrowRight, Star, Users, CheckCircle, Zap } from 'lucide-react'

export default function HizmetlerPage() {
  const { language } = useLanguage()

  const services = [
    {
      slug: 'web-tasarim',
      iconTr: '🚀',
      iconEn: '🚀',
      titleTr: 'Web Tasarım & Geliştirme',
      titleEn: 'Web Design & Development',
      shortDescTr: 'Modern, hızlı ve SEO optimize web siteleri',
      shortDescEn: 'Modern, fast and SEO optimized websites',
      descTr: 'Markanızı dijital dünyada öne çıkaracak profesyonel web siteleri tasarlıyoruz. Responsive tasarım, kullanıcı deneyimi ve performans odaklı yaklaşımımızla fark yaratın.',
      descEn: 'We design professional websites that will make your brand stand out in the digital world. Make a difference with our responsive design, user experience and performance-focused approach.',
      features: [
        { tr: 'Responsive & Mobile-First Tasarım', en: 'Responsive & Mobile-First Design' },
        { tr: 'Core Web Vitals Optimizasyonu', en: 'Core Web Vitals Optimization' },
        { tr: 'SEO Hazır Yapı', en: 'SEO Ready Structure' },
        { tr: 'Modern UI/UX Tasarım', en: 'Modern UI/UX Design' }
      ],
      startingPrice: '₺15.000',
      deliveryTime: '10-20 gün'
    },
    {
      slug: 'seo-danismanligi',
      iconTr: '📈',
      iconEn: '📈',
      titleTr: 'SEO Danışmanlığı',
      titleEn: 'SEO Consulting',
      shortDescTr: 'Organik trafik artışı ve arama motoru sıralaması',
      shortDescEn: 'Organic traffic growth and search engine ranking',
      descTr: 'Google\'da üst sıralarda yer alın ve organik trafiğinizi katlamak istiyorsanız doğru yerdesiniz. Teknik SEO, içerik stratejisi ve link building ile hedeflerinize ulaşın.',
      descEn: 'If you want to rank at the top on Google and multiply your organic traffic, you are in the right place. Achieve your goals with technical SEO, content strategy and link building.',
      features: [
        { tr: 'Teknik SEO Analizi & Optimizasyonu', en: 'Technical SEO Analysis & Optimization' },
        { tr: 'Anahtar Kelime Araştırması & Strateji', en: 'Keyword Research & Strategy' },
        { tr: 'İçerik Optimizasyonu', en: 'Content Optimization' },
        { tr: 'Link Building & Otorite Artırma', en: 'Link Building & Authority Building' }
      ],
      startingPrice: '₺8.000',
      deliveryTime: '30-60 gün'
    },
    {
      slug: 'sosyal-medya-icerik',
      iconTr: '📱',
      iconEn: '📱',
      titleTr: 'Sosyal Medya İçerik Yönetimi',
      titleEn: 'Social Media Content Management',
      shortDescTr: 'Etkileşim artıran içerik stratejisi ve yönetimi',
      shortDescEn: 'Engagement-boosting content strategy and management',
      descTr: 'Sosyal medya platformlarında markanızı güçlendirecek içerikler üretiyoruz. Instagram, LinkedIn, Facebook için profesyonel içerik üretimi ve topluluk yönetimi.',
      descEn: 'We produce content that will strengthen your brand on social media platforms. Professional content production and community management for Instagram, LinkedIn, Facebook.',
      features: [
        { tr: 'İçerik Takvimi & Stratejisi', en: 'Content Calendar & Strategy' },
        { tr: 'Görsel & Video İçerik Üretimi', en: 'Visual & Video Content Production' },
        { tr: 'Topluluk Yönetimi', en: 'Community Management' },
        { tr: 'Analitik & Raporlama', en: 'Analytics & Reporting' }
      ],
      startingPrice: '₺12.000',
      deliveryTime: 'Aylık paket'
    },
    {
      slug: 'e-ticaret-cozumleri',
      iconTr: '🛒',
      iconEn: '🛒',
      titleTr: 'E-Ticaret Çözümleri',
      titleEn: 'E-Commerce Solutions',
      shortDescTr: 'Online satış platformu kurulumu ve optimizasyonu',
      shortDescEn: 'Online sales platform setup and optimization',
      descTr: 'E-ticaret sitenizi dönüşüm odaklı tasarlayıp, satışlarınızı artıracak optimizasyonlar yapıyoruz. Ödeme sistemleri, envanter yönetimi ve müşteri deneyimi odaklı yaklaşım.',
      descEn: 'We design your e-commerce site with a conversion focus and make optimizations that will increase your sales. Payment systems, inventory management and customer experience focused approach.',
      features: [
        { tr: 'E-Ticaret Platform Kurulumu', en: 'E-Commerce Platform Setup' },
        { tr: 'Ödeme Sistemleri Entegrasyonu', en: 'Payment Systems Integration' },
        { tr: 'Dönüşüm Optimizasyonu (CRO)', en: 'Conversion Rate Optimization (CRO)' },
        { tr: 'Envanter & Sipariş Yönetimi', en: 'Inventory & Order Management' }
      ],
      startingPrice: '₺25.000',
      deliveryTime: '20-40 gün'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              {language === 'tr' ? 'Dijital Çözümler' : 'Digital Solutions'}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'tr' ? (
                <>
                  <span className="block">Dijital Başarınız İçin</span>
                  <span className="block text-primary">Profesyonel Hizmetler</span>
                </>
              ) : (
                <>
                  <span className="block">Professional Services</span>
                  <span className="block text-primary">For Your Digital Success</span>
                </>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {language === 'tr'
                ? 'Web tasarımından SEO\'ya, sosyal medyadan e-ticarete kadar dijital dünyada başarılı olmanız için ihtiyacınız olan tüm hizmetleri sunuyoruz.'
                : 'From web design to SEO, from social media to e-commerce, we offer all the services you need to succeed in the digital world.'
              }
            </p>

            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                {language === 'tr' ? '50+ Mutlu Müşteri' : '50+ Happy Clients'}
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                {language === 'tr' ? '%98 Memnuniyet' : '98% Satisfaction'}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                {language === 'tr' ? '3 Yıl Garanti' : '3 Years Warranty'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="group relative bg-card border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Service Icon */}
                <div className="text-5xl mb-6">{service.iconTr}</div>
                
                {/* Service Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {language === 'tr' ? service.titleTr : service.titleEn}
                  </h2>
                  <p className="text-muted-foreground font-medium">
                    {language === 'tr' ? service.shortDescTr : service.shortDescEn}
                  </p>
                </div>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {language === 'tr' ? service.descTr : service.descEn}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {language === 'tr' ? feature.tr : feature.en}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Delivery */}
                <div className="flex items-center justify-between mb-6 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'tr' ? 'Başlangıç fiyatı' : 'Starting from'}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {service.startingPrice}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {language === 'tr' ? 'Teslimat süresi' : 'Delivery time'}
                    </div>
                    <div className="font-semibold">
                      {service.deliveryTime}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
                  >
                    {language === 'tr' ? 'Detayları İncele' : 'View Details'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/iletisim"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                  >
                    {language === 'tr' ? 'Teklif Al' : 'Get Quote'}
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Neden Shakn\'ı Seçmelisiniz?'
                : 'Why Should You Choose Shakn?'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? '15+ yıllık deneyim ve kanıtlanmış başarı hikayeleriyle yanınızdayız.'
                : 'We are with you with 15+ years of experience and proven success stories.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'tr' ? 'Hızlı Teslimat' : 'Fast Delivery'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'tr'
                  ? 'Projelerinizi zamanında ve kaliteli şekilde teslim ediyoruz.'
                  : 'We deliver your projects on time and with quality.'
                }
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'tr' ? 'Sonuç Odaklı' : 'Result Oriented'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'tr'
                  ? 'Her projede ölçülebilir sonuçlar elde etmeyi hedefliyoruz.'
                  : 'We aim to achieve measurable results in every project.'
                }
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'tr' ? 'Premium Kalite' : 'Premium Quality'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'tr'
                  ? 'En yüksek standartlarda hizmet sunmak için çalışıyoruz.'
                  : 'We work to provide service at the highest standards.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {language === 'tr' 
              ? 'Hangi Hizmete İhtiyacınız Var?'
              : 'Which Service Do You Need?'
            }
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Ücretsiz keşif görüşmesinde projenizi değerlendirelim ve size en uygun çözümü sunalım.'
              : 'Let\'s evaluate your project in a free discovery meeting and offer you the most suitable solution.'
            }
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors"
          >
            {language === 'tr' ? 'Ücretsiz Keşif Görüşmesi' : 'Free Discovery Meeting'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}