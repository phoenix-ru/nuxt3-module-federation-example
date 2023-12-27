const { defineConfig } = require('@vue/cli-service')

/* eslint-disable @typescript-eslint/no-var-requires */
const { dependencies } = require('./package.json')

/**
 * Federates the application
 * @param {import('webpack-chain')} config The chain webpack config
 */
function enableModuleFederation (config, isServer) {
  /* Get the needed module federation plugin */
  const ModuleFederationPlugin = isServer
    ? require('@telenko/node-mf').NodeModuleFederation
    : require('webpack').container.ModuleFederationPlugin

  config.plugin('module-federation').use(ModuleFederationPlugin, [{
    name: 'remoteWithButton',
    filename: 'remoteEntry.js',

    exposes: {
      './button': './src/components/Button.vue'
    },

    remotes: {},

    shared: {
      vue: {
        requiredVersion: dependencies.vue,
        singleton: true
      }
    }
  }])

  /* We need special handling for node, but for client the job is done */
  if (!isServer) { return }

  /** Otherwise build fails */
  config.optimization.splitChunks(false)

  /* Interfere with build in order to use HTTP+VM instead of require */
  config.plugin('node-async-http-runtime').use(require('@telenko/node-mf').NodeAsyncHttpRuntime)

  /* Set target to false, this is needed for NodeAsyncHttpRuntime */
  config.target(false)
}

/**
 * Patches the styles loading when ran in federation on server
 * This fixes the critical CSS collection still not implemented in vue-loader@16
 * @param {*} config The chain webpack config
 */
function patchStyles (config) {
  config.module.rule('vue').use('vue-loader').tap(opts => ({
    ...opts,
    isServerBuild: true
  }))

  /* Pass explicit option for vue-style-loader (fork can accept this option) */
  config.module.rules.values().forEach(
    rule => rule.oneOfs.values().forEach(value => {
      const vueStyleLoader = value.uses.get('vue-style-loader')
      if (!vueStyleLoader) { return }

      vueStyleLoader.tap(opts => ({
        ...opts,
        isServerBuild: true
      }))
    })
  )
}

/* Server build flag */
const isServerBuild = process.env.SSR
const isDevelopment = process.env.NODE_ENV !== 'production'

const basePath = 'http://localhost:3101'

module.exports = defineConfig({
  parallel: false,
  transpileDependencies: true,
  publicPath: isDevelopment
    ? '/'
    : isServerBuild
      ? basePath + '/server'
      : basePath + '/client',

  chainWebpack (config) {
    enableModuleFederation(config, isServerBuild)

    if (isServerBuild) {
      patchStyles(config)
    }

    config.mode('development')
    config.devtool('source-map')
  },

  css: {
    extract: false
  }
})
