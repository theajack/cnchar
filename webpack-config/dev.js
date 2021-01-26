// const MyPlugin = require('./plugin/plugin1')
// const ErudaWebapckPlugin = require('eruda-webpack-plugin')
const path = require('path');
module.exports = {
    entry: path.resolve('./', 'public/index.ts'),
    output: {
        path: path.resolve('./', 'public'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve('./', 'public'),
        historyApiFallback: true,
        inline: true,
        host: 'localhost', // '0.0.0.0' //
        proxy: {
            '/api': {
                target: 'https://shiyix.cn/',
                // pathRewrite: {'^/remote': ''},
                changeOrigin: true,
                secure: false
            }
        }
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [{
            test: /(.ts)$/,
            use: {
                loader: 'ts-loader'
            }
        }, {
            test: /(.js)$/,
            use: [{
                loader: 'babel-loader',
            }]
        }, {
            test: /(.js)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            exclude: /node_modules/,
            options: {
                configFile: './.eslintrc.js'
            }
        }]
    }
};