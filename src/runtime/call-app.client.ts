import CallApp from 'callapp-lib'
import type { CallappConfig, CallappOptions } from 'callapp-lib/dist/type/types'

let callApp:CallApp

function createCallApp (options: CallappOptions) {
  return new CallApp(options)
}
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

export default defineNuxtPlugin(() => ({
  provide: {
    createCallApp,
    useCallApp
  }
}))
