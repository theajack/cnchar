// import cnchar from '../src/main/index';

import cnchar from '../src/cnchar/main';
import '../src/cnchar/plugin/order';
import '../src/cnchar/plugin/trad';
import '../src/cnchar/plugin/poly';
import '../src/cnchar/plugin/draw';
import '../src/cnchar/plugin/xhy';
import '../src/cnchar/plugin/radical';
import '../src/cnchar/plugin/words';
import '../src/cnchar/plugin/idiom';
import '../src/cnchar/plugin/voice';
import '../src/cnchar/plugin/explain';
import '../src/cnchar/plugin/random';
import '../src/cnchar/plugin/code';
import '../src/cnchar/plugin/info';
import '../src/cnchar/plugin/input';
import '../src/cnchar/plugin/name';
import custom from './custom-plugin';
cnchar.use(custom);


// import spell from '../src/main/spell-dict-jian.json';
// // import cncharDraw from '../src/plugin/draw';

// import cnchar from '../npm/cnchar';
// import '../npm/order';
// import '../npm/trad';
// import '../npm/poly';
// import '../npm/draw';
// import '../npm/idiom';
// import '../npm/xhy';
// import '../npm/radical';

// import cnchar from '../npm/cnchar/cnchar.min.js';
// import '../npm/order/cnchar.order.min.js';
// import '../npm/trad/cnchar.trad.min.js';
// import '../npm/poly/cnchar.poly.min.js';
// import '../npm/draw/cnchar.draw.min.js';
// import '../npm/idiom/cnchar.idiom.min.js';
// import '../npm/xhy/cnchar.xhy.min.js';
// import '../npm/radical/cnchar.radical.min.js';
// import initComment from 'tc-comment';
// initComment({
//     el: '#comment'
// });
const win = window as any;

console.log(cnchar);

console.log(cnchar.orderToWord(['横', '撇', '捺'], 'array'));
console.log(cnchar.orderToWord(['横', '撇', '捺'], 'start'));
console.log(cnchar.orderToWord(['横', '撇', '捺'], 'start', 'simple'));
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
// 根据汉字查询成语，末尾的空格可以省略
console.log(cnchar.idiom(['五', '', '十', ''])); // ['五风十雨', '五光十色']
// 根据笔画数查询成语，0表示匹配任意笔画，末尾的0可以省略
console.log(cnchar.idiom([4, 6, 2, 0])); // ["不当人子", ... ]


console.log('一个人'.convertSimpleToTrad()); // 返回 "壹個人" 等价于 cnchar.convert.simpleToTrad
console.log(cnchar.convert.simpleToTrad('一个人'));

console.log('一个人'.convertSimpleToSpark()); // 返回 "①个亾" 等价于 cnchar.convert.simpleToSpark
console.log(cnchar.convert.simpleToSpark('一个人'));

console.log('壹個人'.convertTradToSimple()); // 返回 "一个人" 等价于 cnchar.convert.tradToSimple
console.log(cnchar.convert.tradToSimple('壹個人'));

console.log('壹個人'.convertTradToSpark()); // 返回 "①个亾" 等价于 cnchar.convert.tradToSpark
console.log(cnchar.convert.tradToSpark('壹個人'));

console.log('①个亾'.convertSparkToSimple()); // 返回 "一个人" 等价于 cnchar.convert.sparkToSimple
console.log(cnchar.convert.sparkToSimple('①个亾'));

console.log('①个亾'.convertSparkToTrad()); // 返回 "壹個人" 等价于 cnchar.convert.sparkToTrad
console.log(cnchar.convert.sparkToTrad('①个亾'));

cnchar.xhy.addXhy('歇后语第一句', '歇后语第二句');
console.log(cnchar.xhy('歇后语第一句'));
console.log(cnchar.xhy('大水冲了龙王庙')); // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人']
console.log(cnchar.xhy('大水', 'fuzzy')); // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
console.log(cnchar.xhy('大水', 'fuzzy', 'answer')); // ['泥沙俱下', '后浪推前浪', ... ]
console.log(cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second')); // ['醉汉过铁索桥', '扶着醉汉过破桥']


// cnchar.radical.setRadical('你', '口');
// console.log(cnchar.radical('你好呀')); // "亻女口"
// // 返回数组
// console.log(cnchar.radical('你好呀', 'array')); // ["亻", "女", "口"]
// window.keys = Object.keys(spell);
cnchar.draw('你好九', {});
cnchar.draw('你好九', {
    type: cnchar.draw.TYPE.STROKE,
    el: '#drawArea',
    style: {
        radicalColor: '#44f',
        backgroundColor: '#ccc'
    },
    animation: {
        animateComplete () {
            console.log('animateComplete');
        },
        loopAnimate: true,
        autoAnimate: false, // false 时点击出发animate 只能触发一次
        // stepByStep: false
    },
    test: {
        onTestStatus (d: any) {
            console.log(d);
        }
    }
});
cnchar.draw('中国', {
    type: cnchar.draw.TYPE.TEST,
    style: {
        radicalColor: '#44f',
        backgroundColor: '#eee',
        length: 100,
                
    },
});

cnchar.draw.onWordNotFound((word) => {
    console.log('word not found', word);
});

win.draw = cnchar.draw('你好九庳䭹', {
    type: cnchar.draw.TYPE.ANIMATION,
    style: {
        radicalColor: '#44f',
        backgroundColor: '#ccc'
    },
    animation: {
        animateComplete () {
            console.log('animateComplete');
        },
        loopAnimate: true,
        autoAnimate: false, // false 时点击出发animate 只能触发一次
        // stepByStep: false
    },
    test: {
        onTestStatus (d: any) {
            console.log(d);
        }
    }
});

// cnchar.draw('你好', {
//     type: cnchar.draw.TYPE.ANIMATION,
//     style: {
//         radicalColor: '#44f',
//         backgroundColor: '#eee',
//         length: 120,
            
//     },
// });

win.cnchar = cnchar;

(() => {
    const div = document.createElement('div');
    const input = document.createElement('input');

    const speak = document.createElement('button');
    speak.innerText = 'speak';
    speak.addEventListener('click', () => {
        cnchar.voice.speak(input.value);
    });

    const regognize = document.createElement('button');
    regognize.innerText = 'regognize';
    regognize.addEventListener('click', () => {
        cnchar.voice.recognize({
            onend (s) {
                input.value = s;
            }
        });
    });

    document.body.appendChild(div);

    div.appendChild(input);
    div.appendChild(speak);
    div.appendChild(regognize);
})();

// cnchar;
win.player = cnchar.voice('你好小朋友', {
    loop: true,
    autoStart: false,
    onSingleComplete (d) {console.log('onSingleComplete', d);},
    onComplete (d) {console.log('onComplete', d);},
    onAudioLoaded (d) {console.log('onAudioLoaded', d);},
});

console.log(cnchar.words('香蕉'));

cnchar.explain('你好').then(data => {
    console.log(data);
});
    
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