import cnchar from '../src/main/index';
import '../src/plugin/order';
import '../src/plugin/trad';
import '../src/plugin/poly';
import '../src/plugin/idiom';

import spell from '../src/main/spell-dict-jian.json';
// import cncharDraw from '../src/plugin/draw';

// import cnchar from '../npm/cnchar';
// import '../npm/order';
// import '../npm/trad';
// import '../npm/poly';
// import cncharDraw from '../npm/draw';

// import './plugin/draw'
// console.log('1',cnchar)
console.log(cnchar.stroke('一个', 'order'));
console.log(cnchar.stroke('長城', 'count', 'order', 'name'));
// console.log(cnchar.orderToWord(['横', '撇', '捺']));
// console.log(cnchar.orderToWord(['横', '撇', '捺'], 'start'));
console.log(cnchar.spellToWord('lv2'));
console.log(cnchar.spellInfo('lǘ'));
console.log(cnchar.strokeToWord(1));
console.log('美好的地方'.spell('tone'));

window.keys = Object.keys(spell);

// cncharDraw('你好', {
//     type: cncharDraw.TYPE.NORMAL,
//     el: '#drawArea',
//     style: {
//         radicalColor: '#44f',
//         backgroundColor: '#ccc'
//     },
//     animation: {
//         animateComplete () {
//             console.log('animateComplete');
//         },
//         loopAnimate: true,
//         autoAnimate: false, // false 时点击出发animate 只能触发一次
//         // stepByStep: false
//     },
//     test: {
//         onTestStatus (d) {
//             console.log(d);
//         }
//     }
// });
// cncharDraw('你好', {
//     type: cncharDraw.TYPE.STROKE,
//     style: {
//         radicalColor: '#44f',
//         backgroundColor: '#eee'
//     },
// });

export default cnchar;

// var cnchar = require('./main/index')
// var order = require('./plugin/order')
// var trad = require('./plugin/trad')
// var poly = require('./plugin/poly')
// cnchar.use(order,trad,poly)
// console.log(cnchar.stroke("一个",'order'))
// console.log(cnchar.stroke('長城','count','order','name'))
// module.exports = cnchar

// import b from './b'
// // var b = require('./b')
// console.log(b);