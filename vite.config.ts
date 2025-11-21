import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      open: true,
    },
    plugins: [
      react()
    ],
    build: {
      // Enable minification
      minify: 'esbuild', // Changed to esbuild for better compatibility
      // Code splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'icons': ['lucide-react'],
          },
        },
      },
      // Report compressed size
      reportCompressedSize: true,
      // Chunk size warning limit
      chunkSizeWarningLimit: 1000,
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
