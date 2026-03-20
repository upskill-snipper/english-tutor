import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/english-tutor/',
  server: { port: 5174 },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          /* ── Vendor ─────────────────────────────────── */
          if (id.includes('node_modules/react-dom')) return 'vendor';
          if (id.includes('node_modules/react-router-dom')) return 'vendor';
          if (id.includes('node_modules/react/')) return 'vendor';

          /* ── Edexcel: split courses vs texts vs flashcards ── */
          if (id.includes('/data/edexcel/flashcards')) return 'data-edexcel-flashcards';
          if (id.includes('/data/edexcel/texts')) return 'data-edexcel-texts';
          if (id.includes('/data/edexcel/')) return 'data-edexcel';

          /* ── OCR ────────────────────────────────────── */
          if (id.includes('/data/ocr/texts')) return 'data-ocr-texts';
          if (id.includes('/data/ocr/') && /flashcard/i.test(id)) return 'data-ocr-flashcards';
          if (id.includes('/data/ocr/')) return 'data-ocr';

          /* ── WJEC ───────────────────────────────────── */
          if (id.includes('/data/wjec/texts')) return 'data-wjec-texts';
          if (id.includes('/data/wjec/') && /flashcard/i.test(id)) return 'data-wjec-flashcards';
          if (id.includes('/data/wjec/')) return 'data-wjec';

          /* ── AQA-specific data (poems, set texts, etc.) ── */
          if (id.includes('/data/aqaPowerConflict')) return 'data-aqa-poems';
          if (id.includes('/data/aqaLitSetTexts') || id.includes('/data/aqaSetTextFlashcards')) return 'data-aqa-lit';
          if (id.includes('/data/ks4Lit') || id.includes('/data/ks4Lang') || id.includes('/data/ks4Revision')) return 'data-aqa-ks4';

          /* ── KS3 (separate from KS4/AQA) ────────────── */
          if (id.includes('/data/ks3')) return 'data-ks3';

          /* ── Shared / general data ──────────────────── */
          /* Literature study guides are dynamically imported in PaperHub;
             do NOT merge them — let each resolve to its own async chunk. */
          if (id.includes('/data/litPracticeQuestions')) return 'data-practice-lit';
          if (id.includes('practiceData')) return 'data-practice';
          if (/flashcard/i.test(id) && id.includes('/data/')) return 'data-flashcards';
          if (id.includes('/data/examTechnique')) return 'data-exam-technique';
        },
      },
    },
  },
})
