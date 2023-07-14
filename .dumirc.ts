import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'thy-ui',
  },
  base: '/thy-ui/',
  publicPath: '/thy-ui/',
  exportStatic: {},
});
