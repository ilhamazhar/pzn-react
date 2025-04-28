import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        a1: 'index.html',
        a2: 'hello-world.html',
        a3: 'contact.html',
        a4: 'counter.html',
        a5: 'note.html',
        a6: 'profile.html',
        a7: 'timer.html',
        a8: 'guestbook.html',
        a9: 'product.html',
        a10: 'online.html',
      },
    },
  }
})
