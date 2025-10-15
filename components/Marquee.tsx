'use client'

import { motion } from 'framer-motion'

const certificates = [
  { name: 'ISO 9001', desc: 'Kalite Yönetim Sistemi' },
  { name: 'ISO 22000', desc: 'Gıda Güvenliği' },
  { name: 'BRC', desc: 'Global Standart' },
  { name: 'HACCP', desc: 'Gıda Güvenliği' },
  { name: 'Helal', desc: 'Helal Sertifikası' },
]

export default function Marquee() {
  return (
    <div className="py-12 bg-gradient-to-r from-choco-900 to-choco-700 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex space-x-12 whitespace-nowrap"
      >
        {[...certificates, ...certificates, ...certificates].map((cert, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-center justify-center px-8"
          >
            <div className="w-24 h-24 bg-cream-50/10 rounded-full flex items-center justify-center mb-2 border-2 border-gold-400">
              <span className="text-gold-400 font-bold text-lg">{cert.name}</span>
            </div>
            <p className="text-cream-100 text-sm">{cert.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

