module.exports = {
  extends: ['./lib/js.js', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    'vue/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'vue/max-attributes-per-line': [
      'error', {
        'singleline': 4,
        'multiline': 1,
      }
    ],
    'vue/v-on-handler-style': 'error',
    'vue/static-class-names-order': 'error',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-root-v-if': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/block-order': ['error', { 'order': [ 'template', 'script', 'style' ] }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-self-closing': [
      'error', {
        'html': {
          'void': 'always',
          'normal': 'always',
          'component': 'always',
        },
        'svg': 'always',
        'math': 'always',
      }
    ],
    'vue/padding-lines-in-component-definition': 'error',
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'vue/block-tag-newline': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'warn',
    'vue/no-boolean-default': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'warn',
    'vue/padding-line-between-blocks': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/camelcase': 'warn',
    'vue/eqeqeq': 'error',
    'vue/comma-dangle': ['error', { objects: 'always-multiline' }],
    'vue/array-bracket-newline': ['error', { 'multiline': true }],
    'vue/array-element-newline': ['error', 'consistent'],
    'vue/comma-spacing': ['error', { 'before': false, 'after': true }],
    'vue/dot-notation': 'warn',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/no-extra-parens': 'error',
    'vue/object-curly-newline': ['error', { 'multiline': true }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/template-curly-spacing': ['error', 'always'],
    'vue/script-indent': ['error', 2],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: { indent: 'off' },
    }
  ],
};
