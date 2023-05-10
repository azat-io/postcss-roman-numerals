import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      fileName: format => `index.${format === 'es' ? 'mjs' : 'js'}`,
      entry: path.resolve(__dirname, 'index.js'),
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['postcss-value-parser', 'roman-numerals'],
    },
  },
})
