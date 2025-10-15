'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cream-100 to-caramel-500/20 group">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative"
          >
            <Image
              src={images[currentIndex] || '/products/placeholder.jpg'}
              alt={`${productName} - ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cream-50/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-caramel-500 hover:text-white"
              aria-label="Önceki resim"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cream-50/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-caramel-500 hover:text-white"
              aria-label="Sonraki resim"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Zoom Button */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-cream-50/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-caramel-500 hover:text-white"
              aria-label="Yakınlaştır"
            >
              <ZoomIn size={20} />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative aspect-square w-full">
              <Image
                src={images[currentIndex] || '/products/placeholder.jpg'}
                alt={`${productName} - Yakın plan`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-caramel-500 scale-95'
                  : 'border-transparent hover:border-cream-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-full h-full bg-cream-100">
                <Image
                  src={image || '/products/placeholder.jpg'}
                  alt={`${productName} thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 25vw, 12vw"
                  className="object-cover"
                />
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}

