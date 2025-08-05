import pluginVue from 'eslint-plugin-vue';
import jsConfig from './js.js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  jsConfig,
  ...pluginVue.configs['flat/recommended'],
]);
