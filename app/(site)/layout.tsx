'use client'

import AnimatedHeader from '@/components/AnimatedHeader'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <AnimatedHeader />
      <main className="pt-20">{children}</main>
      <Footer />
    </SmoothScroll>
  )
}

