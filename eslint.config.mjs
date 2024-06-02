import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier'
import js from '@eslint/js'
import typeScriptESLint from '@typescript-eslint/eslint-plugin'
import typeScriptESLintParser from '@typescript-eslint/parser'

const compat = new FlatCompat()

export default [
  {
    ignores: ['node_modules', '**/*.js', '**/*.d.ts'],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends('plugin:@typescript-eslint/eslint-recommended'),
  {
    plugins: {
      typeScriptESLint,
    },
    languageOptions: {
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: typeScriptESLintParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
      },
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
]
