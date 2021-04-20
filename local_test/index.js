let order, trad, poly, idiom, xhy, radical, cnchar;

if (process.argv[2] === 'npm') {
    cnchar = require('../npm/packages/cnchar');
    order = require('../npm/packages/order');
    trad = require('../npm/packages/trad');
    poly = require('../npm/packages/poly');
    idiom = require('../npm/packages/idiom');
    xhy = require('../npm/packages/xhy');
    radical = require('../npm/packages/radical');
    console.log('****TEST NPM****');
} else {
    throw new Error('ts 暂不支持node test 请先build之后再测试');
    // cnchar = require('../src/cnchar/main/index');
    // order = require('../src/cnchar/plugin/order');
    // trad = require('../src/cnchar/plugin/trad');
    // poly = require('../src/cnchar/plugin/poly');
    // idiom = require('../src/cnchar/plugin/idiom');
    // xhy = require('../src/cnchar/plugin/xhy');
    // radical = require('../src/cnchar/plugin/radical');
    // console.log('****TEST SRC****');
}
console.log();

cnchar.use(order, trad, poly, idiom, xhy, radical);

const config = require('./test.config');

const startTest = require('./test');

startTest({
    config,
    args: cnchar
});