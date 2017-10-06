const path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = options => {
  return {
    entry: './src/js/index.js',

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 8000,
      compress: true,
    },

    output: {
      path: path.join(__dirname, 'public'),
      filename: './bundle.js',
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.js$|\.jsx$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },

        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          }),
        },

        {
          test: /\.(jpg|jpeg|png|gif)$/,
          loader: 'file-loader?name=imgs/[name].[ext]',
        },

        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=fonts/[name].[ext]',
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
    ],
  };
};
