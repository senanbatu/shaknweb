'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { ArrowRight, Award, Users, Clock, Target, Heart, Lightbulb, Shield, Zap } from 'lucide-react'

export default function HakkimizdaPage() {
  const { language } = useLanguage()

  const values = [
    {
      iconTr: '🎯',
      iconEn: '🎯',
      titleTr: 'Hedef Odaklılık',
      titleEn: 'Goal-Oriented',
      descTr: 'Her projede ölçülebilir sonuçlar elde etmek için çalışırız.',
      descEn: 'We work to achieve measurable results in every project.',
      icon: Target
    },
    {
      iconTr: '💡',
      iconEn: '💡',
      titleTr: 'İnovatif Düşünce',
      titleEn: 'Innovative Thinking',
      descTr: 'Teknolojinin gücüyle yaratıcı çözümler üretiyoruz.',
      descEn: 'We produce creative solutions with the power of technology.',
      icon: Lightbulb
    },
    {
      iconTr: '🤝',
      iconEn: '🤝',
      titleTr: 'Güvenilirlik',
      titleEn: 'Reliability',
      descTr: 'Sözlerimizin arkasında dururuz ve zamanında teslimat yaparız.',
      descEn: 'We stand behind our promises and deliver on time.',
      icon: Shield
    },
    {
      iconTr: '⚡',
      iconEn: '⚡',
      titleTr: 'Hızlı Çözüm',
      titleEn: 'Fast Solution',
      descTr: 'Hızlı ve etkili çözümlerle süreçlerinizi optimize ediyoruz.',
      descEn: 'We optimize your processes with fast and effective solutions.',
      icon: Zap
    }
  ]

  const team = [
    {
      name: 'Batu Şen',
      role: 'Founder & CEO',
      roleTr: 'Kurucu & CEO',
      image: '/team/batu-sen.jpg', // TODO: Add real team photos
      bio: {
        tr: '15+ yıl web geliştirme deneyimi. Google ve Meta sertifikalı dijital pazarlama uzmanı.',
        en: '15+ years of web development experience. Google and Meta certified digital marketing expert.'
      },
      skills: ['Web Development', 'SEO', 'Digital Strategy']
    },
    {
      name: 'Ahmet Kaya', // TODO: Update with real team members
      role: 'Lead Designer',
      roleTr: 'Baş Tasarımcı',
      image: '/team/ahmet-kaya.jpg',
      bio: {
        tr: 'UI/UX tasarım alanında 8+ yıl deneyim. 100+ başarılı proje tasarımı.',
        en: '8+ years of experience in UI/UX design. 100+ successful project designs.'
      },
      skills: ['UI/UX Design', 'Brand Identity', 'Figma']
    },
    {
      name: 'Zehra Demir', // TODO: Update with real team members
      role: 'SEO Specialist',
      roleTr: 'SEO Uzmanı',
      image: '/team/zehra-demir.jpg',
      bio: {
        tr: 'SEO ve içerik pazarlaması konusunda 6+ yıl uzman. Google Analytics sertifikalı.',
        en: '6+ years expert in SEO and content marketing. Google Analytics certified.'
      },
      skills: ['Technical SEO', 'Content Strategy', 'Analytics']
    }
  ]

  const stats = [
    {
      numberTr: '200+',
      numberEn: '200+',
      labelTr: 'Başarılı Proje',
      labelEn: 'Successful Projects'
    },
    {
      numberTr: '150+',
      numberEn: '150+',
      labelTr: 'Mutlu Müşteri',
      labelEn: 'Happy Clients'
    },
    {
      numberTr: '5+',
      numberEn: '5+',
      labelTr: 'Yıllık Deneyim',
      labelEn: 'Years Experience'
    },
    {
      numberTr: '%98',
      numberEn: '98%',
      labelTr: 'Memnuniyet Oranı',
      labelEn: 'Satisfaction Rate'
    }
  ]

  const timeline = [
    {
      yearTr: '2019',
      yearEn: '2019',
      titleTr: 'Shakn\'ın Kuruluşu',
      titleEn: 'Foundation of Shakn',
      descTr: 'Dijital dünyada fark yaratma vizyonuyla yola çıktık.',
      descEn: 'We started with the vision of making a difference in the digital world.'
    },
    {
      yearTr: '2020',
      yearEn: '2020',
      titleTr: 'İlk 50 Müşteri',
      titleEn: 'First 50 Clients',
      descTr: 'Küçük işletmelerin dijital dönüşümüne öncülük ettik.',
      descEn: 'We pioneered the digital transformation of small businesses.'
    },
    {
      yearTr: '2021',
      yearEn: '2021',
      titleTr: 'E-Ticaret Uzmanlaşması',
      titleEn: 'E-Commerce Specialization',
      descTr: 'Online satış platformları konusunda uzmanlaştık.',
      descEn: 'We specialized in online sales platforms.'
    },
    {
      yearTr: '2022',
      yearEn: '2022',
      titleTr: 'Kurumsal Müşteriler',
      titleEn: 'Corporate Clients',
      descTr: 'Büyük markaların dijital partner\'ı olmaya başladık.',
      descEn: 'We started to become the digital partner of big brands.'
    },
    {
      yearTr: '2023',
      yearEn: '2023',
      titleTr: 'AI Entegrasyonu',
      titleEn: 'AI Integration',
      descTr: 'Yapay zeka destekli çözümler sunmaya başladık.',
      descEn: 'We started to offer artificial intelligence supported solutions.'
    },
    {
      yearTr: '2024',
      yearEn: '2024',
      titleTr: 'Global Erişim',
      titleEn: 'Global Reach',
      descTr: 'Uluslararası müşterilere hizmet vermeye başladık.',
      descEn: 'We started serving international customers.'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="w-4 h-4" />
                {language === 'tr' ? 'Hakkımızda' : 'About Us'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {language === 'tr' ? (
                  <>
                    <span className="block">Dijital Dünyada</span>
                    <span className="block text-primary">Fark Yaratan</span>
                    <span className="block">Ekibiz</span>
                  </>
                ) : (
                  <>
                    <span className="block">Making a</span>
                    <span className="block text-primary">Difference</span>
                    <span className="block">in Digital World</span>
                  </>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === 'tr' 
                  ? 'Shakn olarak, işletmelerin dijital dünyada başarılı olmalarını sağlayan teknoloji çözümleri sunuyoruz. Müşteri memnuniyeti odaklı yaklaşımımızla, her projeyi bir başarı hikayesine dönüştürüyoruz.'
                  : 'As Shakn, we provide technology solutions that enable businesses to succeed in the digital world. With our customer satisfaction-focused approach, we turn every project into a success story.'
                }
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {language === 'tr' ? stat.numberTr : stat.numberEn}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'tr' ? stat.labelTr : stat.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {/* TODO: Add team photo */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">👥</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'tr' ? 'Shakn Ekibi' : 'Shakn Team'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Değerlerimiz'
                : 'Our Values'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Çalışma prensiplerimizdeki temel değerler, başarılı projelerimizin anahtarıdır.'
                : 'The core values in our working principles are the key to our successful projects.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {language === 'tr' ? value.titleTr : value.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {language === 'tr' ? value.descTr : value.descEn}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">
                {language === 'tr' ? 'Misyonumuz' : 'Our Mission'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'tr'
                  ? 'Her büyüklükteki işletmenin dijital dünyada güçlü bir varlık göstermesi için ihtiyaç duydukları teknoloji çözümlerini sunmak. Müşterilerimizin hedeflerine ulaşmalarını sağlayarak, onların dijital dönüşüm yolculuğunda güvenilir partneri olmak.'
                  : 'To provide the technology solutions that businesses of all sizes need to show a strong presence in the digital world. To be a reliable partner in their digital transformation journey by enabling our customers to reach their goals.'
                }
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">
                {language === 'tr' ? 'Vizyonumuz' : 'Our Vision'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'tr'
                  ? 'Türkiye\'nin öncü dijital çözümler şirketi olarak, teknolojinin gücüyle işletmeleri geleceğe hazırlamak. İnovatif yaklaşımlarımız ve müşteri odaklı hizmet anlayışımızla, dijital pazarda standartları belirleyen lider konumuna ulaşmak.'
                  : 'As Turkey\'s leading digital solutions company, preparing businesses for the future with the power of technology. To reach the leading position that sets standards in the digital market with our innovative approaches and customer-oriented service approach.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Yolculuğumuz'
                : 'Our Journey'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Shakn\'ın kuruluşundan bugüne kadar geçen süreçteki önemli kilometre taşları.'
                : 'Important milestones in the process from the establishment of Shakn to today.'
              }
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-background border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-primary font-semibold mb-2">
                        {language === 'tr' ? item.yearTr : item.yearEn}
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {language === 'tr' ? item.titleTr : item.titleEn}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {language === 'tr' ? item.descTr : item.descEn}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'tr' 
                ? 'Ekibimiz'
                : 'Our Team'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Alanında uzman, deneyimli ve tutkulu ekibimizle projelerinizi hayata geçiriyoruz.'
                : 'We bring your projects to life with our expert, experienced and passionate team.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                {/* Team Member Photo */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {/* TODO: Add real team photos */}
                  <div className="text-2xl">👤</div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {language === 'tr' ? member.roleTr : member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {language === 'tr' ? member.bio.tr : member.bio.en}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
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
              ? 'Birlikte Çalışmaya Hazır Mısınız?'
              : 'Are You Ready to Work Together?'
            }
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Projelerinizi gerçekleştirmek ve dijital hedeflerinize ulaşmak için bizimle iletişime geçin.'
              : 'Contact us to realize your projects and reach your digital goals.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              {language === 'tr' ? 'Projeni Konuşalım' : 'Let\'s Discuss Your Project'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              {language === 'tr' ? 'Hizmetlerimizi İncele' : 'Explore Our Services'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}