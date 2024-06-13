import { defineConfig } from 'dumi';
import { join } from 'path';

const base = '/dumi-monorepo-template/';

export default defineConfig({
  title: 'NM',
  outputPath: 'docs-dist',
  base: `${base}`,
  publicPath: `${base}`,
  logo: `${base}logo.png`,
  favicons: [`${base}logo.png`],
  themeConfig: {
    name: 'NM',
    showLineNumber: true,
    socialLinks: {
      github: 'https://github.com/huanglii/dumi-monorepo-template',
    },
  },
  alias: {
    '@nm/util': join(__dirname, 'packages/util/src'),
    '@nm/component': join(__dirname, 'packages/component/src'),
    '@nm/ui': join(__dirname, 'packages/ui/src'),
  },
  resolve: {
    atomDirs: [
      { type: 'util', dir: '/packages/util/src' },
      { type: 'component', dir: `/packages/component/src` },
      { type: 'ui', dir: `/packages/ui/src` },
    ],
  },
  monorepoRedirect: {
    peerDeps: true,
  },
});
