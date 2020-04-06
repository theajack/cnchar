// powerd by hanzi-writer v2.2.2
const draw = require('./writer');
draw('你好', {
    type: 2
});

// function initStyle () {
//     let style = document.getElementById('cnchar-draw-style');
//     if (!style) {
//         style = document.createElement('style');
//         style.innerText(/* css*/`
//         .cc-draw-w{

//         }
//         .cc-d-not{
//             display: inline-block;
//             font-size: 70px;
//             line-height: 100px;
//             height: 100px;
//             width: 100px;
//             text-align: center;
//             vertical-align: top;
//             font-family: Microsoft Yahei;
//         }
//         .cc-draw-w`);
//     }
    
// }
// let _ = {};// 工具方法
// let arg = {
//     letter: 'letter', shape: 'shape', count: 'count', name: 'name', detail: 'detail', array: 'array', order: 'order' // array 只是为了兼容 .stroke()
// };

// function main (cnchar) {
//     if (cnchar.plugins.indexOf('order') !== -1) {
//         return;
//     }
//     cnchar.plugins.push('order');
//     let _old = cnchar._origin.stroke;
//     _ = cnchar._;
//     let _new = function (...args) {
//         if (_.has(args, arg.order)) { // 使用order
//             return _order(...args);
//         }
//         return _old(...args);
//     };
//     cnchar.stroke = _new;
//     String.prototype.stroke = function (...args) {
//         return _new(this, ...args);
//     };
//     cnchar.type.stroke = arg;
//     cnchar._.order = true;
//     if (cnchar._reinitStrokeOrder) {
//         cnchar._reinitStrokeOrder();
//         delete cnchar._reinitStrokeOrder;
//     }
//     initOrderToWord(cnchar);
// }

// function init (cnchar) {
//     if (typeof window === 'object' && window.CnChar) {
//         main(window.CnChar);
//     } else if (typeof cnchar !== 'undefined') {
//         main(cnchar);
//     }
// }

// function _draw (...args) {
//     let strs = args[0].split(''); // 待处理的字符串数组
//     args = args.splice(1);
//     _.checkArgs('stroke', args);
//     // 多音字参数参数将被忽略
//     let res = [];
//     for (var i = 0; i < strs.length; i++) {
//         res[i] = orders[strs[i]]; // 字母版笔画表
//     }
//     return orderWithLetters(res, strs, args);
// }

// init();

// module.exports = init;

