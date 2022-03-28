import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
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
    createVuePlugin(/* options */),
    imageRequirePlugin() as any,
  ],
})

export default config
