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

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-callapp?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- [] update wx support by `callapp-lib`

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

```js
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

That's it! You can now use My Module in your Nuxt app ✨


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-callapp/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-callapp

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-callapp.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-callapp

