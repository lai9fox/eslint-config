### 安装

```shell
pnpm i -D eslint@^10 @lai9fox/eslint-config
```

要求：**ESLint >= 10**。

### 基本用法

```javascript
// eslint.config.js
import lai from "@lai9fox/eslint-config";

export default lai({
  // 默认均为：javascript: true, stylistic: true
});
```

### TypeScript

```javascript
import lai from "@lai9fox/eslint-config";

export default lai({
  typescript: true,
});
```

### Vue 3

```javascript
import lai from "@lai9fox/eslint-config";

export default lai({
  vue: true,
});
```

### TypeScript + Vue

```javascript
import lai from "@lai9fox/eslint-config";

export default lai({
  typescript: true,
  vue: true,
});
```

### 覆盖规则与行为

```javascript
import lai from "@lai9fox/eslint-config";
import globals from "globals";

export default lai({
  typescript: true,
  vue: true,
  stylistic: true, // 设为 false 可关闭 @stylistic 规则（不影响 vue/* 风格规则）
  ignores: ["**/fixtures/**"],
  rules: {
    "no-console": "off",
  },
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,vue}"],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
    },
    {
      files: ["scripts/**"],
      rules: {
        "no-console": "warn",
      },
    },
  ],
});
```

### Options

| 选项         | 默认    | 说明                                                       |
| ------------ | ------- | ---------------------------------------------------------- |
| `javascript` | `true`  | JS 基础规则                                                |
| `typescript` | `false` | TypeScript 层（不自动关闭 JS）                             |
| `vue`        | `false` | Vue 层；可与 `typescript` 同时开启                         |
| `stylistic`  | `true`  | `@stylistic/*` 规则层                                      |
| `ignores`    | `[]`    | 追加到默认 ignores（`dist` / `coverage` / `node_modules`） |
| `rules`      | `{}`    | 全局规则覆盖                                               |
| `overrides`  | `[]`    | 追加的 flat config 对象                                    |
