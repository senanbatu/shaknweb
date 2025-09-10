'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function BlogPage() {
  const { language, t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // TODO: Bu veriler gelecekte CMS'ten gelecek
  const blogPosts = [
    {
      id: 1,
      slug: 'web-tasarim-trendleri-2025',
      titleTr: '2025 Web Tasarım Trendleri: Gelecek Burada',
      titleEn: '2025 Web Design Trends: The Future is Here',
      excerptTr: 'Web tasarımında 2025 yılının en önemli trendlerini keşfedin. AI destekli tasarım, mikro-animasyonlar ve sürdürülebilir web tasarım.',
      excerptEn: 'Discover the most important trends of 2025 in web design. AI-powered design, micro-animations and sustainable web design.',
      category: 'web-design',
      categoryTr: 'Web Tasarım',
      categoryEn: 'Web Design',
      date: '2025-01-15',
      readTime: 8,
      image: '/blog/web-trends-2025.jpg',
      featured: true
    },
    {
      id: 2,
      slug: 'seo-teknikleri-2025',
      titleTr: 'SEO\'da 2025 Stratejileri: Core Web Vitals ve Yapay Zeka',
      titleEn: 'SEO Strategies in 2025: Core Web Vitals and AI',
      excerptTr: 'Google\'ın yeni algoritmalarına uyum sağlayın. Yapay zeka ve Core Web Vitals odaklı SEO stratejileri.',
      excerptEn: 'Adapt to Google\'s new algorithms. AI and Core Web Vitals focused SEO strategies.',
      category: 'seo',
      categoryTr: 'SEO',
      categoryEn: 'SEO',
      date: '2025-01-10',
      readTime: 12,
      image: '/blog/seo-2025.jpg',
      featured: true
    },
    {
      id: 3,
      slug: 'sosyal-medya-icerik-stratejisi',
      titleTr: 'Sosyal Medya İçerik Stratejisi: Engagement Nasıl Artırılır',
      titleEn: 'Social Media Content Strategy: How to Increase Engagement',
      excerptTr: 'Sosyal medya platformlarında organik engagement artırmanın kanıtlanmış yöntemleri ve 2025 stratejileri.',
      excerptEn: 'Proven methods to increase organic engagement on social media platforms and 2025 strategies.',
      category: 'social-media',
      categoryTr: 'Sosyal Medya',
      categoryEn: 'Social Media',
      date: '2025-01-05',
      readTime: 6,
      image: '/blog/social-media-strategy.jpg',
      featured: false
    },
    {
      id: 4,
      slug: 'e-ticaret-optimizasyonu',
      titleTr: 'E-Ticaret Site Optimizasyonu: Dönüşüm Oranını 3x Artırın',
      titleEn: 'E-Commerce Site Optimization: Increase Conversion Rate 3x',
      excerptTr: 'E-ticaret sitenizin dönüşüm oranını artıracak UX/UI tasarım prensipleri ve teknik optimizasyonlar.',
      excerptEn: 'UX/UI design principles and technical optimizations that will increase your e-commerce site conversion rate.',
      category: 'web-design',
      categoryTr: 'Web Tasarım',
      categoryEn: 'Web Design',
      date: '2025-01-01',
      readTime: 10,
      image: '/blog/ecommerce-optimization.jpg',
      featured: false
    },
    {
      id: 5,
      slug: 'local-seo-rehberi',
      titleTr: 'Local SEO Rehberi: Yerel Arama Sonuçlarında 1. Sırada Olun',
      titleEn: 'Local SEO Guide: Be #1 in Local Search Results',
      excerptTr: 'Google My Business optimizasyonu, NAP tutarlılığı ve yerel backlink stratejileri ile local SEO\'da zirvede olun.',
      excerptEn: 'Be at the top in local SEO with Google My Business optimization, NAP consistency and local backlink strategies.',
      category: 'seo',
      categoryTr: 'SEO',
      categoryEn: 'SEO', 
      date: '2024-12-28',
      readTime: 15,
      image: '/blog/local-seo.jpg',
      featured: false
    },
    {
      id: 6,
      slug: 'instagram-algoritma-2025',
      titleTr: 'Instagram Algoritması 2025: Organik Reach Nasıl Artırılır',
      titleEn: 'Instagram Algorithm 2025: How to Increase Organic Reach',
      excerptTr: 'Instagram\'ın yeni algoritma güncellemelerine uyum sağlayın. Reels, Story ve Feed optimizasyon teknikleri.',
      excerptEn: 'Adapt to Instagram\'s new algorithm updates. Reels, Story and Feed optimization techniques.',
      category: 'social-media',
      categoryTr: 'Sosyal Medya',
      categoryEn: 'Social Media',
      date: '2024-12-25',
      readTime: 7,
      image: '/blog/instagram-algorithm.jpg',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', nameTr: 'Tümü', nameEn: 'All' },
    { id: 'web-design', nameTr: 'Web Tasarım', nameEn: 'Web Design' },
    { id: 'seo', nameTr: 'SEO', nameEn: 'SEO' },
    { id: 'social-media', nameTr: 'Sosyal Medya', nameEn: 'Social Media' }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      (language === 'tr' ? post.titleTr : post.titleEn)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    })
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
                    <span className="block">Shakn</span>
                    <span className="block text-primary">Blog</span>
                  </>
                ) : (
                  <>
                    <span className="block">Shakn</span>
                    <span className="block text-primary">Blog</span>
                  </>
                )
              }
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Web tasarım, SEO ve dijital pazarlama dünyasından güncel bilgiler, ipuçları ve uzman görüşleri.'
                : 'Current information, tips and expert opinions from the world of web design, SEO and digital marketing.'
              }
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={language === 'tr' ? 'Blog yazısı ara...' : 'Search blog posts...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {language === 'tr' ? category.nameTr : category.nameEn}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">
              {language === 'tr' ? 'Öne Çıkan Yazılar' : 'Featured Posts'}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/10]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        {/* TODO: Replace with actual images */}
                        <div className="text-center">
                          <div className="text-4xl mb-2">📝</div>
                          <div className="text-sm text-muted-foreground">
                            {language === 'tr' ? 'Blog Görsel' : 'Blog Image'}
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          {language === 'tr' ? post.categoryTr : post.categoryEn}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} {language === 'tr' ? 'dk' : 'min'}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {language === 'tr' ? post.titleTr : post.titleEn}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {language === 'tr' ? post.excerptTr : post.excerptEn}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                        {language === 'tr' ? 'Devamını Oku' : 'Read More'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="pb-20">
        <div className="container">
          {featuredPosts.length > 0 && (
            <h2 className="text-2xl font-bold mb-8">
              {language === 'tr' ? 'Tüm Yazılar' : 'All Posts'}
            </h2>
          )}
          
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative rounded-xl overflow-hidden mb-4 aspect-[16/10]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        {/* TODO: Replace with actual images */}
                        <div className="text-center">
                          <div className="text-3xl mb-2">📄</div>
                          <div className="text-xs text-muted-foreground">
                            {language === 'tr' ? 'Blog Görsel' : 'Blog Image'}
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-background/90 text-foreground text-xs font-medium rounded">
                          {language === 'tr' ? post.categoryTr : post.categoryEn}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} {language === 'tr' ? 'dk' : 'min'}
                        </div>
                      </div>
                      
                      <h3 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {language === 'tr' ? post.titleTr : post.titleEn}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {language === 'tr' ? post.excerptTr : post.excerptEn}
                      </p>
                      
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        {language === 'tr' ? 'Oku' : 'Read'}
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'tr' ? 'Sonuç Bulunamadı' : 'No Results Found'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'tr' 
                  ? 'Arama kriterlerinize uygun blog yazısı bulunamadı.'
                  : 'No blog posts found matching your search criteria.'
                }
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {language === 'tr' ? 'Filtreleri Temizle' : 'Clear Filters'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {language === 'tr' 
              ? 'Yeni İçeriklerden Haberdar Olun'
              : 'Stay Updated with New Content'
            }
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Web tasarım, SEO ve dijital pazarlama alanındaki en güncel bilgileri e-posta ile alın.'
              : 'Get the latest information in web design, SEO and digital marketing via email.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === 'tr' ? 'E-posta adresiniz' : 'Your email address'}
              className="flex-1 px-4 py-3 rounded-lg border-0 bg-background text-foreground focus:ring-2 focus:ring-background/20 outline-none"
            />
            <button className="px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors whitespace-nowrap">
              {language === 'tr' ? 'Abone Ol' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}