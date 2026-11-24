import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'كن مع الله - تطبيق إسلامي متكامل',
        short_name: 'كن مع الله',
        description: 'تطبيق إسلامي شامل: أوقات الصلاة، القرآن، الأذكار، القبلة، التقويم الهجري، الزكاة، ومساعد ذكي',
        theme_color: '#166534',
        background_color: '#f0fdf4',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        lang: 'ar',
        dir: 'rtl',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        categories: ['lifestyle', 'education', 'utilities'],
        shortcuts: [
          {
            name: 'أوقات الصلاة',
            short_name: 'الصلاة',
            url: '/prayer-times',
            icons: [{ src: 'prayer-icon.png', sizes: '192x192' }]
          },
          {
            name: 'القرآن الكريم',
            short_name: 'القرآن',
            url: '/quran',
            icons: [{ src: 'quran-icon.png', sizes: '192x192' }]
          },
          {
            name: 'الأذكار',
            short_name: 'الأذكار',
            url: '/azkar',
            icons: [{ src: 'azkar-icon.png', sizes: '192x192' }]
          },
          {
            name: 'القبلة',
            short_name: 'القبلة',
            url: '/qibla',
            icons: [{ src: 'qibla-icon.png', sizes: '192x192' }]
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,mp3}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.alquran\.cloud\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'quran-api-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 7 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /^https:\/\/api\.aladhan\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'prayer-api-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /^https:\/\/.*\.mp3$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'audio-cache',
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200, 206] }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@services': path.resolve(__dirname, './src/services')
    }
  },
  server: { port: 3000, host: true },
  build: {
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
          quran: ['@tensorflow/tfjs', '@tensorflow-models/universal-sentence-encoder'],
          audio: ['howler', 'react-h5-audio-player'],
          ui: ['framer-motion', 'lucide-react']
        }
      }
    }
  }
})
