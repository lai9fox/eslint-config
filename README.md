<!-- TOC -->
  * [`js` 配置](#js-配置)
    * [安装依赖](#安装依赖)
    * [配置](#配置)
  * [`vue(js)` 配置](#vuejs-配置)
    * [安装依赖](#安装依赖-1)
    * [配置](#配置-1)
<!-- TOC -->

## `js` 配置

### 安装依赖

```shell
npm install -D eslint
```

### 配置

```js
// .eslintrc.js
module.exports = {
  extends: '@lai9fox/eslint-config', // '@lai9fox/eslint-config/js'
  // 其他 eslint 配置
};
```
## `vue(js)` 配置

### 安装依赖

```shell
npm install -D eslint eslint-plugin-vue vue-eslint-parser
```

### 配置

```js
// .eslintrc.js
module.exports = {
  extends: '@lai9fox/eslint-config/vue-js',
  // 其他 eslint 配置
};
```

