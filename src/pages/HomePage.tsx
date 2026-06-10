import { Tv, ShoppingCart, Star, Ticket, Play, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const features = [
  { icon: Tv, title: 'Catálogo completo', desc: 'Las películas más populares y recientes siempre disponibles.' },
  { icon: ShoppingCart, title: 'Compra fácil', desc: 'Agrega tickets al carrito en segundos, sin complicaciones.' },
  { icon: Star, title: 'Ratings reales', desc: 'Puntuaciones de la comunidad global de cine.' },
]

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-2 bg-secondary text-muted-foreground text-xs px-4 py-1.5 rounded-full border border-border">
          <Ticket size={12} />
          Tickets disponibles ahora
        </div>

        <h1 className="text-6xl font-bold leading-tight max-w-2xl">
          La mejor experiencia de cine,{' '}
          <span className="text-primary">en un clic</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
          Compra tus tickets para las películas más esperadas del momento.
          Rápido, fácil y sin filas.
        </p>

        <div className="flex gap-3 mt-2">
          <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90 font-semibold px-8">
            <Play size={16} fill="currentColor" />
            Ver Cartelera
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8">
            <Info size={16} />
            Saber más
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3 hover:border-primary/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon size={20} className="text-primary" />
            </div>
            <p className="font-semibold text-foreground">{title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default HomePage