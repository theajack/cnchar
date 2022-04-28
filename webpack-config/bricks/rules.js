/*
 * @Author: tackchen
 * @Date: 2022-04-10 19:58:23
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-10 20:04:23
 * @FilePath: /cnchar/webpack-config/bricks/rules.js
 * @Description: Coding something
 */

module.exports = {
    ts: {
        test: /(.ts)$/,
        use: {
            loader: 'ts-loader'
        }
    },
    js: {
        test: /(.js)$/,
        use: [{
            loader: 'babel-loader',
        }]
    },
    eslint: {
        test: /(.js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
            configFile: './.eslintrc.js'
        }
    }
};