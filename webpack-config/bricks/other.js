/*
 * @Author: tackchen
 * @Date: 2022-04-10 19:59:23
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-10 19:59:23
 * @FilePath: /cnchar/webpack-config/bricks/other.js
 * @Description: Coding something
 */

module.exports = {
    extensions: [ '.tsx', '.ts', '.js' ],
    externals: {
        'https': 'commonjs https',
    },
};