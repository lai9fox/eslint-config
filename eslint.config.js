import configs from './src/index.js';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [configs.jsConfig],
  },
]);
