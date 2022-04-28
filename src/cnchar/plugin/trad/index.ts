import {countDict, orderDict} from './dict';
import {converter} from './converter';
import {IConverter, ITradModArg, ITradString} from 'cnchar-types/plugin/trad';
import {ICnChar, SpellArg, StrokeArg} from 'cnchar-types/main';
import {ICncharTool} from 'cnchar-types/main/tool';
import {ISpell} from 'cnchar-types/main/index';
import {IPlugin} from 'cnchar-types/main/common';

// 简-繁 一对多
// https://blog.csdn.net/e15273/article/details/79954700

const arg: ITradModArg = {
    trad: 'trad', simple: 'simple', array: 'array', order: 'order' // 开启简单模式
};
let _: ICncharTool;// 工具方法

function reinitSpell (proto: String, cnchar: ICnChar): void {
    let _spell = cnchar.spell;
    const newSpell: ISpell = function (str: string, ...args: Array<SpellArg>): string | Array<any> {
        if (_.has(args, arg.simple)) {
            return _spell(str, ...args);
        }
        if (_.has(args, arg.trad)) {
            const isArr = _.has(args, arg.array);
            if (!isArr) {args.push(arg.array);}// 先使用array模式
            const simpleStr = converter.tradToSimple(str);
            const simples = [];
            let newStr = ''; // 提取出繁体字的简体
            for (let i = 0; i < simpleStr.length; i++) {
                if (simpleStr[i] !== str[i]) {
                    newStr += simpleStr[i];
                } else {
                    simples.push({index: i, str: str[i]});
                }
            }
            const res = _spell(newStr, ...args) as Array<string>;
            for (let i = 0; i < simples.length; i++) {
                res.splice(simples[i].index, 0, simples[i].str);
            }
            return (isArr) ? res : res.join('');
        }
        str = converter.tradToSimple(str);
        return _spell(str, ...args);
    };
    proto.spell = function (...args: SpellArg[]) {
        return newSpell(this as string, ...args);
    };
    cnchar.spell = function (...args) {return newSpell(...args);};
    if (!cnchar._.poly) {
        cnchar._._reinitSpellPoly = function (): void {
            _spell = cnchar.spell;
            proto.spell = function (...args) {
                return newSpell(this as string, ...args);
            };
            cnchar.spell = function (...args) {return newSpell(...args);};
        }; ;
    }
}

function reinitStroke (proto: String, cnchar: ICnChar) {
    let _stroke = cnchar.stroke;
    const _new = function (str: string, ...args: Array<StrokeArg>): number | Array<any> {
        _.checkArgs('stroke', args, true);
        const isArr = _.has(args, arg.array);
        const isOrder = _.has(args, arg.order);
        if (!isArr) {args.push(arg.array);}// 先使用array模式
        const res = _stroke(str, ...args) as Array<any>; // 没有繁体的结果
        if (!isOrder) { // stroke 方法
            if (_.has(args, arg.simple)) { // 启用简单模式则 直接返回
                return (isArr) ? res : _.sumStroke(res as Array<number>);
            }
            if (_.has(args, arg.trad)) {
                for (var j = 0; j < res.length; j++) {
                    if (res[j] !== 0) {
                        res[j] = -1;
                    }
                }
            }
            for (const i in countDict) {
                const inum = parseInt(i);
                for (var j = 0; j < res.length; j++) {
                    if (res[j] === 0 && countDict[inum].indexOf(str[j]) !== -1) {
                        res[j] = inum;
                    }
                }
            }
            if (_.has(args, arg.trad)) {
                for (var j = 0; j < res.length; j++) {
                    if (res[j] === -1) {
                        res[j] = 0;
                    }
                }
            }
            return (isArr) ? res : _.sumStroke(res);
        } else { // strokeOrder 方法
            if (_.has(args, arg.simple)) { // 启用简单模式则 直接返回
                return res;
            }
            if (_.has(args, arg.trad)) { // 只使用繁体字

            }
            // 将其中的繁体字获取 strokeOrder
            const igList = [];
            for (var i = 0; i < res.length; i++) {
                if (typeof res[i] === 'undefined') {
                    res[i] = orderDict[str[i]]; // 字母版笔画表
                } else {
                    igList.push(i);
                }
            }
            return _.orderWithLetters(res, str, args, igList);
        }
    };
    proto.stroke = function (...args: Array<StrokeArg>) {
        return _new(this as string, ...args);
    };
    cnchar.stroke = function (...args) {return _new(...args);};
    if (!cnchar._.order) {
        cnchar._._reinitStrokeOrder = function () {
            _stroke = cnchar.stroke;
            proto.stroke = function (...args: Array<StrokeArg>) {
                return _new(this as string, ...args);
            };
            cnchar.stroke = function (...args) {return _new(...args);};
        }; ;
    }
}


function install (cnchar: ICnChar & {convert?: IConverter}): void {
    cnchar.convert = converter;
    const _p: String & ITradString = String.prototype;
    if (typeof cnchar.type.spell === 'object') {
        cnchar.type.spell.simple = arg.simple;
        cnchar.type.spell.trad = arg.trad;
    }
    if (typeof cnchar.type.stroke === 'object') {
        cnchar.type.stroke.simple = arg.simple;
        cnchar.type.stroke.trad = arg.trad;
    }
    reinitSpell(_p, cnchar);
    reinitStroke(_p, cnchar);
    _p.convertSimpleToTrad = function (): string {return converter.simpleToTrad(this as string);};
    _p.convertSimpleToSpark = function (): string {return converter.simpleToSpark(this as string);};
    _p.convertTradToSimple = function (): string {return converter.tradToSimple(this as string);};
    _p.convertTradToSpark = function (): string {return converter.tradToSpark(this as string);};
    _p.convertSparkToSimple = function (): string {return converter.sparkToSimple(this as string);};
    _p.convertSparkToTrad = function (): string {return converter.sparkToTrad(this as string);};
    _ = cnchar._;
    _.convert = converter;
    _.dict.getTradOrders = function () {return orderDict;};
    _.dict.getTradCount = function () {return countDict;};
}


const plugin: IPlugin = {
    pluginName: 'trad',
    install: install,
};

if (typeof window === 'object' && window.CnChar) {
    window.CnChar.use(plugin);
}

export default plugin;