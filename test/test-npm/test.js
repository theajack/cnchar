// var cnchar = require('./cnchar/index');
// var poly = require('./poly/index');
// var order = require('./order/index');
// var trad = require('./trad/index');
// var idiom = require('./idiom/index');
// var xhy = require('./xhy/index');
// var radical = require('./radical/index');

var cnchar = require('../../npm/packages/cnchar/cnchar.min.js');
var poly = require('../../npm/packages/poly/cnchar.poly.min.js');
var order = require('../../npm/packages/order/cnchar.order.min.js');
var trad = require('../../npm/packages/trad/cnchar.trad.min.js');
var idiom = require('../../npm/packages/idiom/cnchar.idiom.min.js');
var xhy = require('../../npm/packages/xhy/cnchar.xhy.min.js');
var radical = require('../../npm/packages/radical/cnchar.radical.min.js');
console.log(cnchar.use);
// debugger;

cnchar.use(order, trad, poly, idiom, xhy, radical);
console.log(cnchar.stroke('一个', 'order'));
console.log(cnchar.stroke('長城', 'count', 'order', 'name'));
console.log(cnchar.orderToWord(['横', '撇', '捺']));
console.log('美好的地方'.spell('tone'));
console.log('长大了'.spell());
console.log('长大了'.spell('poly'));
console.log(cnchar.strokeToWord(25, 'simple'));
console.log(cnchar.idiom(['五', '', '十', '']));
console.log(cnchar.xhy('大水冲了龙王庙'));
console.log(cnchar.radical('你好呀'));
// module.exports = cnchar