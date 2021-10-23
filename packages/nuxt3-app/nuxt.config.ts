import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    ['./modules/build/ModuleFederationModule.ts', {
      federationOptions: (isServer: boolean) => ({
        name: 'nuxthost',

        remotes: {
          'remoteWithButton': isServer
            ? 'remoteWithButton@http://localhost:3101/server/remoteEntry.js'
            : 'remoteWithButton@http://localhost:3101/client/remoteEntry.js',
          footer: isServer
            ? 'footer@http://localhost:3004/node/remoteEntry.js'
            : 'footer@http://localhost:3004/web/remoteEntry.js'
        },

        shared: {
          vue: {
            requiredVersion: '^3.0.0',
            singleton: true,
            eager: true
          }
        },

        exposes: {}
      })
    }]
  ],

  nitro: {
    externals: {
      external: ['vue']
    }
  }
})
