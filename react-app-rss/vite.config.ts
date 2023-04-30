/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
      forceBuildInstrument: true,
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    css: true,
    coverage: {
      include: ['src/*/'],
      exclude: ['src/*.{ts,tsx}'],
      enabled: true,
      provider: 'c8',
      all: true,
      skipFull: true,
      reporter: 'text',
    },
  },
});
