import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

/**
 * @param {{ typescript?: boolean }} options
 */
export function vue(options = {}) {
  const configs = [
    ...pluginVue.configs['flat/recommended'],
    {
      name: '@lai9fox/vue/rules',
      files: ['**/*.vue'],
      rules: {
        'no-useless-assignment': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-root-v-if': 'error',
        'vue/no-static-inline-styles': ['error', { allowBinding: false }],
        'vue/no-undef-components': 'error',
        'vue/no-undef-properties': 'error',
        'vue/no-unused-emit-declarations': 'error',
        'vue/no-unused-properties': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-useless-mustaches': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/padding-lines-in-component-definition': 'error',
        'vue/array-bracket-newline': ['error', 'consistent'],
        'vue/array-bracket-spacing': 'error',
        'vue/array-element-newline': ['error', 'consistent'],
        'vue/arrow-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': 'error',
        'vue/eqeqeq': 'error',
        'vue/func-call-spacing': 'error',
        'vue/no-console': 'warn',
        'vue/object-curly-newline': ['error', { consistent: true }],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/quote-props': ['error', 'as-needed'],
        'vue/space-in-parens': ['error', 'never'],
        'vue/template-curly-spacing': ['error', 'always'],
        'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 1 }],
      },
    },
  ];

  if (options.typescript) {
    configs.push({
      name: '@lai9fox/vue/typescript',
      files: ['**/*.vue'],
      languageOptions: {
        parserOptions: {
          parser: tseslint.parser,
        },
      },
    });
  }

  return defineConfig(configs);
}
