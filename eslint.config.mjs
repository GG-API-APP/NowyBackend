import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node // Dodaj globalne zmienne Node.js
      }
    }
  },
  pluginJs.configs.recommended
]
