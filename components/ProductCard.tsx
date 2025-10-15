'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { Dialog, DialogContent, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { X, ShoppingCart } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

interface ProductCardProps {
  urun: any // Sanity ürün verisi
  index?: number
}

export default function ProductCard({ urun, index = 0 }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const imageUrl = urun.image ? urlFor(urun.image) : '/products/placeholder.jpg'
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
      >
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:scale-[1.02]">
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-caramel-100/30">
              <motion.div
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src={imageUrl}
                  alt={urun.image?.alt || urun.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4"
                />
              </motion.div>
              
              {/* Modern Badges */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {urun.isNew && (
                  <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-lg backdrop-blur-sm">
                    Yeni
                  </Badge>
                )}
                {urun.isFeatured && (
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg backdrop-blur-sm">
                    Vitrin
                  </Badge>
                )}
              </div>

              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Hover Action Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl"
                >
                  <ShoppingCart className="w-6 h-6 text-choco-700" />
                </motion.div>
              </div>
            </div>

            <CardContent className="p-6 bg-gradient-to-b from-white to-cream-50/50">
              <CardTitle className="text-xl font-bold text-choco-900 mb-3 group-hover:text-caramel-600 transition-colors duration-300">
                {urun.name}
              </CardTitle>
              <CardDescription className="text-sm text-choco-600 mb-4 leading-relaxed">
                {urun.description?.[0]?.children?.[0]?.text || 'Lezzetli ürünümüz'}
              </CardDescription>
              
              <div className="flex items-center justify-between">
                {urun.price && (
                  <div className="text-2xl font-bold bg-gradient-to-r from-caramel-500 to-amber-500 bg-clip-text text-transparent">
                    ₺{urun.price.toFixed(2)}
                  </div>
                )}
                
                {/* Rating Stars */}
                {urun.rating && (
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(urun.rating)
                            ? 'text-amber-400'
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </div>
                    ))}
                    <span className="text-xs text-choco-600 ml-1">({urun.rating})</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Product Detail Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Kapat</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cream-100 to-caramel-500/20">
              <Image
                src={imageUrl}
                alt={urun.image?.alt || urun.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <div className="flex gap-2 mb-4">
                {urun.isNew && <Badge className="bg-gold-400 text-white">Yeni</Badge>}
                {urun.isFeatured && <Badge className="bg-caramel-500 text-white">Vitrin</Badge>}
              </div>

              <DialogTitle className="text-3xl font-serif font-bold text-choco-900 mb-4">
                {urun.name}
              </DialogTitle>

              <p className="text-choco-600 mb-6">
                {urun.description?.[0]?.children?.[0]?.text || 'Lezzetli ürünümüz'}
              </p>

              {urun.price && (
                <div className="text-3xl font-bold text-caramel-500 mb-6">
                  ₺{urun.price.toFixed(2)}
                </div>
              )}

              {/* Nutrition Facts */}
              {urun.nutritionFacts && (
                <div className="mb-6">
                  <h3 className="font-semibold text-choco-900 mb-3">Besin Değerleri (100g)</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {urun.nutritionFacts.calories && (
                      <div className="bg-cream-100 p-3 rounded-lg">
                        <p className="text-xs text-choco-600">Kalori</p>
                        <p className="font-semibold text-choco-900">{urun.nutritionFacts.calories} kcal</p>
                      </div>
                    )}
                    {urun.nutritionFacts.protein && (
                      <div className="bg-cream-100 p-3 rounded-lg">
                        <p className="text-xs text-choco-600">Protein</p>
                        <p className="font-semibold text-choco-900">{urun.nutritionFacts.protein}g</p>
                      </div>
                    )}
                    {urun.nutritionFacts.carbohydrates && (
                      <div className="bg-cream-100 p-3 rounded-lg">
                        <p className="text-xs text-choco-600">Karbonhidrat</p>
                        <p className="font-semibold text-choco-900">{urun.nutritionFacts.carbohydrates}g</p>
                      </div>
                    )}
                    {urun.nutritionFacts.fat && (
                      <div className="bg-cream-100 p-3 rounded-lg">
                        <p className="text-xs text-choco-600">Yağ</p>
                        <p className="font-semibold text-choco-900">{urun.nutritionFacts.fat}g</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-caramel-500 to-gold-400 text-white mt-auto"
              >
                <ShoppingCart className="mr-2" />
                Sipariş Ver
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
