
// const cnchar = require("../packages/cnchar-all/cnchar.all.min.js");
const cnchar = require('../packages/cnchar/cnchar.min.js');
const order = require('../packages/cnchar-order/cnchar.order.min.js');
const trad = require('../packages/cnchar-trad/cnchar.trad.min.js');
const poly = require('../packages/cnchar-poly/cnchar.poly.min.js');
const idiom = require('../packages/cnchar-idiom/cnchar.idiom.min.js');
const xhy = require('../packages/cnchar-xhy/cnchar.xhy.min.js');
const radical = require('../packages/cnchar-radical/cnchar.radical.min.js');

cnchar.use(order, trad, poly, idiom, xhy, radical);

console.log(cnchar);
console.log(cnchar.stroke('一个', 'order'));
console.log(cnchar.stroke('長城', 'count', 'order', 'name'));
// console.log(cnchar.orderToWord(['横', '撇', '捺']));
// console.log(cnchar.orderToWord(['横', '撇', '捺'], 'start'));
console.log(cnchar.spellToWord('lv2'));
console.log(cnchar.spellInfo('lǘ'));
console.log(cnchar.strokeToWord(1));
console.log('美好的地方'.spell('tone'));