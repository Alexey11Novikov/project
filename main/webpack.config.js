const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = (env) => {
  return {
    mode: env.mode,
    entry: "/index.js",
    output: {
      path: path.resolve(__dirname, "../app"),
      filename: "bundle.js",
      //publicPath: '/app/'
    },
    externals: [{
      react: 'React',
        "react-router-dom": "ReactRouterDOM",
        'react-dom' : 'ReactDOM',
        'axios': 'axios',
      },
  ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react'],
              plugins: [
                '@babel/transform-runtime'
              ]
            }
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    // plugins: [
    //   new CopyPlugin({
    //     patterns: [
    //       { from: "src/css", to: "css" },
    //     ],
    //   }),
    // ],
  }
};
