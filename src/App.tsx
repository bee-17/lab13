import Navbar from '@/components/layout/Navbar'
import HomePage from '@/pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HomePage />
      </main>
    </div>
  )
}

export default App