# 🚀 Coolify Deployment Guide

Bu kılavuz, Shakn website'ini Coolify + Hetzner VPS üzerinde deploy etme adımlarını içerir.

## 📋 Gereksinimler

- **Hetzner VPS** (CX21 veya üzeri)
- **Coolify** kurulu
- **Domain** yapılandırılmış
- **PostgreSQL** veritabanı
- **Telegram Bot** (opsiyonel - contact form notifications için)

## 🔧 Kurulum Adımları

### 1. Coolify'da Proje Oluşturma

1. Coolify dashboard'una girin
2. **New Project** → **Docker Compose** seçin
3. GitHub repository'sini bağlayın
4. Branch: `main` seçin

### 2. Environment Variables

Aşağıdaki environment variables'ları Coolify'da ayarlayın:

```bash
# Database
DATABASE_PASSWORD=your-strong-password
DATABASE_URL=postgresql://shakn_user:${DATABASE_PASSWORD}@postgres:5432/shakn_db?schema=public

# Site Configuration
SITE_URL=https://your-domain.com
ADMIN_EMAIL=admin@your-domain.com
NEXTAUTH_URL=https://your-domain.com

# Security Secrets (generate random strings)
NEXTAUTH_SECRET=your-very-long-random-string-32-chars-min
JWT_SECRET=your-very-long-random-string-32-chars-min

# Telegram Bot (opsiyonel)
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id

# Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=905551234567
NEXT_PUBLIC_TELEGRAM_USERNAME=yourusername

# Email (opsiyonel)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 3. Deployment

1. **Deploy** butonuna tıklayın
2. Build logs'u takip edin
3. Database migration otomatik olarak çalışacak
4. Admin kullanıcı otomatik oluşturulacak

### 4. SSL & Domain

1. Coolify otomatik olarak Let's Encrypt SSL sertifikası oluşturur
2. DNS A record'unu VPS IP'sine yönlendirin
3. Domain propagation'ı bekleyin (5-30 dakika)

## 🔐 İlk Giriş

Deploy tamamlandıktan sonra:

1. `https://your-domain.com/admin/login` adresine gidin
2. Default credentials:
   - **Email**: `admin@your-domain.com` (veya ADMIN_EMAIL değeri)
   - **Password**: `admin123` (veya ADMIN_PASSWORD değeri)
3. **İlk girişten sonra mutlaka şifreyi değiştirin!**

## 📊 Özellikler

### ✅ Admin Panel
- **Dashboard**: Analytics, istatistikler
- **Content Management**: Sayfa içerikleri, blog posts
- **Contact Management**: Gelen mesajlar
- **File Upload**: Medya yönetimi
- **Analytics**: Ziyaretçi takibi

### ✅ Frontend
- **Multi-language**: Türkçe/İngilizce
- **SEO Optimized**: Meta tags, sitemaps
- **Contact Form**: Telegram entegrasyonu
- **Analytics Tracking**: Privacy-focused
- **Responsive Design**: Mobile-first

### ✅ Infrastructure
- **PostgreSQL**: Database
- **Redis**: Cache (opsiyonel)
- **File Storage**: Local volumes
- **Auto SSL**: Let's Encrypt
- **Health Checks**: Container monitoring
- **Auto Restart**: Crash recovery

## 🛠 Maintenance

### Database Backup
```bash
# Coolify dashboard'da backup scheduling
# Veya manual:
docker exec shakn_postgres pg_dump -U shakn_user shakn_db > backup.sql
```

### Logs
```bash
# Application logs
docker logs shakn_app

# Database logs
docker logs shakn_postgres
```

### Updates
1. Git push to main branch
2. Coolify otomatik olarak yeni deploy başlatır
3. Zero-downtime deployment

## 🔍 Troubleshooting

### Database Connection Error
```bash
# Check database status
docker exec shakn_postgres pg_isready -U shakn_user

# Restart database
docker restart shakn_postgres
```

### Admin Login Issues
```bash
# Reset admin password
docker exec shakn_app node scripts/setup-admin.js
```

### File Upload Issues
```bash
# Check upload directory permissions
docker exec shakn_app ls -la public/uploads
```

## 📈 Performance

- **Expected Response Time**: < 200ms
- **Database Queries**: Optimized with indexes
- **Image Optimization**: Sharp.js
- **Caching**: Redis for sessions
- **CDN Ready**: Static files optimization

## 💰 Maliyet

- **Hetzner CX21**: ~€4.15/ay
- **Domain**: ~€10/yıl
- **Toplam**: ~€60/yıl

## 🆘 Destek

Deployment ile ilgili sorunlarda:

1. Coolify logs'ları kontrol edin
2. Health check endpoint'ini test edin: `/api/health`
3. Database bağlantısını kontrol edin
4. Environment variables'ları doğrulayın

## 🔒 Güvenlik

- **SSL/TLS**: Let's Encrypt otomatik
- **Environment Variables**: Şifrelenmiş
- **Database**: Private network
- **File Uploads**: Validated & sanitized
- **Authentication**: NextAuth.js + JWT
- **Rate Limiting**: Built-in protections