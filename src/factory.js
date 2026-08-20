import { defineConfig } from 'eslint/config';
import { ignores } from './configs/ignores.js';
import { javascript } from './configs/javascript.js';
import { stylistic } from './configs/stylistic.js';
import { typescript } from './configs/typescript.js';
import { vue } from './configs/vue.js';

/**
 * @typedef {Object} LaiOptions
 * @property {boolean} [javascript=true]
 * @property {boolean} [typescript=false]
 * @property {boolean} [vue=false]
 * @property {boolean} [stylistic=true]
 * @property {string[]} [ignores]
 * @property {Record<string, unknown>} [rules]
 * @property {import('eslint').Linter.Config[]} [overrides]
 */

/**
 * Shared ESLint flat config factory.
 *
 * @param {LaiOptions} [options]
 * @returns {import('eslint').Linter.Config[]}
 */
export function lai(options = {}) {
  const {
    javascript: enableJavascript = true,
    typescript: enableTypescript = false,
    vue: enableVue = false,
    stylistic: enableStylistic = true,
    ignores: userIgnores = [],
    rules = {},
    overrides = [],
  } = options;

  if (!Array.isArray(overrides)) {
    throw new TypeError('overrides must be an array');
  }

  /** @type {import('eslint').Linter.Config[]} */
  const configs = [ignores(userIgnores)];

  if (enableJavascript) {
    configs.push(...javascript());
  }

  if (enableStylistic) {
    configs.push(...stylistic({
      javascript: enableJavascript,
      typescript: enableTypescript,
      vue: enableVue,
    }));
  }

  if (enableTypescript) {
    configs.push(...typescript());
  }

  if (enableVue) {
    configs.push(...vue({ typescript: enableTypescript }));
  }

  if (rules && Object.keys(rules).length > 0) {
    configs.push({
      name: '@lai9fox/rules',
      rules,
    });
  }

  if (overrides.length > 0) {
    configs.push(...overrides);
  }

  return defineConfig(configs);
}
