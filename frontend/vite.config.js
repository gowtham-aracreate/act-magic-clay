import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({

  plugins: [react(), tailwindcss(),

  ],
  // assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif'],
  server: {
    hmr: {
      overlay: false
    }
  }
})
