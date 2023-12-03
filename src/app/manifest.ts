import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Coderstore Almeida',
    short_name: 'Coderstore',
    description: 'Projeto criado para o curso de ReactJS da Coderhouse',
    start_url: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#fefefe',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '96x96 144x144 192x192 512x512',
        type: 'image/png',
      },
    ],
  }
}
