
let version = require('../package.json').version;
let path = require('path');

module.exports = (env) => {
    let plugin = env.pluginname;
    return {
        entry: path.resolve('./', 'src/plugin/' + plugin + '/index.js'),
        output: {
            path: path.resolve('./', 'dist'),
            filename: 'cnchar.' + plugin + '.' + version + '.min.js'
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
};