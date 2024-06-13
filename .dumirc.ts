import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'nm',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'nm',
  },
  alias: {
    'met-ui': join(__dirname, 'packages/met-ui/src'),
    '@nm/utils': join(__dirname, 'packages/utils/src'),
    '@nm/ui': join(__dirname, 'packages/ui/src'),
  },
  resolve: {
    atomDirs: [
      { type: 'met-ui', dir: `/packages/met-ui/src` },
      { type: 'utils', dir: '/packages/utils/src' },
      { type: 'ui', dir: `/packages/ui/src` },
    ],
  },
  monorepoRedirect: {
    peerDeps: true,
  },
});
