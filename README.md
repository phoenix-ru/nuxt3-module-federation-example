# Nuxt 3 Module Federation example

| :fire:  Module Federation support has been implemented!   |
|-----------------------------------------|

This repository showcases how to use Nuxt 3 with Module Federation. It was also used as a reproduction for `shared module not available for eager consumption: Vue` bug. The bug is now [fixed](https://github.com/nuxt/framework/pull/2223) and you can use the full power of Module Federation on both SSR and CSR.

## Getting started
The repository is structured as a Nx monorepo, where `nuxt3-app` package is for the Nuxt 3 host and `remote` package is for Vue CLI-generated component remote.

Please, enable Corepack to use the correct version of Yarn:
```sh
corepack enable
```

Install dependencies:
```sh
yarn
```

## Building
In order to build the packages, simply run
```sh
yarn build
```
When run on project root, it will build all the packages. When run in `packages/*`, it will build the individual packages.

## Starting
To start the Nuxt host and Vue remote, use
```sh
yarn start
```

As with the build command, you can run it either on project root or on individual package root.

## Exposed applications

Nuxt is exposed at http://localhost:3000.

Vue remote is exposed at http://localhost:3101.

You can navigate to http://localhost:3101/client to see the host version of Vue remote.

## Troubleshooting

Please, note that you need to have at least Node.js 14 and Yarn v4.

If you still cannot get the project running, [file an issue](https://github.com/phoenix-ru/nuxt3-module-federation-example/issues/new) in case you encounter.
