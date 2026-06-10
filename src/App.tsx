import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold text-primary">🎬 CineSpoilerS</h1>
      <p className="text-muted-foreground text-lg">Tu cine, tus reglas</p>
      <div className="flex gap-3">
        <Button>Comprar Ticket</Button>
        <Button variant="outline">Ver Catálogo</Button>
      </div>
      <Badge variant="secondary">Etapa 2 ✅</Badge>
    </div>
  )
}

export default App