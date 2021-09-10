// craco.config.js
module.exports = {
  babel: {
    presets: [],
    plugins: [
      [
        "babel-plugin-import",
        {
          libraryName: "@material-ui/core",
          // Use "'libraryDirectory': ''," if your bundler does not support ES modules
          libraryDirectory: "esm",
          camel2DashComponentName: false,
        },
        "core",
      ],
      [
        "babel-plugin-import",
        {
          libraryName: "@material-ui/icons",
          // Use "'libraryDirectory': ''," if your bundler does not support ES modules
          libraryDirectory: "esm",
          camel2DashComponentName: false,
        },
        "icons",
      ],
    ],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
};
