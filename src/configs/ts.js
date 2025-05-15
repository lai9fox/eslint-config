import jsConfig from './js.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  tseslint.configs.recommended,
  jsConfig,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
);
