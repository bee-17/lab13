import { tmdbClient } from './api'
import type { Movie, MovieDetail } from '@/types'

interface TMDBResponse<T> {
  results: T[]
  page: number
  total_pages: number
  total_results: number
}

// Cada función es una llamada específica a la API
// Separar servicios de componentes = código limpio y testeable

export const moviesService = {
  getNowPlaying: () =>
    tmdbClient.get<TMDBResponse<Movie>>('/movie/now_playing').then(r => r.data),

  getPopular: () =>
    tmdbClient.get<TMDBResponse<Movie>>('/movie/popular').then(r => r.data),

  getById: (id: number) =>
    tmdbClient.get<MovieDetail>(`/movie/${id}`).then(r => r.data),

  searchMovies: (query: string) =>
    tmdbClient.get<TMDBResponse<Movie>>('/search/movie', { params: { query } }).then(r => r.data),
}