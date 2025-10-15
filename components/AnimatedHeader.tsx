'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/urunler', label: 'Ürünler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function AnimatedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 248, 241, 0.8)', 'rgba(255, 248, 241, 0.95)']
  )

  const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)'])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      style={{ backgroundColor: headerBg, backdropFilter: headerBlur }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b py-2',
        scrolled ? 'shadow-lg border-choco-900/10' : 'border-transparent'
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="relative h-12 md:h-12 w-[300px] md:w-[400px] overflow-visible mt-2 md:mt-2.5">
            <Image
              src="/logo.png"
              alt="Ariso Logo"
              fill
              sizes="(min-width: 768px) 260px, 220px"
              className="object-contain scale-[2.6] md:scale-[3]"
              priority
            />
          </motion.div>
          <span className="font-serif text-2xl font-bold text-choco-900 hidden sm:block">
            
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg transition-all relative group',
                  pathname === link.href
                    ? 'text-caramel-500 font-semibold'
                    : 'text-choco-700 hover:text-caramel-500'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-caramel-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          asChild
          className="hidden md:flex bg-gradient-to-r from-caramel-500 to-gold-400 text-white hover:shadow-lg hover:scale-105 transition-all"
        >
          <Link href="/urunler">Keşfet</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-choco-900"
          aria-label="Menü"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-choco-900/10 bg-cream-50/95 backdrop-blur-lg"
        >
          <ul className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg transition-all',
                    pathname === link.href
                      ? 'bg-caramel-500 text-white'
                      : 'text-choco-700 hover:bg-cream-100'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

