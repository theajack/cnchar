const orders = require('./stroke-order-jian.json');
const strokeTable = require('./stroke-table.json');

const arg = {start: 'start', contain: 'contain', match: 'match', matchorder: 'matchorder', simple: 'simple', trad: 'trad', array: 'array'};
let _ = {};// 工具方法

function initOrderToWord (cnchar) {
    cnchar.orderToWord = orderToWord;
    cnchar.type.orderToWord = arg;
    _ = cnchar._;
}

function orderToWord (...args) {
    let orderArr = args[0];
    args = args.splice(1);
    if (typeof orderArr === 'string') {
        orderArr = orderArr.split(' ');
    } else if (!orderArr instanceof Array) {
        throw new Error('orderToWord: 输入必须是笔画名数组或空格分隔的字符串');
    }
    _.checkArgs('orderToWord', args);
    const errorOrder = [];
    let letters = '';
    orderArr.forEach((name) => {
        if (orderToWord.orders[name]) {
            letters += orderToWord.orders[name].letter;
        } else {
            errorOrder.push(name);
        }
    });
    if (errorOrder.length > 0) {
        console.error('orderToWord: 参数笔画名数组有误：' + errorOrder.join(','));
        return [];
    }
    const res = [];
    const argRes = {
        start: _.has(args, arg.start),
        match: _.has(args, arg.match),
        matchorder: _.has(args, arg.matchorder),
        contain: _.has(args, arg.contain),
        simple: _.has(args, arg.simple),
        trad: _.has(args, arg.trad),
    };
    if (!argRes.simple && !argRes.trad) {
        argRes.simple = argRes.trad = true;
    }
    if (argRes.simple) {
        base(res, letters, argRes, orders); // 简体
    }
    if (argRes.trad && _.dict.getTradOrders) {
        base(res, letters, argRes, _.dict.getTradOrders()); // 繁体
    }
    if (_.has(args, arg.array)) {
        return res;
    }
    return res.join('');
}


function base (res, letters, args, dict) {
    // 写多个for循环减少if判断
    if (args.match) { // match 表示只要包含笔画就输出
        for (const k in dict) {
            let notcontain = false;
            for (let i = 0; i < letters.length; i++) {
                if (dict[k].indexOf(letters[i]) === -1) {
                    notcontain = true;
                    break;
                }
            }
            if (!notcontain) {
                res.push(k);
            }
        }
    } else if (args.matchorder) { // matchorder 表示不仅包含所有笔画 而且笔画是按顺序的
        for (const k in dict) {
            let notcontain = false;
            let orders = dict[k];
            for (let i = 0; i < letters.length; i++) {
                const index = orders.indexOf(letters[i]);
                if (index === -1) {
                    notcontain = true;
                    break;
                } else {
                    orders = orders.substr(index + 1);
                }
            }
            if (!notcontain) {
                res.push(k);
            }
        }
    } else if (args.contain) { // contain 包含笔画顺序壁画顺序开头
        for (const k in dict) {
            if (dict[k].indexOf(letters) !== -1) {
                res.push(k);
            }
        }
    } else if (args.start) { // start 表示匹配所有以壁画顺序开头的汉字
        for (const k in dict) {
            if (dict[k].indexOf(letters) === 0) {
                res.push(k);
            }
        }
    } else { // 默认是严格匹配笔画序序列
        for (const k in dict) {
            if (dict[k].length > letters.length) {
                break;
            }
            if (dict[k] === letters) {
                res.push(k);
            }
        }
    }
    return res;
}

function init () {
    orderToWord.orders = {};
    orderToWord._base = base;
    for (const k in strokeTable) {
        const single = strokeTable[k];
        // let name = single.name.split('(')[0]; // 有别名时 只取第一个
        const name = single.name; // 有别名时 只取第一个
        const shape = single.shape;
        // 2.0.8 修改 保留两个
        if (name.indexOf('|') !== -1) {
            const names = name.split('|');
            const shapes = shape.split('|');
            addToOrders(names[0], shapes[0], k, names[1]);
            addToOrders(names[1], shapes[1], k, names[0]);
        } else {
            addToOrders(name, shape, k);
        }
    }
}

function addToOrders (name, shape, letter, sameLetterTo) {
    const data = {shape, letter};
    if (sameLetterTo) { data.sameLetterTo = sameLetterTo; }
    orderToWord.orders[name] = data;
}

init();
module.exports = initOrderToWord;