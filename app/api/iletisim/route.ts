import { NextResponse } from 'next/server'
import { z } from 'zod'

const formSchema = z.object({
  ad: z.string().min(2),
  eposta: z.string().email(),
  konu: z.string().min(3),
  mesaj: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate data
    const validatedData = formSchema.parse(body)
    
    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. etc.
    
    // For now, just log it
    console.log('İletişim Formu Gönderimi:', {
      timestamp: new Date().toISOString(),
      ...validatedData,
    })
    
    return NextResponse.json(
      { success: true, message: 'Mesajınız alındı' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}

