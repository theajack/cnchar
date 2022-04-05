const cnchar = require('../../npm/packages/cnchar');
const order = require('../../npm/packages/order');
const trad = require('../../npm/packages/trad');
const poly = require('../../npm/packages/poly');
const idiom = require('../../npm/packages/idiom');
const xhy = require('../../npm/packages/xhy');
const radical = require('../../npm/packages/radical');

console.log('****TEST NPM****');
console.log();

cnchar.use(order, trad, poly, idiom, xhy, radical);

const config = require('./test.config');

const startTest = require('./test');

startTest({
    config,
    args: cnchar
});