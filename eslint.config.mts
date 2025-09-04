import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import parser from '@typescript-eslint/parser'

export default defineConfig([
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // Regole generali per JS/TS/JSX
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    extends: ['js/recommended'],
    languageOptions: { parser, globals: globals.browser },
    rules: {
      'no-multiple-empty-lines': ['error', { max: 1 }],
      // React specific
      'react/react-in-jsx-scope': 'off',
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // JSX a11y
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      // TypeScript
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Prettier
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],
      // Imports
      'unused-imports/no-unused-imports': 'warn',
      // ESLint no-unused-vars
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
