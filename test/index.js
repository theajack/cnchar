const cnchar = require('../src/main/index');
const order = require('../src/plugin/order');
const trad = require('../src/plugin/trad');
const poly = require('../src/plugin/poly');
const idiom = require('../src/plugin/idiom');
const xhy = require('../src/plugin/xhy');
cnchar.use(order, trad, poly, idiom, xhy);

let config = require('./test.config');

const startTest = require('./test');

startTest({
    config,
    args: cnchar
});