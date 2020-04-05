const cnchar = require('../src/main/index');
const order = require('../src/plugin/order');
const trad = require('../src/plugin/trad');
const poly = require('../src/plugin/poly');
cnchar.use(order, trad, poly);

let config = require('./test.config');

const startTest = require('./test');

startTest({
    config,
    args: cnchar
});