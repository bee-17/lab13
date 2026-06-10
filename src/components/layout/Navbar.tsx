import { Film, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Navbar() {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <Film size={22} />
          CineSpoilerS
        </div>
        <nav className="flex items-center gap-6">
          <span className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors">
            Catálogo
          </span>
          <span className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors">
            Estrenos
          </span>
          <Button size="sm" className="gap-2 bg-primary text-black hover:bg-primary/90 font-semibold">
            <ShoppingCart size={14} />
            0
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar