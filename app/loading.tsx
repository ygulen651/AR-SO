export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Spinning Chocolate Drip */}
          <div className="absolute inset-0 border-4 border-caramel-500 border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-2 border-4 border-gold-400 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
        </div>
        <p className="text-choco-900 font-serif text-xl">Yükleniyor...</p>
      </div>
    </div>
  )
}

