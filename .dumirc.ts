import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'NM',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'NM',
    showLineNumber: true,
    socialLinks: {
      github: 'https://github.com/huanglii/dumi-monorepo-template',
    },
  },
  alias: {
    'met-ui': join(__dirname, 'packages/met-ui/src'),
    '@nm/util': join(__dirname, 'packages/util/src'),
    '@nm/ui': join(__dirname, 'packages/ui/src'),
  },
  resolve: {
    atomDirs: [
      { type: 'met-ui', dir: `/packages/met-ui/src` },
      { type: 'util', dir: '/packages/util/src' },
      { type: 'ui', dir: `/packages/ui/src` },
    ],
  },
  monorepoRedirect: {
    peerDeps: true,
  },
});
