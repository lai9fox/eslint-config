### 安装

```shell
pnpm i -D eslint @lai9fox/eslint-config globals
```

### JS 配置

```javascript
// eslint.config.js
import { defineConfig } from 'eslint/config';
import configs from '@lai9fox/eslint-config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [configs.jsConfig],
    languageOptions: {
      // 按情况选择
      globals: { ...globals.browser, ...globals.node },
    },
  },
]);
```

### TS 配置
```javascript
// eslint.config.js
import { defineConfig } from 'eslint/config';
import configs from '@lai9fox/eslint-config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    extends: [configs.tsConfig],
    languageOptions: {
      // 按情况选择
      globals: { ...globals.browser },
    },    
  },
]);
```

### VUE3 配置
```javascript
// eslint.config.js
import { defineConfig } from 'eslint/config';
import configs from '@lai9fox/eslint-config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,jsx,vue}'],
    extends: [configs.jsVueConfig],
    languageOptions: {
      // 按情况选择
      globals: { ...globals.browser },
    },
  },
]);
```
