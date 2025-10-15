import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="container mx-auto px-4 py-16 rounded-3xl bg-choco-900 text-cream-50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Şirket Bilgisi */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">
              Bisküvi Fabrikası
            </h3>
            <p className="text-cream-100/80 text-sm">
              1995&apos;ten beri kaliteli ve lezzetli bisküvi, çikolata, gofret ve kek ürünleri üretiyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-caramel-400 transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-caramel-400 transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-caramel-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-caramel-400 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-caramel-400" />
                <span>+90 212 XXX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-caramel-400" />
                <span>info@biskuvifabrikasi.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-caramel-400 mt-1" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-cream-50/10 rounded-full flex items-center justify-center hover:bg-caramel-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream-50/10 rounded-full flex items-center justify-center hover:bg-caramel-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream-50/10 rounded-full flex items-center justify-center hover:bg-caramel-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-50/20 mt-10 pt-8 text-center text-sm text-cream-100/60">
          <p>&copy; {new Date().getFullYear()} Bisküvi Fabrikası. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

