import {ICnChar, StrokeArg} from 'cnchar-types/main';
import {ICncharTool} from 'cnchar-types/main/tool';
import {orders, strokeTable} from './dict';
import initOrderToWord from './orderToWord';
import {ICnCharOrder, TOrderArg, TStrokeOrderReturn} from 'cnchar-types/plugin/order';
import {IPlugin} from 'cnchar-types/main/common';

let _: ICncharTool; // 工具方法

const arg: TOrderArg = {
    letter: 'letter',
    shape: 'shape',
    count: 'count',
    name: 'name',
    detail: 'detail',
    array: 'array', // array 只是为了兼容 .stroke()
    order: 'order',
};

function setOrder (key: string | {[key: string]: string}, value?: string): void {
    _.mapJson(key, value, (k, v) => {
        orders[k] = v;
    });
}

function _order (str: string, ...args: Array<StrokeArg>): TStrokeOrderReturn[] {
    const strs = str.split(''); // 待处理的字符串数组
    _.checkArgs('stroke', args);
    // 多音字参数参数将被忽略
    const res = [];
    for (var i = 0; i < strs.length; i++) {
        res[i] = orders[strs[i]]; // 字母版笔画表
    }
    return orderWithLetters(res, strs, args);
}
// res:字母版笔画数组
function orderWithLetters (
    res: TStrokeOrderReturn[],
    strs: string[],
    args: Array<StrokeArg>,
    igList: number[] = []
): TStrokeOrderReturn[]  {
    igList = igList || [];
    if (_.has(args, arg.letter)) {
        return res;
    }
    for (var i = 0; i < res.length; i++) {
        if (igList.indexOf(i) === -1 && typeof res[i] === 'string') {
            res[i] = getStrokeSingle(strs[i], res[i] as string, args);
        }
    }
    return res;
}
// bug CnChar.stroke('長城','order','count')
function getStrokeSingle (
    str: string,
    order: string,
    args: Array<StrokeArg>,
): TStrokeOrderReturn {
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

function install (cnchar: ICnChar & ICnCharOrder): void {
    const _old = cnchar._origin.stroke;
    _ = cnchar._;
    
    cnchar.setOrder = setOrder;
    const _new = function (sentence: string, ...args: Array<StrokeArg>): number | Array<any> {
        if (_.has(args, arg.order)) { // 使用order
            return _order(sentence, ...args);
        }
        return _old(sentence, ...args);
    };
    cnchar.stroke = _new;
    String.prototype.stroke = function (...args: Array<StrokeArg>): number | Array<any> {
        return _new(this as string, ...args);
    };
    cnchar._.order = true;
    cnchar.type.stroke = arg;
    cnchar._.orderWithLetters = orderWithLetters;
    if (cnchar._._reinitStrokeOrder) {
        cnchar._._reinitStrokeOrder();
        delete cnchar._._reinitStrokeOrder;
    }
    initOrderToWord(cnchar);
}

const plugin: IPlugin = {
    pluginName: 'order',
    install: install,
};

if (typeof window === 'object' && window.CnChar) {
    window.CnChar.use(plugin);
}

export default plugin;