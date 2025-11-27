import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    // ⬇️ ADD THIS NEW BLOCK ⬇️
    server: {
        // Tells Vite to listen on all network interfaces (0.0.0.0)
        // This often resolves connection issues when using localhost/127.0.0.1
        host: '0.0.0.0', 
        // Ensures the browser connects back to 'localhost' for Hot Module Replacement (HMR)
        hmr: {
            host: 'localhost',
        },
    },
});