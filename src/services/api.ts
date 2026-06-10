import axios from 'axios'

// El cliente HTTP central de toda la app
// Todas las llamadas a TMDB pasan por aquí
export const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'es-ES',
  },
})

// Helper para construir URLs de imágenes de TMDB
export const getImageUrl = (path: string, size: 'w300' | 'w500' | 'w780' | 'original' = 'w500') =>
  `https://image.tmdb.org/t/p/${size}${path}`