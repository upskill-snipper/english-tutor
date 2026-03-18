import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/english-tutor/',
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) return 'vendor';
          if (id.includes('node_modules/react-router-dom')) return 'vendor';
          if (id.includes('node_modules/react/')) return 'vendor';
          if (id.includes('/data/ks3Courses') || id.includes('/data/ks4Courses')) return 'data-aqa';
          if (id.includes('/data/edexcel/')) return 'data-edexcel';
          if (id.includes('data/ocr/texts')) return 'data-ocr-texts';
          if (id.includes('/data/ocr/')) return 'data-ocr';
          if (id.includes('data/wjec/texts')) return 'data-wjec-texts';
          if (id.includes('/data/wjec/')) return 'data-wjec';
          if (/flashcard/i.test(id)) return 'data-flashcards';
          if (id.includes('practiceData')) return 'data-practice';
        },
      },
    },
  },
})
