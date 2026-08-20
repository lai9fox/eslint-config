import { globalIgnores } from 'eslint/config';

const DEFAULT_IGNORES = [
  '**/dist/**',
  '**/coverage/**',
  '**/node_modules/**',
];

/**
 * @param {string[]} userIgnores
 */
export function ignores(userIgnores = []) {
  return globalIgnores([...DEFAULT_IGNORES, ...userIgnores]);
}
