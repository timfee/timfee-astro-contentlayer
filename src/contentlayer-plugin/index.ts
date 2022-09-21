import type { AstroIntegration } from 'astro'

import {
  PluginOptions,
  runContentlayerBuild,
  runContentlayerDev,
} from './plugin'

export default function createPlugin({
  configPath,
}: PluginOptions): AstroIntegration {
  let devServerStarted = false
  return {
    name: 'contentlayer-plugin',

    hooks: {
      'astro:build:start': async ({}) => {
        await runContentlayerBuild({ configPath })
      },
      'astro:server:setup': () => {
        devServerStarted = true
        // TODO also block here until first Contentlayer run is complete
        runContentlayerDev({ configPath })
      },
    },
  }
}
