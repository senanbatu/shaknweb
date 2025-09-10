const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function setupAdmin() {
  try {
    console.log('🔍 Checking for existing admin users...')
    
    const adminCount = await prisma.user.count({
      where: {
        role: {
          in: ['ADMIN', 'SUPER_ADMIN']
        }
      }
    })

    if (adminCount > 0) {
      console.log('✅ Admin user already exists')
      return
    }

    console.log('👤 Creating admin user...')
    
    // Default admin credentials (should be changed after first login)
    const email = process.env.ADMIN_EMAIL || 'admin@shakn.com'
    const password = process.env.ADMIN_PASSWORD || 'admin123'
    const name = 'Admin User'

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'SUPER_ADMIN',
        emailVerified: new Date()
      }
    })

    console.log('✅ Admin user created successfully!')
    console.log(`📧 Email: ${email}`)
    console.log(`🔑 Password: ${password}`)
    console.log('⚠️  Please change the password after first login!')

  } catch (error) {
    console.error('❌ Error setting up admin user:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

setupAdmin()