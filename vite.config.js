import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Set the root to the src folder
  base: './',
  server: {
    port: 3000,
  },
  publicDir: '../public', // Point to the public folder
});