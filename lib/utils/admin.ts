import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export async function createAdminUser(email: string, password: string, name?: string) {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      throw new Error('User already exists')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create admin user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || 'Admin',
        role: 'SUPER_ADMIN',
        emailVerified: new Date()
      }
    })

    return { success: true, user: { id: user.id, email: user.email, name: user.name } }
  } catch (error) {
    console.error('Error creating admin user:', error)
    return { success: false, error: (error as Error).message }
  }
}

export async function verifyAdminSetup() {
  try {
    const adminCount = await prisma.user.count({
      where: {
        role: {
          in: ['ADMIN', 'SUPER_ADMIN']
        }
      }
    })

    return adminCount > 0
  } catch (error) {
    console.error('Error checking admin setup:', error)
    return false
  }
}