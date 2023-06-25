// vite.config.ts
import { defineConfig } from "file:///C:/Users/feng/Desktop/Projects/Moki-Editor/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///C:/Users/feng/Desktop/Projects/Moki-Editor/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/feng/Desktop/Projects/Moki-Editor/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\feng\\Desktop\\Projects\\Moki-Editor";
var getChunkName = (path, includePath) => {
  var _a, _b, _c, _d, _e, _f, _g;
  if (!path)
    return;
  const chunkName = (_c = (_b = (_a = path.split(includePath)) == null ? void 0 : _a[1]) == null ? void 0 : _b.split(".")) == null ? void 0 : _c[0];
  const ext = (_f = (_e = (_d = path.split(includePath)) == null ? void 0 : _d[1]) == null ? void 0 : _e.split(".")) == null ? void 0 : _f[1];
  const jsRegex = /\.[jt]sx?$/;
  if (((_g = chunkName == null ? void 0 : chunkName.split("/")) == null ? void 0 : _g.length) >= 2 && jsRegex.test(`.${ext}`)) {
    return chunkName;
  }
};
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    react(),
    dts()
  ],
  esbuild: {
    drop: ["console", "debugger"]
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./lib/index.ts"),
      name: "@moki/editor",
      fileName: "index",
      formats: ["es"]
    },
    minify: "esbuild",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        chunkFileNames: "[name].js",
        globals: {
          "react": "react",
          "react-dom": "react-dom"
        },
        manualChunks(id) {
          if (id.includes("lib/")) {
            return getChunkName(id, "lib/");
          }
          if (id.includes("node_modules")) {
            return `modules/${id.toString().split("node_modules/")[1].split("/")[0].toString()}`;
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmZW5nXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcTW9raS1FZGl0b3JcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGZlbmdcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxNb2tpLUVkaXRvclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZmVuZy9EZXNrdG9wL1Byb2plY3RzL01va2ktRWRpdG9yL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcblxyXG5jb25zdCBnZXRDaHVua05hbWUgPSAocGF0aCwgaW5jbHVkZVBhdGgpID0+IHtcclxuICAgIGlmICghcGF0aCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY2h1bmtOYW1lID0gcGF0aC5zcGxpdChpbmNsdWRlUGF0aCk/LlsxXT8uc3BsaXQoJy4nKT8uWzBdO1xyXG4gICAgY29uc3QgZXh0ID0gcGF0aC5zcGxpdChpbmNsdWRlUGF0aCk/LlsxXT8uc3BsaXQoJy4nKT8uWzFdO1xyXG4gICAgY29uc3QganNSZWdleCA9IC9cXC5banRdc3g/JC87XHJcbiAgICBpZiAoY2h1bmtOYW1lPy5zcGxpdCgnLycpPy5sZW5ndGggPj0gMiAmJiBqc1JlZ2V4LnRlc3QoYC4ke2V4dH1gKSkge1xyXG4gICAgICAgIHJldHVybiBjaHVua05hbWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIGJhc2U6ICcuLycsXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgcmVhY3QoKSxcclxuICAgICAgICBkdHMoKSxcclxuICAgIF0sXHJcbiAgICBlc2J1aWxkOiB7XHJcbiAgICAgICAgZHJvcDogWydjb25zb2xlJywgJ2RlYnVnZ2VyJ10sXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9saWIvaW5kZXgudHMnKSxcclxuICAgICAgICAgICAgbmFtZTogJ0Btb2tpL2VkaXRvcicsXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaW5pZnk6ICdlc2J1aWxkJyxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAncmVhY3QnOiAncmVhY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZWFjdC1kb20nOiAncmVhY3QtZG9tJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ2xpYi8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q2h1bmtOYW1lKGlkLCAnbGliLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgbW9kdWxlcy8ke2lkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJy8nKVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKCl9YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULFNBQVEsb0JBQW1CO0FBQ3ZWLFNBQVEsZUFBYztBQUN0QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU0sZUFBZSxDQUFDLE1BQU0sZ0JBQWdCO0FBTDVDO0FBTUksTUFBSSxDQUFDO0FBQU07QUFDWCxRQUFNLGFBQVksc0JBQUssTUFBTSxXQUFXLE1BQXRCLG1CQUEwQixPQUExQixtQkFBOEIsTUFBTSxTQUFwQyxtQkFBMkM7QUFDN0QsUUFBTSxPQUFNLHNCQUFLLE1BQU0sV0FBVyxNQUF0QixtQkFBMEIsT0FBMUIsbUJBQThCLE1BQU0sU0FBcEMsbUJBQTJDO0FBQ3ZELFFBQU0sVUFBVTtBQUNoQixRQUFJLDRDQUFXLE1BQU0sU0FBakIsbUJBQXVCLFdBQVUsS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLEdBQUc7QUFDL0QsV0FBTztBQUFBLEVBQ1g7QUFDSjtBQUlBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxNQUFNLENBQUMsV0FBVyxVQUFVO0FBQUEsRUFDaEM7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUMxQyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2xCO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUEsUUFDaEIsU0FBUztBQUFBLFVBQ0wsU0FBUztBQUFBLFVBQ1QsYUFBYTtBQUFBLFFBQ2pCO0FBQUEsUUFDQSxhQUFhLElBQUk7QUFDYixjQUFJLEdBQUcsU0FBUyxNQUFNLEdBQUc7QUFDckIsbUJBQU8sYUFBYSxJQUFJLE1BQU07QUFBQSxVQUNsQztBQUNBLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUM3QixtQkFBTyxXQUFXLEdBQUcsU0FBUyxFQUN6QixNQUFNLGVBQWUsRUFBRSxDQUFDLEVBQ3hCLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFDWixTQUFTO0FBQUEsVUFFbEI7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUVKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
