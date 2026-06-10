// Movie types — se irán completando en la Etapa 5
export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
  adult: boolean
}

export interface Genre {
  id: number
  name: string
}

export interface MovieDetail extends Movie {
  genres: Genre[]
  runtime: number
  tagline: string
  status: string
  budget: number
  revenue: number
}

// Cart types
export interface CartItem {
  movie: Movie
  quantity: number
  ticketPrice: number
}

export interface Cart {
  items: CartItem[]
  total: number
}