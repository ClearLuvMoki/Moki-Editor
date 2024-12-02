import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      ignoreWarnings: [/Critical dependency/],
    },
  },
  html: {
    title: 'ClearLuv Editor',
  },
});
