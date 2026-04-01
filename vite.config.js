import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // 1. Ігноруємо папку e2e, щоб Vitest не "пав" через Playwright
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**'],
    // 2. Шукаємо тести тільки в папці src
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
})