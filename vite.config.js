import { defineConfig } from 'vite';

export default defineConfig({
  // Allow Arena's preview hostname while retaining Vite's host protection.
  server: { allowedHosts: ['.e2b.app'] },
  preview: { allowedHosts: ['.e2b.app'] }
});
