import { defineConfig } from 'astro/config'
import contentlayer from './src/contentlayer-plugin/index.ts'

export default defineConfig({
  integrations: [contentlayer({ configPath: './contentlayer.config.ts' })],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents', 'markdown-wasm'],
    },
  },
})
