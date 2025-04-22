### 安装

```shell
pnpm i -D eslint @lai9fox/eslint-config
```

### JS 配置

```javascript
// eslint.config.js
import configs from '@lai9fox/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [configs.jsConfig],
  },
]);
```