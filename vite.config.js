import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4195,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['ygm.cyberpunk.co.in', '.cyberpunk.co.in'],
  },
  preview: {
    port: 4195,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['ygm.cyberpunk.co.in', '.cyberpunk.co.in'],
  },
});
