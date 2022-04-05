const cnchar = require('../../npm/packages/cnchar/cnchar.min');
const order = require('../../npm/packages/order/cnchar.order.min');
const trad = require('../../npm/packages/trad/cnchar.trad.min');
const poly = require('../../npm/packages/poly/cnchar.poly.min');
const idiom = require('../../npm/packages/idiom/cnchar.idiom.min');
const xhy = require('../../npm/packages/xhy/cnchar.xhy.min');
const radical = require('../../npm/packages/radical/cnchar.radical.min');

console.log('****TEST NPM****');
console.log();

cnchar.use(order, trad, poly, idiom, xhy, radical);

const config = require('./test.config');

const startTest = require('./test');

startTest({
    config,
    args: cnchar
});