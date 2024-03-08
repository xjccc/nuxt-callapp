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
 * @param config 
 * @param callback 
 */
function useCallApp(config: CallappConfig, callback?: (instance: CallApp) => void) {
  const options:CallappOptions = useRuntimeConfig().public.callapp
  if (!callApp) {
    callApp = new CallApp(options)
  }

  // 执行传入的回调
  if (callback) {
    config.callback = () => {
      callback(callApp)
    }
  }
  callApp.open(config)
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
    $useCallApp (config: CallappConfig, callback?: (instance: CallApp) => void): void
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $createCallApp (options: CallappOptions): CallApp
    $useCallApp (config: CallappConfig, callback?: (instance: CallApp) => void): void
  }
}