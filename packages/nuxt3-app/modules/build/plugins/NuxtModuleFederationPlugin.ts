import { Compilation, Compiler, sources, Template } from 'webpack'

export interface NuxtModuleFederationPluginOptions {
  serverAssetName: string
}

export default class NuxtModuleFederationPlugin {
  // todo options validation
  constructor(
    protected options: NuxtModuleFederationPluginOptions = {
      serverAssetName: 'server.mjs'
    }
  ) {}

  apply(compiler: Compiler) {
    compiler.hooks.compilation.tap(
      'nuxt-module-federation',
      this.compilationHook.bind(this)
    )
  }

  compilationHook(compilation: Compilation) {
    const serverAssetName = this.options.serverAssetName

    compilation.hooks.processAssets.tap(
      {
        name: 'nuxt-module-federation',
        stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY
      },
      assets => {
        /* Warn if asset is not found */
        if (!assets[serverAssetName]) {
          console.warn(
            `Server asset ${serverAssetName} was not found in compilation, please check that correct name is provided`
          )
          return
        }

        /* Prepend shim */
        assets[serverAssetName] = new sources.ConcatSource(
          new sources.RawSource(
            Template.asString([
              `import { createCommonJS } from 'mlly'`,
              `const { __dirname, __filename, require } = createCommonJS(import.meta.url)`,
              '\n'
            ])
          ),
          assets[serverAssetName]
        )
      }
    )
  }
}
