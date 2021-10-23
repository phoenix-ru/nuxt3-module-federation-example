{
  mode: 'production',
  context: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote',
  devtool: 'source-map',
  target: false,
  output: {
    path: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\dist',
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules',
      'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\@vue\\cli-plugin-typescript\\node_modules',
      'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules',
      'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '17c4ba06'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-loader\\dist\\index.js',
            options: {
              cacheDirectory: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '17c4ba06',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ],
              isServerBuild: true
            }
          }
        ]
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              esModule: true,
              fallback: {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]',
                  esModule: true
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]',
              esModule: true
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              esModule: true,
              fallback: {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]',
                  esModule: true
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              esModule: true,
              fallback: {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]',
                  esModule: true
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('css').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('css').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('less').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('less').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                  isServerBuild: true
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.3.11',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, {
                              result
                            }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('thread-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\thread-loader\\dist\\cjs.js'
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\babel-loader\\lib\\index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '521cc888'
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('cache-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\.cache\\ts-loader',
              cacheIdentifier: '86118118'
            }
          },
          /* config.module.rule('ts').use('thread-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\thread-loader\\dist\\cjs.js'
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: true
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('cache-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\.cache\\ts-loader',
              cacheIdentifier: '86118118'
            }
          },
          /* config.module.rule('tsx').use('thread-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\thread-loader\\dist\\cjs.js'
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    realContentHash: false,
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          parallel: true,
          extractComments: false
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'remote',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        template: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\public\\index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      {
        patterns: [
          {
            from: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\public',
            to: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\dist',
            toType: 'dir',
            noErrorOnMissing: true,
            globOptions: {
              ignore: [
                '**/.DS_Store',
                'C:/documents/JavaScript/icons8/mf-demo/nuxt3-mf-reproduction/packages/remote/public/index.html'
              ]
            },
            info: {
              minimized: true
            }
          }
        ]
      }
    ),
    /* config.plugin('eslint') */
    new ESLintWebpackPlugin(
      {
        extensions: [
          '.js',
          '.jsx',
          '.vue',
          '.ts',
          '.tsx'
        ],
        cwd: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote',
        cache: true,
        cacheLocation: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\.cache\\eslint\\f1518c94.json',
        context: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote',
        threads: false,
        emitWarning: false,
        emitError: false,
        eslintPath: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\eslint',
        formatter: 'stylish'
      }
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: 'C:\\documents\\JavaScript\\icons8\\mf-demo\\nuxt3-mf-reproduction\\packages\\remote\\node_modules\\@vue\\compiler-sfc\\dist\\compiler-sfc.cjs.js'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: true
          }
        }
      }
    ),
    /* config.plugin('module-federation') */
    new NodeModuleFederation(
      {
        name: 'remote',
        shared: {
          vue: {
            requiredVersion: '^3.0.0',
            singleton: true,
            eager: true
          }
        }
      }
    ),
    /* config.plugin('node-async-http-runtime') */
    new NodeAsyncHttpRuntime()
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
