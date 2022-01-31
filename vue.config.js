const webpack = require("webpack")
module.exports = {
  publicPath: "/",
  devServer: {
    host: "localhost",
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/utilities/index.scss";`,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/i,
          oneOf: [
            {
              resourceQuery: /raw/,
              use: {
                loader: "raw-loader",
                options: { esModule: false },
              },
            },
            {
              use: {
                loader: "file-loader",
                options: { esModule: false },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
        //filenameHashing: false
      }),
    ],
  },
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks")

    config.module.rules.delete("svg")

    if (process.env.NODE_ENV === "development") {
      config.output.filename("[name].[hash].js").end()
    }
  },
}
