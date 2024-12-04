import {defineConfig} from "tsup";

export default defineConfig({
    clean: true,
    format: ["cjs", "esm"],
    banner: {js: '"use client";'},
    entry: [
        "./src/index.ts"
    ],
    dts: true,
    define: {
        "process.env.IS_PREACT": JSON.stringify("true"),
    },
    // treeshake: true,
    minify: true
});