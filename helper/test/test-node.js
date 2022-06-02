
// const cnchar = require("../../npm/packages/cnchar-all/cnchar.all.min.js");
const cnchar = require('../../npm/packages/cnchar/cnchar.min.js');
const order = require('../../npm/packages/order/cnchar.order.min.js');
const trad = require('../../npm/packages/trad/cnchar.trad.min.js');
const poly = require('../../npm/packages/poly/cnchar.poly.min.js');
const idiom = require('../../npm/packages/idiom/cnchar.idiom.min.js');
const xhy = require('../../npm/packages/xhy/cnchar.xhy.min.js');
const radical = require('../../npm/packages/radical/cnchar.radical.min.js');

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