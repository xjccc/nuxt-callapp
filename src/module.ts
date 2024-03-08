import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import type { CallappOptions } from 'callapp-lib/dist/type/types'
// Module options TypeScript interface definition
export interface ModuleOptions extends CallappOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-callapp',
    configKey: 'callapp'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    scheme: {
      protocol: '',
    },
    appstore: '',
    fallback: ''
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.callapp = defu(options, {
      timeout: 2000
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/call-app.client'))
  }
})
