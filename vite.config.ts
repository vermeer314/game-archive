import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://vermeer314.github.io/game-archive/',
  plugins: [react()],
});
