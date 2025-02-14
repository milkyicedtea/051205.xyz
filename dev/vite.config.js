import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@local': path.resolve(__dirname, './src')
        }
    },
    plugins: [react(), svgr()],
    // Dev server
    server: {
        port: 8001,
        host: '0.0.0.0',
        strictPort: true,
        cors: true,
    },
    build: {
        assetsDir: 'assets',
        assetsInlineLimit: 0,
    }
});
