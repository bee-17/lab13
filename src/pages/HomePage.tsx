import { Tv, ShoppingCart, Star, Ticket, Play, Info } from 'lucide-react'

const features = [
  { icon: Tv, title: 'Catálogo completo', desc: 'Las películas más populares y recientes siempre disponibles.' },
  { icon: ShoppingCart, title: 'Compra fácil', desc: 'Agrega tickets al carrito en segundos, sin complicaciones.' },
  { icon: Star, title: 'Ratings reales', desc: 'Puntuaciones de la comunidad global de cine.' },
]

function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      {/* Hero */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#1f1f1f', border: '1px solid #262626', color: '#a1a1a1', fontSize: 12, padding: '6px 16px', borderRadius: 99 }}>
          <Ticket size={12} />
          Tickets disponibles ahora
        </div>

        <h1 style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, color: '#fafafa', maxWidth: 600, margin: 0 }}>
          La mejor experiencia de cine,{' '}
          <span style={{ color: '#facc15' }}>en un clic</span>
        </h1>

        <p style={{ color: '#a1a1a1', fontSize: 17, maxWidth: 400, lineHeight: 1.7, margin: 0 }}>
          Compra tus tickets para las películas más esperadas del momento. Rápido, fácil y sin filas.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#facc15', color: '#0a0a0a', border: 'none', borderRadius: 8, padding: '12px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
            <Play size={15} fill="#0a0a0a" /> Ver Cartelera
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fafafa', border: '1px solid #404040', borderRadius: 8, padding: '12px 28px', fontSize: 15, cursor: 'pointer' }}>
            <Info size={15} /> Saber más
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} style={{ background: '#111', border: '1px solid #262626', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(250,204,21,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={20} color="#facc15" />
            </div>
            <p style={{ fontWeight: 600, color: '#fafafa', margin: 0, fontSize: 15 }}>{title}</p>
            <p style={{ color: '#a1a1a1', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default HomePage