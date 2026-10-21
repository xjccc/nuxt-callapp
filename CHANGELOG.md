# Changelog

## v4.6.0

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v4.1.1...v4.6.0)

### Build and maintenance

- Update Nuxt and `@nuxt/kit` to 4.6.2, `@nuxt/test-utils` to 4.3.4,
  Vitest to 5.0.5, and Nuxt DevTools to 4.0.0-beta.6.
- Update module builder, ESLint and commit tooling; declare TypeScript as a
  development dependency and allow required native dependency builds in pnpm.
- Import `useNuxtApp` explicitly in the playground for lint compatibility.
- Run preparation, lint, type checking, tests, module packaging and the
  playground production build before creating a release commit or tag.

### Documentation and compatibility

- Document `$useCallApp`, `$createCallApp` and their client-only usage.
- Keep the existing public API and `callapp-lib` dependency unchanged.
- Validate the module build, playground production build and a separate Nuxt
  consumer with Nuxt 4.6.2 and Node.js 26.0.0.
- `@nuxt/kit` requires Node.js `^20.19.0 || >=22.12.0`; Nuxt 4.6.2 requires
  `^22.22.3 || ^24.15.0 || >=26.0.0`. Other Nuxt versions are not covered by
  this release's validation.

## v4.1.1

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v4.0.1...v4.1.1)

### 💅 Refactors

- Replace lint-staged to nano-staged ([e3ea351](https://github.com/xjccc/nuxt-callapp/commit/e3ea351))

### 🏡 Chore

- Update pnpm-lock ([1e935cd](https://github.com/xjccc/nuxt-callapp/commit/1e935cd))

### ❤️ Contributors

- Xjccc ([@xjccc](https://github.com/xjccc))

## v4.0.1

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.5.1...v4.0.1)

### 📦 Build

- V1.5.1 ([df41519](https://github.com/xjccc/nuxt-callapp/commit/df41519))

### 🏡 Chore

- **release:** V4.0.1 ([75f69d2](https://github.com/xjccc/nuxt-callapp/commit/75f69d2))

### ❤️ Contributors

- Xjccc ([@xjccc](https://github.com/xjccc))

## v4.0.2

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v4.0.1...v4.0.2)

## v4.0.1

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.5.1...v4.0.1)

### 📦 Build

- V1.5.1 ([df41519](https://github.com/xjccc/nuxt-callapp/commit/df41519))

### ❤️ Contributors

- Xjccc ([@xjccc](https://github.com/xjccc))

## v1.5.1

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.5.0...v1.5.1)

### 🏡 Chore

- **release:** V1.5.1 ([71f2a71](https://github.com/xjccc/nuxt-callapp/commit/71f2a71))

### ❤️ Contributors

- Xjccc ([@xjccc](http://github.com/xjccc))

## v1.5.0

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.4.0...v1.5.0)

### 🚀 Enhancements

- Logo ([68cf205](https://github.com/xjccc/nuxt-callapp/commit/68cf205))

### 🏡 Chore

- Postinstall -> prepare ([18fbe6a](https://github.com/xjccc/nuxt-callapp/commit/18fbe6a))

### ❤️ Contributors

- Xjccc ([@xjccc](http://github.com/xjccc))

## v1.4.0

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.3.0...v1.4.0)

### 🚀 Enhancements

- Callback add instance ([c804163](https://github.com/xjccc/nuxt-callapp/commit/c804163))

### ❤️ Contributors

- Xjccc ([@xjccc](http://github.com/xjccc))

## v1.3.0

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.2.0...v1.3.0)

### 🚀 Enhancements

- Add vue ComponentCustomProperties ([d99a265](https://github.com/xjccc/nuxt-callapp/commit/d99a265))

### ❤️ Contributors

- Xjccc ([@xjccc](http://github.com/xjccc))

## v1.2.0

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.1.3...v1.2.0)

### 🚀 Enhancements

- Types ([9c2f96d](https://github.com/xjccc/nuxt-callapp/commit/9c2f96d))

### 🌊 Types

- Add plugin types ([02473ac](https://github.com/xjccc/nuxt-callapp/commit/02473ac))

### ❤️ Contributors

- Xjccc ([@xjccc](http://github.com/xjccc))

## v1.1.3

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.1.2...v1.1.3)

### 🩹 Fixes

- Import defineNuxtPlugin from #import ([2a5c8d5](https://github.com/xjccc/nuxt-callapp/commit/2a5c8d5))

### ❤️ Contributors

- Xjccc ([@xjccc](http://github.com/xjccc))

## v1.1.2

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.1.1...v1.1.2)

## v1.1.1

[compare changes](https://github.com/xjccc/nuxt-callapp/compare/v1.1.0...v1.1.1)

## v1.1.0


### 🚀 Enhancements

- Start ([4db2ffe](https://github.com/xjccc/nuxt-callapp/commit/4db2ffe))
- Callapp ([71810b5](https://github.com/xjccc/nuxt-callapp/commit/71810b5))

### ❤️ Contributors

- Xjccc ([@xjccc](http://github.com/xjccc))

