// const MyPlugin = require('./plugin/plugin1')
// const ErudaWebapckPlugin = require('eruda-webpack-plugin')
const path = require('path');
const alias = require('./bricks/alias');
const other = require('./bricks/other');
const rules = require('./bricks/rules');
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
    externals: other.externals,
    resolve: {
        extensions: other.extensions,
        alias: alias
    },
    module: {
        rules: [
            rules.ts,
            rules.js,
            rules.eslint,
        ]
    }
};