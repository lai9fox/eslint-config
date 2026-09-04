import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

const FILES = ['**/*.{ts,mts,cts}'];

export function typescript() {
  return defineConfig([
    ...tseslint.configs.recommended,
    {
      name: '@lai9fox/typescript/rules',
      files: FILES,
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
      },
    },
  ]);
}
