// var cnchar = require('./all/index');
var cnchar = require('../../npm/packages/all/cnchar.all.min.js');

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