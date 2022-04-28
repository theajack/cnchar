const version = require('../package.json').version;

const path = require('path');
const tool = require('../helper/tool');
const alias = require('./bricks/alias');
const other = require('./bricks/other');
const rules = require('./bricks/rules');

tool.write('./src/cnchar/main/version.ts', 'export default \'' + version + '\';');

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
    externals: other.externals,
    resolve: {
        extensions: other.extensions,
        alias,
    },
    module: {
        rules: [
            rules.ts,
            rules.js
        ]
    }
};