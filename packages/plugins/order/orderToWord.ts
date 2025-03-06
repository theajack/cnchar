import {ICnChar, OrderToWordArg} from 'cnchar-types/main';
import {Json} from 'cnchar-types/main/common';
import {ICncharTool} from 'cnchar-types/main/tool';
import {orders, strokeTable} from './dict';
import {IBase, ICnCharOrder, IOrderToWord, OrderName, TOrderToWordArg} from 'cnchar-types/plugin/order';

const arg: TOrderToWordArg = {
    start: 'start',
    contain: 'contain',
    match: 'match',
    matchorder: 'matchorder',
    simple: 'simple',
    trad: 'trad',
    array: 'array'
};
let _: ICncharTool;// 工具方法

export default function initOrderToWord (cnchar: ICnChar & ICnCharOrder) {
    cnchar.orderToWord = orderToWord;
    cnchar.type.orderToWord = arg;
    _ = cnchar._;
}

export const orderToWord = ((
    input: string | Array<OrderName>,
    ...args: Array<OrderToWordArg>
): string | Array<string> => {
    if (typeof input === 'string') {
        input = input.split(' ') as Array<OrderName>;
    }
    _.checkArgs('orderToWord', args);
    const errorOrder: OrderName[] = [];
    let letters = '';
    input.forEach((name) => {
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
    const res: string[] = [];
    const argRes = {
        start: _.has(args, arg.start),
        match: _.has(args, arg.match),
        matchorder: _.has(args, arg.matchorder),
        contain: _.has(args, arg.contain),
        simple: _.has(args, arg.simple),
        trad: _.has(args, arg.trad),
        array: _.has(args, arg.array), // array 其实没有用到 为了ts约束加的
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
}) as unknown as IOrderToWord; ;


const base: IBase = (
    res: string[],
    letters: string,
    args: {[prop in OrderToWordArg]: boolean},
    dict: Json<string>
): string[] => {
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
            if (dict[k] === letters) {
                res.push(k);
            }
        }
    }
    return res;
};

function init (): void {
    orderToWord.orders = {};
    orderToWord._base = base;
    for (const k in strokeTable) {
        const single = strokeTable[k];
        // let name = single.name.split('(')[0]; // 有别名时 只取第一个
        const name = single.name; // 有别名时 只取第一个
        const shape = single.shape;
        // 2.0.8 修改 保留两个
        if (name.indexOf('|') !== -1) {
            const names: string[] = name.split('|');
            const shapes: string[] = shape.split('|');
            addToOrders(names[0], shapes[0], k, names[1]);
            addToOrders(names[1], shapes[1], k, names[0]);
        } else {
            addToOrders(name, shape, k);
        }
    }
}

function addToOrders (name: string, shape: string, letter: string, sameLetterTo?: string): void {
    const data = {shape, letter, sameLetterTo};
    if (!sameLetterTo) { delete data.sameLetterTo; }
    orderToWord.orders[name] = data;
}

init();