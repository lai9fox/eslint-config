import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'no-await-in-loop': 'error',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-self-compare': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'curly': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'eqeqeq': 'error',
      'max-depth': 'warn',
      'no-else-return': 'warn',
      'no-nested-ternary': 'error',
      'no-param-reassign': 'error',
      'no-var': 'error',
      'prefer-template': 'warn',
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/brace-style': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/curly-newline': ['error', { consistent: true }],
      '@stylistic/eol-last': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-confusing-arrow': 'error',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-newline': ['error', { consistent: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': 'error',
    },
  },
]);
