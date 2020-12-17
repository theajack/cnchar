const version = require('../package.json').version;

const path = require('path');
const tool = require('../helper/tool');
tool.write('./src/cnchar/main/version.ts', 'export default \'' + version + '\';');

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
    entry: path.resolve('./', 'src/cnchar/main/index.ts'),
    output: {
        path: path.resolve('./', 'npm/packages/cnchar'),
        filename: 'cnchar.min.js',
        library: 'cnchar',
        libraryTarget: 'umd',
        globalObject: 'this',
        libraryExport: 'default',
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    externals: {
        cnchar: 'cnchar'
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
        }]
    }
};