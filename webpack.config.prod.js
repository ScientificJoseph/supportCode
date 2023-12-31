const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map',
  devServer: {
    static: { 
        directory: path.resolve(__dirname, './'),
        // publicPath: 'assets/scripts/'
    },
    devMiddleware:{
        writeToDisk: true
    }
},
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                  '@babel/preset-env', {useBuiltIns: 'usage', corejs: {version: 3.32 }}
              ]
          ]
          }
        }
      }
    ]
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
