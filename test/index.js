// const cnchar = require('../packages/cnchar/cnchar.min.js');
// const order = require('../packages/cnchar-order/cnchar.order.min.js');
// const trad = require('../packages/cnchar-trad/cnchar.trad.min.js');
// const poly = require('../packages/cnchar-poly/cnchar.poly.min.js');
// const idiom = require('../packages/cnchar-idiom/cnchar.idiom.min.js');
// const xhy = require('../packages/cnchar-xhy/cnchar.xhy.min.js');
// const radical = require('../packages/cnchar-radical/cnchar.radical.min.js');
// const words = require('../packages/cnchar-words/cnchar.words.min.js');
// const explain = require('../packages/cnchar-explain/cnchar.explain.min.js');
// cnchar.use(order, trad, poly, idiom, xhy, radical, words, explain);
const cnchar = require('../packages/cnchar-all/cnchar.all.min.js');

console.log('****TEST NPM****');
console.log();

const config = require('./config');

const startTest = require('./runner');

startTest({
    config,
    args: cnchar
});