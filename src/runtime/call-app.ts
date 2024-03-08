import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import CallApp from 'callapp-lib'
import type { CallappConfig, CallappOptions } from 'callapp-lib/dist/type/types'

let callApp:CallApp
/**
 * create CallApp instance
 * @param options 
 * @returns instance
 */
function createCallApp (options: CallappOptions) {
  return new CallApp(options)
}
/**
 * callapp function
 * @param params 
 * @param callback 
 */
function useCallApp(params: CallappConfig, callback?: () => void) {
  const options:CallappOptions = useRuntimeConfig().public.callapp
  if (!callApp) {
    callApp = new CallApp(options)
  }

  // 当传递回调函数会覆盖默认回调
  if (callback) {
    params.callback = callback
  }
  callApp.open(params)
}
export default defineNuxtPlugin({
  name: 'callapp-plugin',
  setup() {
    return {
      provide: {
        createCallApp,
        useCallApp
      }
    }
  }
})

declare module '#app' {
  interface NuxtApp {
    $createCallApp (options: CallappOptions): CallApp
    $useCallApp (params: CallappConfig, callback?: () => void): void
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $createCallApp (options: CallappOptions): CallApp
    $useCallApp (params: CallappConfig, callback?: () => void): void
  }
}