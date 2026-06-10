// Navbar global — se completará con el carrito en Etapa 8
function Navbar() {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-primary">🎬 CineSpoilerS</span>
        <nav className="flex items-center gap-4">
          <span className="text-muted-foreground text-sm">Catálogo</span>
          <span className="text-muted-foreground text-sm">🛒 0</span>
        </nav>
      </div>
    </header>
  )
}

export default Navbar