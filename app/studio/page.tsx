'use client'

export default function StudioPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px', fontSize: '32px' }}>
          🎨 Sanity Studio
        </h1>
        <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
          İçerik yönetim sisteminize erişim için aşağıdaki seçeneklerden birini kullanın.
        </p>
        
        <div style={{ marginBottom: '30px', padding: '20px', background: '#f9fafb', borderRadius: '8px' }}>
          <h3 style={{ color: '#333', marginBottom: '15px', fontSize: '18px' }}>
            📌 Önerilen Yöntem (Lokal)
          </h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
            Terminal'de şu komutları çalıştırın:
          </p>
          <code style={{
            display: 'block',
            background: '#1f2937',
            color: '#10b981',
            padding: '15px',
            borderRadius: '6px',
            fontSize: '13px',
            marginBottom: '15px',
            textAlign: 'left'
          }}>
            cd sanity-studio<br/>
            npm run dev
          </code>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Sonra tarayıcıda açın: <strong>http://localhost:3333</strong>
          </p>
        </div>

        <div style={{ marginBottom: '30px', padding: '20px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
          <h3 style={{ color: '#333', marginBottom: '15px', fontSize: '18px' }}>
            🌐 Alternatif (Sanity Manage)
          </h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
            Tarayıcı tabanlı yönetim paneli:
          </p>
          <a 
            href="https://www.sanity.io/manage" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#667eea',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            Sanity Manage'e Git →
          </a>
        </div>

        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              background: '#f3f4f6',
              color: '#333',
              padding: '10px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            ← Ana Sayfa'ya Dön
          </a>
        </div>

        <p style={{ marginTop: '30px', fontSize: '12px', color: '#999' }}>
          💡 Lokal Studio, production veritabanınıza bağlanır. Yaptığınız değişiklikler 
          otomatik olarak sitede görünür.
        </p>
      </div>
    </div>
  )
}

