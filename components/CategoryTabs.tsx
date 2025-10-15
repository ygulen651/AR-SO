'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import ProductCard from './ProductCard'
import { getCategories, getProductsByCategory } from '@/lib/sanity'

export default function CategoryTabs() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({})
  const [activeTab, setActiveTab] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getCategories()
        setCategories(categoriesData)
        
        if (categoriesData.length > 0) {
          setActiveTab(categoriesData[0].slug.current)
          
          // Her kategori için ürünleri çek
          const productsData: any = {}
          for (const category of categoriesData) {
            const categoryProducts = await getProductsByCategory(category.slug.current)
            productsData[category.slug.current] = categoryProducts
          }
          setProducts(productsData)
        }
      } catch (error) {
        console.error('Veri yüklenemedi:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-caramel-500 mx-auto"></div>
          <p className="mt-4 text-choco-600">Kategoriler yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-5xl font-serif font-bold text-center text-choco-900 mb-12">
        Kategorilerimiz
      </h2>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-12 bg-cream-100">
          {categories.map((kategori: any) => (
            <TabsTrigger
              key={kategori._id}
              value={kategori.slug.current}
              className="text-base data-[state=active]:bg-caramel-500 data-[state=active]:text-white"
            >
              {kategori.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence>
          {categories.map((kategori) => (
            <TabsContent key={kategori._id} value={kategori.slug.current}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(products[kategori.slug.current] || []).map((urun, index) => (
                  <ProductCard key={urun._id} urun={urun} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>
    </div>
  )
}

