const path = require('path')
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',     // set mode option, 'development' or 'production'
    // context: __dirname + '/src', // Adds a context explicitly
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devServer: {
        static: { 
            directory: path.resolve(__dirname, './'),
            // publicPath: 'assets/scripts/'
        },
        devMiddleware:{
            writeToDisk: true
        }
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
}