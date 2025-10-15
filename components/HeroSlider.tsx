'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

export type Slide = {
  image: string
  title: string
  subtitle: string
  primaryHref: string
  secondaryHref: string
  videoSrc?: string
}

const DEFAULT_INTERVAL_MS = 6000

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  // Sadece CMS'ten gelen slaytları göster; boşsa slider'ı gizle
  const slideList: Slide[] = useMemo(() => (slides && slides.length ? slides : []), [slides])

  const [current, setCurrent] = useState(0)
  const total = slideList.length

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, DEFAULT_INTERVAL_MS)
    return () => clearInterval(id)
  }, [total])

  // Eğer ilk slaytta video yoksa ama başka slaytta varsa, başlangıçta o slayta geç
  useEffect(() => {
    const firstVideoIdx = slideList.findIndex((s) => !!s.videoSrc)
    if (firstVideoIdx > 0) {
      setCurrent(firstVideoIdx)
    }
  }, [slideList])

  const go = (next: number) => setCurrent((next + total) % total)

  if (total === 0) {
    return null
  }

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] w-full">
      <div className="h-full container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          {/* Sol: Metin ve CTA'lar (yer değiştirildi) */}
          <div className="order-1 md:order-1 h-full flex items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-choco-900 mb-4">
                {slideList[current].title}
              </h1>
              <p className="text-choco-700 text-lg md:text-xl mb-6">
                {slideList[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-caramel-500 to-gold-400 text-white hover:shadow-2xl hover:scale-105 transition-all text-lg rounded-xl"
                >
                  <Link href={slideList[current].primaryHref}>
                    Ürünleri Keşfet
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white border-2 border-white text-choco-900 hover:bg-white text-lg rounded-xl"
                >
                  <Link href={slideList[current].secondaryHref}>Hikayemiz</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Sağ: Video/Görsel (yer değiştirildi) */}
          <div className="order-2 md:order-2 relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl bg-black/5">
            {slideList.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  current === idx ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden={current !== idx}
              >
                {slide.videoSrc ? (
                  <video
                    key={`video-${idx}`}
                    className="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover"
                    style={{ objectFit: 'cover' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={slide.image}
                  >
                    <source src={slide.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    quality={90}
                    className="object-cover object-center"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kontroller */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => go(current - 1)}
          className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow border border-black/5 transition"
          aria-label="Önceki"
        >
          <ChevronLeft className="w-5 h-5 text-choco-900" />
        </button>
        <div className="flex items-center gap-2">
          {slideList.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`pointer-events-auto h-2 rounded-full transition-all ${
                current === i ? 'w-6 bg-caramel-500' : 'w-2 bg-choco-900/30'
              }`}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(current + 1)}
          className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow border border-black/5 transition"
          aria-label="Sonraki"
        >
          <ChevronRight className="w-5 h-5 text-choco-900" />
        </button>
      </div>
    </section>
  )
}


