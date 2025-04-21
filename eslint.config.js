import globals from 'globals';
import configs from './src/index.js';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  {
    files: [
      '**/*.{js,mjs,cjs}',
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [configs.jsConfig],
  },
]);
