import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

/**
 * @param {{ javascript?: boolean, typescript?: boolean, vue?: boolean }} layers
 */
export function stylistic(layers = {}) {
  const files = [];
  if (layers.javascript) {
    files.push('**/*.{js,mjs,cjs}');
  }
  if (layers.typescript) {
    files.push('**/*.{ts,mts,cts}');
  }
  if (layers.vue) {
    files.push('**/*.vue');
  }
  if (files.length === 0) {
    return [];
  }

  return defineConfig([
    {
      name: '@lai9fox/stylistic',
      files,
      plugins: { '@stylistic': stylisticPlugin },
      rules: {
        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/array-bracket-spacing': 'error',
        '@stylistic/array-element-newline': ['error', 'consistent'],
        '@stylistic/arrow-spacing': 'error',
        '@stylistic/brace-style': 'error',
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/comma-spacing': 'error',
        '@stylistic/curly-newline': ['error', { consistent: true }],
        '@stylistic/eol-last': 'error',
        '@stylistic/function-call-spacing': 'error',
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/indent': ['error', 2],
        '@stylistic/no-confusing-arrow': 'error',
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-multiple-empty-lines': 'error',
        '@stylistic/no-trailing-spaces': 'error',
        '@stylistic/no-whitespace-before-property': 'error',
        '@stylistic/object-curly-newline': ['error', { consistent: true }],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/semi': 'error',
        '@stylistic/semi-spacing': 'error',
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/template-curly-spacing': ['error', 'always'],
      },
    },
  ]);
}
