import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,

  {
    // @see https://uvr.esm.is/guide/eslint#eslint
    name: 'app/unplugin-vue-router/routes',
    languageOptions: {
      globals: {
        definePage: 'readonly',
      },
    },
    settings: {
      'import/core-modules': ['vue-router/auto-routes'],
    },
  },
]
