import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Main_flow/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
