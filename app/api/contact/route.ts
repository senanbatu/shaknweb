import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Extract form data
    const body = await request.json()
    const { name, email, phone, subject, message, honeypot } = body

    // Check honeypot field (anti-spam)
    if (honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi girin' },
        { status: 400 }
      )
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitize = (str: string) => {
      return str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    const sanitizedData = {
      name: sanitize(name.trim()),
      email: sanitize(email.trim()),
      phone: phone ? sanitize(phone.trim()) : 'Belirtilmedi',
      subject: sanitize(subject.trim()),
      message: sanitize(message.trim())
    }

    // Telegram Bot configuration
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials not configured')
      return NextResponse.json(
        { error: 'Sunucu yapılandırma hatası' },
        { status: 500 }
      )
    }

    // Format message for Telegram
    const telegramMessage = `
🔔 <b>Yeni İletişim Formu Mesajı</b>

👤 <b>Ad Soyad:</b> ${sanitizedData.name}
📧 <b>E-posta:</b> ${sanitizedData.email}
📱 <b>Telefon/Şirket:</b> ${sanitizedData.phone}
📌 <b>Konu:</b> ${sanitizedData.subject}

💬 <b>Mesaj:</b>
${sanitizedData.message}

📅 <b>Tarih:</b> ${new Date().toLocaleString('tr-TR', { 
  timeZone: 'Europe/Istanbul' 
})}
🌐 <b>IP:</b> ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Bilinmiyor'}
    `

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    })

    const telegramResult = await telegramResponse.json()

    if (!telegramResult.ok) {
      console.error('Telegram error:', telegramResult)
      return NextResponse.json(
        { error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
        { status: 500 }
      )
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}