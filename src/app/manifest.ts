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
  }
}
