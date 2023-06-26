import {defineConfig} from 'vite'
import {resolve} from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import VitePluginStyleInject from 'vite-plugin-style-inject';


// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
        dts(),
        VitePluginStyleInject()
    ],
    esbuild: {
        drop: ['console', 'debugger'],
    },
    build: {
        lib: {
            entry: resolve(__dirname, './lib/index.ts'),
            name: '@moki/editor',
            fileName: 'index',
            formats: ['es'],
        },
        minify: 'esbuild',
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                chunkFileNames: '[name].js',
                globals: {
                    'react': 'react',
                    'react-dom': 'react-dom',
                },
            },
        },

    }
})
