import type { StorybookConfig } from '@storybook/react-vite'
import remarkGfm from 'remark-gfm'

const config: StorybookConfig = {
  stories: [
    '../src/docs/**/*.mdx',
    '../src/components/**/*.mdx',
    '../src/components/**/*.stories.@(ts|tsx)',
    '../src/screens/**/*.mdx',
    '../src/screens/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    {
      // Nearly all the reference material in this Storybook is tabular
      // (token tables, variant matrices) — Storybook's MDX pipeline is
      // CommonMark only out of the box, which renders a pipe table as a wall
      // of literal text, so GFM is not optional here.
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  typescript: {
    // react-docgen-typescript needs TypeScript internals this toolchain
    // doesn't have available; react-docgen parses with Babel instead — no TS
    // program required, and it still reads interfaces + JSDoc, which is all
    // the props tables need.
    reactDocgen: 'react-docgen',
  },
}

export default config
