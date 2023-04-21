import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"
import typescript from "@rollup/plugin-typescript";

const DevConfig: UserConfig = {
    base: './',
    plugins: [
        react(),
    ],
    server: {
        port: 12345
    }
};

const BuildConfig: UserConfig = {
    base: './',
    plugins: [
        react(),
        typescript({
            target: 'esnext',
            rootDir: resolve('./lib'),
            declaration: true,
            compilerOptions: {
                outDir: "./dist"
            },
            exclude: resolve('node_modules/**'),
        })
    ],
    build: {
        lib: {
            name: "MokiEditor",
            fileName: 'index',
            entry: resolve('./lib/index.ts'),
            formats: [ 'es', 'cjs' ]
        },
        minify: 'esbuild',
        rollupOptions: {
            external: ["react", "react-dom", "antd"],
            output: {
                globals: {
                    "react": "react",
                    'react-dom': 'react-dom',
                    'antd': 'antd'
                }
            },
            manualChunks: (id) => {
                if(id.includes('node_modules'))
                    return id.toString()
                        .split('node_modules/')[1]
                        .split('/')[0]
                        .toString()
                else if(id.includes('.svg'))
                    return id.split('/')
                        .slice(-1)[0]
                        .replace('.', '_')
            }
        }
    }
}

export default defineConfig(({ mode }) => mode === 'prod' ? BuildConfig : DevConfig)
