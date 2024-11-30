import {defineConfig} from "tsup";

export default defineConfig({
    clean: true,
    format: ["cjs", "esm"],
    banner: {js: '"use client";'},
    entry: [
        "./src/index.ts"
    ],
    dts: true,
    treeshake: true,
    minify: true
});