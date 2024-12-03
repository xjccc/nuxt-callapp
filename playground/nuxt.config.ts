export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  callapp: {
    scheme: {
      protocol: 'zhihu'
    },
    intent: {
      package: 'com.zhihu.android',
      scheme: 'zhihu'
    },
    universal: {
      host: 'oia.zhihu.com',
      pathKey: ''
    },
    appstore: 'https://itunes.apple.com/cn/app/id432274380',
    yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
    fallback: 'https://oia.zhihu.com/',
    timeout: 2000
  }
})
