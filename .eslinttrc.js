module.exports = {
  root: true, // 当前项目使用这个配置文件, 不会往父级目录找.eslintrc.js文件
  semi: true,
  // 使用单引号代替双引号
  singleQuote: false,
  parser: "vue-eslint-parser",
  env: {
    // 指定eslint启动环境(vuecli底层是node支持), browser: true也可以在浏览器设置
    node: true,
  },
  extends: [
    // 扩展配置
    "prettier",
    "plugin:vue/essential", // vue里必须的规则
    "@vue/standard", // 使eslint继承@vue/cli脚手架里的 - standard标准
  ],
  parserOptions: {
    // 对新语法使用eslint
    // parser: 'babel-eslint' // 使用babel-eslint 来解析新语法ES6
    parser: "@typescript-eslint/parser",
  },
  // 这里可以进行自定义规则配置
  // key：规则代号
  // value：具体的限定方式
  //   "off" or 0 - 关闭规则
  //   "warn" or 1 - 将规则视为一个警告（不会影响退出码）,只警告，不会退出程序
  //   "error" or 2 - 将规则视为一个错误 (退出码为1)，报错并退出程序
};
