const path = require("path");

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = {
  /*/!* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath *!/
  /!* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' *!/
  publicPath: process.env.NODE_ENV === "production" ? "/public/" : "./",
  /!* 输出文件目录：在npm run build时，生成文件的目录名称 *!/
  outputDir: "dist",
  /!* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 *!/
  assetsDir: "assets",
  /!* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 *!/
  productionSourceMap: false,
  /!* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) *!/
  filenameHashing: false,
  /!* 代码保存时进行eslint检测 *!/
  lintOnSave: true,
  /!* webpack-dev-server 相关配置 *!/*/
  configureWebpack: {
    plugins: [
      // element-ui Import on demand
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // 别名配置
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        src: "@", // 默认已配置
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        api: "@/api",
        views: "@/views",
        plugins: "@/plugins",
        utils: "@/utils",
      },
    },
    // 使用前面可加~
  },
  devServer: {
    port: 9091,
    // host: "192.168.31.1",
    proxy: {
      "/api": {
        // target: "http://localhost:3000/",
        target: " http://localhost:6610/",
        changeOrigin: true, //是否开启跨域  是否更改源路径
        // ws: true,
        pathRewrite: {
          "^/api": "", // /api/ / 凡是/api开头的地址都可以跨域
        },
      },
    },
    /*/!* 自动打开浏览器 *!/
    open: true,
    /!* 设置为0.0.0.0则所有的地址均能访问 *!/
    host: "0.0.0.0",
    port: 8066,
    https: false,
    hotOnly: false,
    /!* 使用代理 *!/
    proxy: {
      "/api": {
        /!* 目标代理服务器地址 *!/
        target: "http://47.100.47.3/",
        /!* 允许跨域 *!/
        changeOrigin: true,
      },
    },*/
  },
};
