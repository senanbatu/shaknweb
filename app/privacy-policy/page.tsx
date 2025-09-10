'use client'

import { useLanguage } from '@/components/language-provider'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  const { language } = useLanguage()

  const content = {
    tr: {
      title: 'Gizlilik Politikası',
      backToHome: 'Ana Sayfaya Dön',
      lastUpdated: 'Son güncelleme: 9 Eylül 2025',
      sections: [
        {
          title: '1. Toplanan Bilgiler',
          content: 'Web sitemizi ziyaret ettiğinizde ve iletişim formunu kullandığınızda, adınız, e-posta adresiniz ve şirket bilginiz gibi kişisel bilgileri toplayabiliriz. Bu bilgiler yalnızca sizinle iletişim kurmak ve hizmetlerimizi sunmak için kullanılır.'
        },
        {
          title: '2. Bilgilerin Kullanımı',
          content: 'Topladığımız bilgileri şu amaçlarla kullanırız: Size talep ettiğiniz hizmetleri sunmak, iletişim taleplerinize yanıt vermek, hizmetlerimizi geliştirmek ve yasal yükümlülüklerimizi yerine getirmek.'
        },
        {
          title: '3. Bilgilerin Korunması',
          content: 'Kişisel bilgilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri kullanıyoruz. Bilgileriniz şifreli bağlantılar üzerinden iletilir ve güvenli sunucularda saklanır.'
        },
        {
          title: '4. Çerezler',
          content: 'Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak bu bazı site özelliklerini etkileyebilir.'
        },
        {
          title: '5. Üçüncü Taraflarla Paylaşım',
          content: 'Kişisel bilgilerinizi, yasal zorunluluklar dışında üçüncü taraflarla paylaşmayız. Telegram Bot API üzerinden iletişim kurduğunuzda, Telegram\'ın gizlilik politikası geçerli olur.'
        },
        {
          title: '6. Haklarınız',
          content: 'Kişisel bilgilerinize erişme, düzeltme veya silme hakkına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.'
        },
        {
          title: '7. İletişim',
          content: 'Gizlilik politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçin.'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      backToHome: 'Back to Home',
      lastUpdated: 'Last updated: September 9, 2025',
      sections: [
        {
          title: '1. Information We Collect',
          content: 'When you visit our website and use the contact form, we may collect personal information such as your name, email address, and company information. This information is used solely to communicate with you and provide our services.'
        },
        {
          title: '2. Use of Information',
          content: 'We use the collected information for the following purposes: To provide the services you request, respond to your contact inquiries, improve our services, and fulfill our legal obligations.'
        },
        {
          title: '3. Information Security',
          content: 'We use industry-standard security measures to protect your personal information. Your data is transmitted over encrypted connections and stored on secure servers.'
        },
        {
          title: '4. Cookies',
          content: 'Our website may use cookies to improve user experience. You can disable cookies through your browser settings, but this may affect some site features.'
        },
        {
          title: '5. Third-Party Sharing',
          content: 'We do not share your personal information with third parties except as required by law. When you communicate via Telegram Bot API, Telegram\'s privacy policy applies.'
        },
        {
          title: '6. Your Rights',
          content: 'You have the right to access, correct, or delete your personal information. You can contact us to exercise these rights.'
        },
        {
          title: '7. Contact Us',
          content: 'If you have any questions about our privacy policy, please contact us.'
        }
      ]
    }
  }

  const currentContent = content[language as 'tr' | 'en']

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {currentContent.backToHome}
          </Link>

          <h1 className="text-4xl font-bold mb-4 gradient-text">{currentContent.title}</h1>
          <p className="text-muted-foreground mb-8">{currentContent.lastUpdated}</p>

          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}