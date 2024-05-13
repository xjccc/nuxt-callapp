// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false
    }
  },
  dirs: {
    src: [
      './playground'
    ]
  }
})
  .append({
    rules: {
      'vue/block-order': 0,
      'no-console': 0,
      'node/prefer-global/process': 0,
      '@stylistic/comma-dangle': [2, 'never'],
      'function-paren-newline': ['error', 'multiline'],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      'object-curly-spacing': ['error', 'always'],
      'object-curly-newline': ['error', {
        multiline: true,
        consistent: true
      }],
      '@stylistic/space-before-function-paren': [2, 'always'],
      '@stylistic/space-before-blocks': [2, 'always']
    }
  })
