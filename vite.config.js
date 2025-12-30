import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use repo name for correct asset paths on GitHub Pages
  base: '/yamen-alkwify/',
  plugins: [react()],
});
