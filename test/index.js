let order, trad, poly, idiom, xhy, cnchar;

if (process.argv[2] === 'npm') {
    cnchar = require('../npm/cnchar');
    order = require('../npm/order');
    trad = require('../npm/trad');
    poly = require('../npm/poly');
    idiom = require('../npm/idiom');
    xhy = require('../npm/xhy');
    console.log('****TEST NPM****');
} else {
    cnchar = require('../src/main/index');
    order = require('../src/plugin/order');
    trad = require('../src/plugin/trad');
    poly = require('../src/plugin/poly');
    idiom = require('../src/plugin/idiom');
    xhy = require('../src/plugin/xhy');
    console.log('****TEST SRC****');
}
console.log();

cnchar.use(order, trad, poly, idiom, xhy);

let config = require('./test.config');

const startTest = require('./test');

startTest({
    config,
    args: cnchar
});