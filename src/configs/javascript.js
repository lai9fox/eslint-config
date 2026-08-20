import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

const FILES = ['**/*.{js,mjs,cjs}'];

export function javascript() {
  return defineConfig([
    {
      ...js.configs.recommended,
      name: '@lai9fox/javascript/recommended',
      files: FILES,
    },
    {
      name: '@lai9fox/javascript/rules',
      files: FILES,
      rules: {
        'no-await-in-loop': 'error',
        'no-debugger': 'warn',
        'no-duplicate-imports': 'error',
        'no-self-compare': 'error',
        'no-use-before-define': ['error', { functions: false }],
        'no-useless-assignment': 'error',
        curly: ['error', 'multi-line'],
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        eqeqeq: 'error',
        'max-depth': 'warn',
        'no-else-return': 'warn',
        'no-nested-ternary': 'error',
        'no-param-reassign': 'error',
        'no-var': 'error',
        'prefer-template': 'warn',
      },
    },
  ]);
}
