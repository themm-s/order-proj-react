import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import paths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    react({ plugins: [] }),
    paths()
  ],
});