import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import sharp from 'sharp'

export interface UploadResult {
  success: boolean
  url?: string
  filename?: string
  error?: string
}

export const UPLOAD_CONFIG = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: {
    image: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    all: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf']
  },
  uploadDir: 'public/uploads',
  imageQuality: 80,
  maxImageWidth: 1920,
  maxImageHeight: 1080
}

export function validateFile(file: File, allowedTypes: string[] = UPLOAD_CONFIG.allowedTypes.all): { valid: boolean; error?: string } {
  // Check file size
  if (file.size > UPLOAD_CONFIG.maxFileSize) {
    return {
      valid: false,
      error: `File size too large. Maximum size is ${UPLOAD_CONFIG.maxFileSize / 1024 / 1024}MB`
    }
  }

  // Check file type
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `File type not allowed. Allowed types: ${allowedTypes.join(', ')}`
    }
  }

  return { valid: true }
}

export function generateFilename(originalName: string): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  const extension = path.extname(originalName)
  const baseName = path.basename(originalName, extension)
    .replace(/[^a-zA-Z0-9]/g, '_')
    .substring(0, 50)
  
  return `${timestamp}_${random}_${baseName}${extension}`
}

export async function ensureUploadDir(subDir?: string): Promise<string> {
  const fullPath = subDir 
    ? path.join(UPLOAD_CONFIG.uploadDir, subDir)
    : UPLOAD_CONFIG.uploadDir

  if (!existsSync(fullPath)) {
    await mkdir(fullPath, { recursive: true })
  }

  return fullPath
}

export async function optimizeImage(buffer: Buffer, mimeType: string): Promise<Buffer> {
  if (!mimeType.startsWith('image/')) {
    return buffer
  }

  try {
    let sharpInstance = sharp(buffer)
    
    // Get image metadata
    const metadata = await sharpInstance.metadata()
    
    // Resize if too large
    if (metadata.width && metadata.width > UPLOAD_CONFIG.maxImageWidth) {
      sharpInstance = sharpInstance.resize(UPLOAD_CONFIG.maxImageWidth, null, {
        withoutEnlargement: true
      })
    }
    
    if (metadata.height && metadata.height > UPLOAD_CONFIG.maxImageHeight) {
      sharpInstance = sharpInstance.resize(null, UPLOAD_CONFIG.maxImageHeight, {
        withoutEnlargement: true
      })
    }

    // Convert to WebP for better compression (except GIFs)
    if (mimeType !== 'image/gif') {
      return await sharpInstance
        .webp({ quality: UPLOAD_CONFIG.imageQuality })
        .toBuffer()
    }

    // For other formats, just optimize
    return await sharpInstance
      .jpeg({ quality: UPLOAD_CONFIG.imageQuality })
      .toBuffer()

  } catch (error) {
    console.error('Image optimization failed:', error)
    return buffer
  }
}

export async function saveFile(
  buffer: Buffer, 
  filename: string, 
  subDir?: string,
  optimize = true
): Promise<UploadResult> {
  try {
    const uploadDir = await ensureUploadDir(subDir)
    const filePath = path.join(uploadDir, filename)
    
    // Optimize buffer if it's an image
    const finalBuffer = optimize ? await optimizeImage(buffer, 'image/jpeg') : buffer
    
    await writeFile(filePath, finalBuffer)
    
    // Generate public URL
    const publicPath = subDir 
      ? `/uploads/${subDir}/${filename}`
      : `/uploads/${filename}`
    
    return {
      success: true,
      url: publicPath,
      filename
    }
  } catch (error) {
    console.error('File save error:', error)
    return {
      success: false,
      error: 'Failed to save file'
    }
  }
}

// Helper function to delete file
export async function deleteFile(filename: string, subDir?: string): Promise<boolean> {
  try {
    const { unlink } = await import('fs/promises')
    const filePath = subDir 
      ? path.join(UPLOAD_CONFIG.uploadDir, subDir, filename)
      : path.join(UPLOAD_CONFIG.uploadDir, filename)
    
    await unlink(filePath)
    return true
  } catch (error) {
    console.error('File deletion error:', error)
    return false
  }
}