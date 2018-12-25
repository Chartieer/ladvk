const path = require("path");

module.exports = {
  module: {
    rules: [
      // {
      //   test: /base.scss$/,
      //   include: path.resolve(__dirname, "../"),
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].css',
      //         outputPath: './public/'
      //       }
      //     },
      //     {
      //       loader: 'extract-loader'
      //     },
      //     {
      //       loader: 'css-loader'
      //     },
      //     {

      //     {
      //       loader: 'sass-loader'
      //     }
      //   ]
      // },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.svg$/,
        loader: "react-svg-loader"
      }
    ]
  }
};
