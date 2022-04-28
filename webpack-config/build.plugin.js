
// let version = require('../package.json').version;
const path = require('path');
const alias = require('./bricks/alias');
const other = require('./bricks/other');
const rules = require('./bricks/rules');

// module.exports = (env) => {
//     let plugin = env.pluginname;
//     return {
//         entry: path.resolve('./', 'src/plugin/' + plugin + '/index.js'),
//         output: {
//             path: path.resolve('./', 'dist'),
//             filename: 'cnchar.' + plugin + '.' + version + '.min.js'
//         },
//         module: {
//             rules: [{
//                 test: /(.js)$/,
//                 use: [{
//                     loader: 'babel-loader',
//                 }]
//             }]
//         }
//     };
// };
module.exports = (env) => {
    const plugin = env.pluginname;
    let dir = `plugin/${plugin}`;
    let npmDir = plugin;
    if (plugin === 'all') {
        dir = 'alias/cnchar-all';
        npmDir = 'cnchar-all';
    }
    return {
        mode: 'production',
        entry: path.resolve('./', `src/cnchar/${dir}/index.ts`),
        output: {
            path: path.resolve('./', 'npm/packages/' + npmDir),
            filename: 'cnchar.' + plugin + '.min.js',
            library: 'cnchar' + plugin[0].toUpperCase() + plugin.substr(1),
            // umdNamedDefine: true,
            libraryTarget: 'umd',
            globalObject: 'this',
            libraryExport: 'default',
        },
        externals: other.externals,
        resolve: {
            extensions: other.extensions,
            alias
        },
        module: {
            rules: [
                rules.ts,
                rules.js
            ]
        }
    };
};