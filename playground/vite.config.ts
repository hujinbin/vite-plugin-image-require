import { defineConfig } from 'vite'
import { imageRequirePlugin } from '../dist'

const config = defineConfig({
  resolve: {
    alias: {
      '/@': __dirname,
    },
  },
  build: {
    sourcemap: true,
    minify: false,
  },
  plugins: [
    imageRequirePlugin() as any,
  ],
})

export default config
