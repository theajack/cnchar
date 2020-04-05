var orders = require('./stroke-order-jian.json');
var strokeTable = require('./stroke-table.json');
var initOrderToWord = require('./orderToWord.js');

let _ = {};// 工具方法
let arg = {
    letter: 'letter', shape: 'shape', count: 'count', name: 'name', detail: 'detail', array: 'array', order: 'order' // array 只是为了兼容 .stroke()
};

function main (cnchar) {
    if (cnchar.plugins.indexOf('order') !== -1) {
        return;
    }
    cnchar.plugins.push('order');
    let _old = cnchar._origin.stroke;
    _ = cnchar._;
    let _new = function (...args) {
        if (_.has(args, arg.order)) { // 使用order
            return _order(...args);
        }
        return _old(...args);
    };
    cnchar.stroke = _new;
    String.prototype.stroke = function (...args) {
        return _new(this, ...args);
    };
    cnchar.type.stroke = arg;
    cnchar._.order = true;
    cnchar._.orderWithLetters = orderWithLetters;
    if (cnchar._reinitStrokeOrder) {
        cnchar._reinitStrokeOrder();
        delete cnchar._reinitStrokeOrder;
    }
    initOrderToWord(cnchar);
}

function init (cnchar) {
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
    }
}

function _order (...args) {
    let strs = args[0].split(''); // 待处理的字符串数组
    args = args.splice(1);
    _.checkArgs('stroke', args);
    // 多音字参数参数将被忽略
    let res = [];
    for (var i = 0; i < strs.length; i++) {
        res[i] = orders[strs[i]]; // 字母版笔画表
    }
    return orderWithLetters(res, strs, args);
}
// res:字母版笔画数组
function orderWithLetters (res, strs, args, igList) {
    igList = igList || [];
    if (_.has(args, arg.letter)) {
        return res;
    }
    for (var i = 0; i < res.length; i++) {
        if (igList.indexOf(i) === -1 && typeof res[i] === 'string') {
            res[i] = getStrokeSingle(strs[i], res[i], args);
        }
    }
    return res;
}
// bug CnChar.stroke('長城','order','count')
function getStrokeSingle (str, order, args) {
    if (typeof order === 'undefined') {
        return str;
    }
    var isDetail = _.has(args, arg.detail);
    let name = arg.letter;
    if (!isDetail) {
        if (_.has(args, arg.shape)) {
            name = arg.shape;
        } else if (_.has(args, arg.name)) {
            name = arg.name;
        } else if (_.has(args, arg.count)) {
            name = arg.count;
        }
    } else {
        name = arg.detail;
    }
    if (name === arg.count) {
        return order.length;
    }
    if (name === arg.letter) {
        return order;
    }
    var arr = [];
    for (var i = 0; i < order.length; i++) {
        if (isDetail) {
            arr[i] = strokeTable[order[i]];
        } else {
            arr[i] = strokeTable[order[i]][name];
        }
    }
    return arr;
}

init();

module.exports = init;