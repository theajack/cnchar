
const path = require('path');
const alias = require('./bricks/alias');
const other = require('./bricks/other');
const rules = require('./bricks/rules');

module.exports = {
    mode: 'production',
    entry: path.resolve('./', 'public/test.ts'),
    output: {
        path: path.resolve('./', 'public'),
        filename: 'test.min.js',
        library: 'test',
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