<!--
- Name: Nuxt CallApp
- Package name: nuxt-callapp
- Description: A nuxt module for [callapp-lib]
-->

<p align="center">
  <img width="180" src="./assets/callapp.svg" alt="callapp logo">
</p>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

# Nuxt CallApp

A nuxt module for [callapp-lib](https://github.com/suanmei/callapp-lib)

- [✨ &nbsp;Release Notes](https://github.com/xjccc/nuxt-callapp/blob/main/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-callapp?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Configure `callapp-lib` through `nuxt.config.ts`.
- Open an app with `$useCallApp`, or create an independent instance with `$createCallApp`.
- Client-only plugin with TypeScript declarations for both helpers.

## Compatibility

Version 4.6.0 has been tested with Nuxt 4.6.2 and Node.js 26.0.0.

- The `@nuxt/kit` dependency requires Node.js `^20.19.0 || >=22.12.0`.
- Nuxt 4.6.2 requires Node.js `^22.22.3 || ^24.15.0 || >=26.0.0`.

Choose a Node.js version supported by both your Nuxt version and `@nuxt/kit`.
Other Nuxt versions have not been validated for this release.

## Quick Setup

1. Add `nuxt-callapp` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-callapp

# Using yarn
yarn add --dev nuxt-callapp

# Using npm
npm install --save-dev nuxt-callapp
```

2. Add `nuxt-callapp` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-callapp'
  ],
  callapp: {
    scheme: {
      protocol: 'zhihu',
    },
    intent: {
      package: 'com.zhihu.android',
      scheme: 'zhihu',
    },
    universal: {
      host: 'oia.zhihu.com',
      pathKey: '',
    },
    appstore: 'https://itunes.apple.com/cn/app/id432274380',
    yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
    fallback: 'https://oia.zhihu.com/',
    timeout: 2000,
  },
})
```

3. Open an app from a client-side interaction

`$useCallApp` uses the `callapp` options from `nuxt.config.ts` and reuses its
CallApp instance:

```vue
<script setup lang="ts">
import { useNuxtApp } from '#app'

const { $useCallApp } = useNuxtApp()

function openApp() {
  $useCallApp({ path: 'question/270839820/answer/477722658' })
}
</script>

<template>
  <button @click="openApp">Open in Zhihu</button>
</template>
```

To create an independent instance, pass the full options to `$createCallApp`.
These options are not merged with `nuxt.config.ts`:

```vue
<script setup lang="ts">
import { useNuxtApp } from '#app'

const { $createCallApp } = useNuxtApp()

function openApp() {
  const callApp = $createCallApp({
    scheme: { protocol: 'zhihu' },
    appstore: 'https://itunes.apple.com/cn/app/id432274380',
    fallback: 'https://oia.zhihu.com/',
  })

  callApp.open({ path: 'question/270839820/answer/477722658' })
}
</script>

<template>
  <button @click="openApp">Open with custom options</button>
</template>
```

Both helpers are injected only on the client. Call them from a browser event
handler or `onMounted`; do not invoke them during server rendering.
See [callapp-lib](https://github.com/suanmei/callapp-lib) for options and
platform-specific behavior.

## Development and release checks

```bash
pnpm install --frozen-lockfile
pnpm release:check
```

`release:check` prepares generated types, runs lint, type checking and tests,
then builds the module and the playground for production. The `release` script
runs these checks before creating a release commit or tag.

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-callapp/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-callapp

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-callapp.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-callapp

