import {defineConfig} from 'vite'
import {resolve} from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const getChunkName = (path, includePath) => {
    if (!path) return;
    const chunkName = path.split(includePath)?.[1]?.split('.')?.[0];
    const ext = path.split(includePath)?.[1]?.split('.')?.[1];
    const jsRegex = /\.[jt]sx?$/;
    if (chunkName?.split('/')?.length >= 2 && jsRegex.test(`.${ext}`)) {
        return chunkName;
    }
};


// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
        dts(),
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
                manualChunks(id) {
                    if (id.includes('lib/')) {
                        return getChunkName(id, 'lib/');
                    }
                    if (id.includes('node_modules')) {
                        return `modules/${id.toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString()}`;

                    }
                }
            },
        },

    }
})
