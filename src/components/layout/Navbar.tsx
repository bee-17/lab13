import { Film, ShoppingCart } from 'lucide-react'

function Navbar() {
  return (
    <header style={{ borderBottom: '1px solid #262626', position: 'sticky', top: 0, zIndex: 50, background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#facc15', fontWeight: 700, fontSize: 18 }}>
          <Film size={20} />
          CineSpoilerS
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ color: '#a1a1a1', fontSize: 14, cursor: 'pointer' }}>Catálogo</span>
          <span style={{ color: '#a1a1a1', fontSize: 14, cursor: 'pointer' }}>Estrenos</span>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#facc15', color: '#0a0a0a', border: 'none', borderRadius: 8, padding: '7px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            <ShoppingCart size={14} /> 0
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar