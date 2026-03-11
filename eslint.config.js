import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'

export default [
  //Гігієна репозиторію - ігнорування артефактів збірки та залежностей
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'], 
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'no-unused-vars': 'error', //Заборона невикористаних змінних
      'no-console': 'warn',      //Попередження про console statement
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]