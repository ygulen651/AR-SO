'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { getConveyorVisuals, urlFor } from '@/lib/sanity'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Wheat, ChefHat, Leaf } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ConveyorSection() {
  const [mainImageUrl, setMainImageUrl] = useState<string>('/products/sutlu-cikolata.jpg')
  const [floats, setFloats] = useState<string[]>([])
  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const visuals = await getConveyorVisuals()
        if (!mounted) return
        const main = visuals?.mainImage ? urlFor(visuals.mainImage) : '/products/sutlu-cikolata.jpg'
        const flts = Array.isArray(visuals?.floatingImages)
          ? visuals.floatingImages.map((img: any) => urlFor(img))
          : []
        setMainImageUrl(main)
        setFloats(flts)
      } catch (e) {
        // sessizce varsayılanlarla devam
      }
    })()
    return () => {
      mounted = false
    }
  }, [])
  const containerRef = useRef<HTMLDivElement>(null)
  const scene1Ref = useRef<HTMLDivElement>(null)
  const scene2Ref = useRef<HTMLDivElement>(null)
  const scene3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scene 1: Malzemeler
      const ingredients = containerRef.current?.querySelectorAll('.ingredient')
      if (ingredients && ingredients.length > 0) {
        gsap.fromTo(
          ingredients,
          { y: -100, opacity: 0, rotation: -45 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: scene1Ref.current,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
            },
          }
        )
      }

      // Scene 2: İşçilik
      const mixer = containerRef.current?.querySelector('.mixer')
      if (mixer) {
        gsap.fromTo(
          mixer,
          { scale: 0, rotation: 0 },
          {
            scale: 1,
            rotation: 360,
            scrollTrigger: {
              trigger: scene2Ref.current,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
            },
          }
        )
      }

      // Pin the container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100',
        pin: true,
        scrub: 0.5,
      })

      // Floating images around the main visual
      const float1 = containerRef.current?.querySelector('.float-1')
      const float2 = containerRef.current?.querySelector('.float-2')
      const float3 = containerRef.current?.querySelector('.float-3')
      const float4 = containerRef.current?.querySelector('.float-4')

      if (float1) {
        gsap.to(float1, {
          y: -15,
          rotation: -5,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
      if (float2) {
        gsap.to(float2, {
          y: 18,
          x: 8,
          rotation: 6,
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
      if (float3) {
        gsap.to(float3, {
          y: -12,
          x: -6,
          rotation: -4,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
      if (float4) {
        gsap.to(float4, {
          y: 16,
          duration: 4.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        {/* Scene 1 */}
        <div
          ref={scene1Ref}
          className="min-h-screen flex items-center"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Görsel ve dış kenarlardaki küçük görseller için sarmal */}
            <div className="relative w-full">
              {/* Ana görsel kutusu */}
              <div className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={mainImageUrl}
                  alt="Seçilen Malzemeler"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Küçük görseller bu kolonda değil, section seviyesinde konumlanacak */}
            </div>

            {/* Metin */}
            <div className="text-left">
              <h2 className="text-5xl font-serif font-bold text-choco-900 mb-6">
                Seçilen Malzemeler
              </h2>
              <p className="text-choco-700 text-lg leading-relaxed mb-8 max-w-xl">
                En kaliteli un, taze kakao ve doğal içeriklerle üretiyoruz. Her lokmada
                dengeli tat, ideal doku ve üstün lezzet.
              </p>
              <ul className="space-y-3 text-choco-800">
                <li className="flex items-center gap-3"><span className="text-gold-400">•</span> Premium Buğday</li>
                <li className="flex items-center gap-3"><span className="text-gold-400">•</span> Doğal Malzemeler</li>
                <li className="flex items-center gap-3"><span className="text-gold-400">•</span> Taze Çikolata</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scene 2 (kaldırıldı) */}
        <div
          ref={scene2Ref}
          className="hidden"
        >
        </div>

        {/* Scene 3 */}
        <div
          ref={scene3Ref}
          className="min-h-screen flex flex-col items-center justify-center text-center absolute top-3/4 left-0 right-0"
        >
              <h2 className="text-5xl font-serif font-bold text-cream-50 mb-4">
                Fırından Sofraya
              </h2>
          
        </div>
      </div>

      {/* Section seviyesinde, kırmızı dairelerin olduğu konumlara hizalanan küçük görseller */}
      <div className="pointer-events-none hidden md:block">
        {(floats[0] || '/products/bitter-cikolata.jpg') && (
          <Image
            src={floats[0] || '/products/bitter-cikolata.jpg'}
            alt="float-1"
            width={140}
            height={140}
            className="float-1 absolute"
            style={{ top: '10%', left: '10%' }}
          />
        )}
        {(floats[1] || '/products/karamelli-gofret.jpg') && (
          <Image
            src={floats[1] || '/products/karamelli-gofret.jpg'}
            alt="float-2"
            width={160}
            height={160}
            className="float-2 absolute"
            style={{ top: '15%', right: '15%' }}
          />
        )}
        {(floats[2] || '/products/findikli-gofret.jpg') && (
          <Image
            src={floats[2] || '/products/findikli-gofret.jpg'}
            alt="float-3"
            width={230}
            height={190}
            className="float-3 absolute"
            style={{ bottom: '30%', left: '2%' }}
          />
        )}
        {(floats[3] || '/products/cikolatali-kek.jpg') && (
          <Image
            src={floats[3] || '/products/cikolatali-kek.jpg'}
            alt="float-4"
            width={290}
            height={160}
            className="float-4 absolute"
            style={{ bottom: '25%', right: '30%' }}
          />
        )}
      </div>
    </div>
  )
}

