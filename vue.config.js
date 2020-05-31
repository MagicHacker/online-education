// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const debug = process.env.Node_ENV !== "production";
module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    hotOnly: true
  },
  configureWebpack: config => {
    // 配置sourcemap
    if (debug) {
      config.devtool = "eval-source-map";
    }
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .exclude.add(resolve("./src/icons"))
      .end();
    config.module
      .rule("icon")
      .test(/\.svg$/)
      .include.add(resolve("./src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .options({
        externalConfig: "svgo-config.yml"
      });
  }
};
