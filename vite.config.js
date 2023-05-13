const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: './',
  build: {
    cssCodeSplit: true,
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      external:[],
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})
