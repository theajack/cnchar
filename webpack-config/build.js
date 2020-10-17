let version = require('../package.json').version;

let path = require('path');
let tool = require('../helper/tool');
tool.write('./src/main/version.js', 'module.exports = \'' + version + '\';');

// module.exports = {
//     entry: path.resolve('./', 'src/main/index.js'),
//     output: {
//         path: path.resolve('./', 'dist'),
//         filename: 'cnchar.' + version + '.min.js'
//     },
//     module: {
//         rules: [{
//             test: /(.js)$/,
//             use: [{
//                 loader: 'babel-loader',
//             }]
//         }]
//     }
// };

module.exports = {
    mode: 'production',
    entry: path.resolve('./', 'src/main/index.js'),
    output: {
        path: path.resolve('./', 'npm/cnchar'),
        filename: 'cnchar.min.js',
        library: 'cnchar',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    externals: {
        cnchar: 'cnchar'
    },
    module: {
        rules: [{
            test: /(.js)$/,
            use: [{
                loader: 'babel-loader',
            }]
        }]
    }
};