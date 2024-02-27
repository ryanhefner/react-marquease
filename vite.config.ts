import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      exclude: ['index.cjs', 'es/**/*', 'src/**/*.test.jsx', 'tools/**/*', 'types/**/*', 'umd/**/*'],
      reporter: ['clover', 'html', 'json', 'lcov'],
    },
    include: ['./src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
  },
})
