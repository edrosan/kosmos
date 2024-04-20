import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: 'Kósmos',
      short_name: 'Kósmos',
      description: 'Kósmos creado con Notion API',
      lang: 'es',
      theme_color: '#ffffff',
      background_color: '#000000',
      icons: [
        {
          src: '/img/pwa/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: '/img/pwa/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/img/pwa/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        },
      ],
    },
  })],
})
