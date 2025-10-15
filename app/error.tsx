'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Hata:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="text-center px-4 max-w-md">
        <div className="mb-8">
          <AlertCircle size={80} className="mx-auto text-red-500 mb-4" />
          <h2 className="text-3xl font-serif font-bold text-choco-900 mb-2">
            Bir Hata Oluştu
          </h2>
          <p className="text-choco-600">
            Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin.
          </p>
        </div>

        <Button
          onClick={reset}
          size="lg"
          className="bg-gradient-to-r from-caramel-500 to-gold-400 text-white"
        >
          Tekrar Dene
        </Button>
      </div>
    </div>
  )
}

