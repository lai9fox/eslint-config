module.exports = {
  // 配置文件只寻找到根目录
  root: true,
  // 使用环境
  env: {
    node: true, // node环境
    browser: true, // 浏览器环境
    es2022: true, // 语言全局变量
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // 扩展
  extends: 'eslint:recommended',
  // 规则、覆盖
  rules: {
    //
    // 代码质量
    //
    // if、for、while 等语句块需要大括号
    curly: 'error',
    // 函数默认参数最后
    'default-param-last': 'error',
    // 强制全等比较
    eqeqeq: 'error',
    // getter、setter 同时存在时的顺序
    'grouped-accessor-pairs': ['warn', 'setBeforeGet'],
    // 声明时强制初始化
    'init-declarations': 'error',
    // 最大嵌套 3 层
    'max-depth': ['error', 3],
    // 不允许空块
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    // 不允许空函数
    'no-empty-function': 'error',
    // 不允许额外的分号
    'no-extra-semi': 'error',
    // 函数返回语句不允许赋值操作
    'no-return-assign': 'error',
    // 不允许 var 声明
    'no-var': 'error',
    // 未使用变量偏向于 const
    'prefer-const': 'warn',
    //
    // 代码风格
    //
    // 数组括号统一换行
    'array-bracket-newline': ['error', 'consistent'],
    // 数组元素统一换行
    'array-element-newline': ['error', 'consistent'],
    // => 前后统一空格
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    // , 前后空格
    'comma-spacing': 'error',
    // 要求文件最后一行是换行
    'eol-last': ['error', 'always'],
    // 不出现多余连续 2 行空行
    'no-multiple-empty-lines': 'error',
    // 不允许额外的空格
    'no-trailing-spaces': 'error',
    // { } 统一换行
    'object-curly-newline': ['error', { 'consistent': true }],
    // js 统一单引号
    quotes: ['error', 'single'],
    // 强制要求 ;
    semi: ['error', 'always'],
    // 模板字符串 {} 内强制空格
    'template-curly-spacing': ['error', 'always']
  },
};
