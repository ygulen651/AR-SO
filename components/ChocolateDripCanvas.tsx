'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ChocolateDripCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drips: Array<{ x: number; y: number; speed: number; length: number }> = []

    // Create drips
    for (let i = 0; i < 15; i++) {
      drips.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        speed: 0.5 + Math.random() * 1.5,
        length: 30 + Math.random() * 50,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.fillStyle = 'rgba(255, 248, 241, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drips.forEach((drip) => {
        // Draw drip
        const gradient = ctx.createLinearGradient(drip.x, drip.y, drip.x, drip.y + drip.length)
        gradient.addColorStop(0, '#3A2316')
        gradient.addColorStop(0.5, '#4B2E16')
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.ellipse(drip.x, drip.y, 3, drip.length / 2, 0, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        drip.y += drip.speed

        // Reset when off screen
        if (drip.y > canvas.height + drip.length) {
          drip.y = -drip.length
          drip.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1 }}
    />
  )
}

