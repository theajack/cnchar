import {spellInfo} from './spellToWord';
import {has} from './util';
import Dict from '../dict';
import {AllArgs, ICnChar, TypeProp, ToneType, SpellArg, StrokeArg, TypeValueObject} from 'cnchar-types/main/index';
import {Json, ITransformReturn} from 'cnchar-types/main/common';
import {TSpellArg, IDealUpLowFirst, IRemoveTone, IFunc, ICheckArgs, ITransformTone} from 'cnchar-types/main/tool';
import {_warn, isCnChar} from '@common/util';

export const tones: string = 'āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ*ńňǹ'; // * 表示n的一声

const noTones: string = 'aoeiuün';

export const arg: TSpellArg = {
    array: 'array',
    low: 'low',
    up: 'up',
    first: 'first',
    poly: 'poly',
    tone: 'tone',
    simple: 'simple',
    trad: 'trad',
    flat: 'flat',
};

let _cnchar: ICnChar;
export function initCnchar (cnchar: ICnChar): void {
    _cnchar = cnchar;
}
export function getCnChar () {
    return _cnchar;
}

const NOT_CNCHAR: string = 'NOT_CNCHAR';

export function spell (dict: Json<string>, originArgs: Array<string>): string | Array<string> {
    const strs = originArgs[0].split('');
    const args = (originArgs.splice(1)) as Array<SpellArg>;
    
    checkArgs('spell', args);
    const poly = has(args, arg.poly);
    const tone = has(args, arg.tone);
    const res: Array<Array<string>> = [];
    for (const sp in dict) { // 遍历拼音
        const ds: string = dict[sp]; // 某个拼音的所有汉字字符串
        const pos = parseInt(ds[0]); // 某个拼音的音调位置
        for (let i = 0; i < strs.length; i++) { // 遍历字符数组
            const ch: string = strs[i];

            const addIntoPolyRes = (spell: string) => {
                debugger;
                isDefaultSpell(ch, spell) ? res[i].unshift(spell) : res[i].push(spell);
                debugger;
            };

            if (isCnChar(ch)) { // 如果是汉字
                let index = ds.indexOf(ch);
                if (index !== -1) {
                    const ssp = getSpell(sp, ds, index, poly, tone, pos); // single spell
                    if (ssp.poly) { // 多音字模式 且 当前汉字是多音字
                        if (!res[i]) res[i] = [];
                        addIntoPolyRes(ssp.res);
                        let dsNew = ds;
                        const n = (dsNew.match(new RegExp(ch, 'g')) as Array<string>).length;
                        for (let k = 1; k < n; k++) {
                            dsNew = dsNew.substr(index + 2);
                            index = dsNew.indexOf(ch);
                            addIntoPolyRes(getSpell(sp, dsNew, index, poly, tone, pos).res);
                        }
                    } else {
                        if (ssp.isPolyWord) { // 是多音字 不是多音字模式
                            if (Dict.spellDefault[ch]) { // 设置了多音字的默认拼音
                                ssp.res = removeTone(Dict.spellDefault[ch], tone).spell; // 默认有音调
                            }
                        }
                        res[i] = [ssp.res];
                        strs[i] = '';
                    }
                }
            } else if (ch !== '') { // 如果不是汉字
                res[i] = [NOT_CNCHAR, ch];
            }
        }
    }
    dealUpLowFirst(res, args);
    // 从res中读取数据
    const result: Array<string> = [];
    for (let i = 0; i < strs.length; i++) {
        const item = res[i];
        if (typeof item === 'undefined') {
            result[i] = strs[i]; // 查不到的汉字返回原字
        } else if (item.length > 1) {
            if (item[0] === NOT_CNCHAR) {
                result[i] = item[1]; // 非汉字返回原字符
            } else {
                result[i] = `(${item.join('|')})`;
            }
        } else {
            result[i] = item[0];
        }
        if (has(args, arg.flat)) {
            result[i] = shapeSpell(result[i], true);
        }
    }
    if (!has(args, arg.array)) {
        return result.join('');
    }
    return result;
}

export const dealUpLowFirst: IDealUpLowFirst = (
    res: Array<Array<string>> | Array<string>,
    args: Array<SpellArg>
): void => {
    if (_cnchar._.poly) {
        dealResCase(res, low);
        // 当启用了 多音词时 需要强制默认小写
        // 因为会被覆盖
    }
    if (has(args, arg.first)) {
        dealResCase(res, first);
    }
    if (has(args, arg.up)) {
        dealResCase(res, up);
    } else if (!has(args, arg.low)) {
        dealResCase(res, upFirst);
    }
};

function dealResCase (
    res: Array<Array<string>> | Array<string>,
    func:(str: string) => string
): void {
    res.forEach((item: Array<string> | string, index: number) => {
        if (typeof item !== 'string') {
            if (item[0] !== NOT_CNCHAR) {
                item.forEach((s, j) => {item[j] = func(s);});
            }
        } else {
            res[index] = func(item);
        }
    });
}

function first (s: string): string {
    return s[0];
}

function up (s: string): string {
    return s.toUpperCase();
}
function upFirst (s: string): string {
    return up(s[0]) + s.substr(1);
}
function low (s: string): string {
    return s.toLowerCase();
}

function getSpell (
    spell: string,
    str: string,
    index: number,
    isPoly: boolean,
    isTone: boolean,
    pos: number
): {
    res: string,
    poly: boolean,
    isPolyWord: boolean
} {
    let tone = parseInt(str[index + 1]);
    const res = {res: spell, poly: false, isPolyWord: (tone >= 5)};
    if (!isPoly && !isTone) {
        return res;
    }
    if (res.isPolyWord) { // 是多音字
        tone -= 5; // 正确的音调
        if (isPoly) { // 既是多音字模式 又是 多音字
            res.poly = true;
        }
    }
    if (isTone) {
        res.res = setTone(spell, pos, tone as ToneType);
    }
    return res;
}

function isDefaultSpell (word: string, spell: string) {
    const def = Dict.spellDefault[word];
    if (!def) return false;
    return def === spell || (shapeSpell(def, true).replace(/[0-4]/, '') === spell);
}

// tone=false : 根据有音调的拼音获得无音调的拼音和音调
// tone=true : 返回原拼音
export const removeTone: IRemoveTone = (spell: string, tone: boolean): {
    spell: string, tone?: ToneType, index?: number
} => {
    if (tone) {
        return {spell};
    }
    for (let i = 0; i < spell.length; i++) {
        const index: number = tones.indexOf(spell[i]);
        if (index !== -1) { // 命中
            return {
                spell: spell.substr(0, i) + noTones[Math.floor(index / 4)] + spell.substr(i + 1),
                tone: ((index % 4) + 1) as ToneType,
                index: i + 1
            };
        }
    }
    return {spell, tone: 0, index: -1};
};

/**
 * 给拼音添加音调
 * setTone('ni', 1, 3) = nǐ
 */
export function setTone (spell: string, index: number, tone: ToneType): string {
    if (tone === 0) { // 轻声
        return spell;
    }
    const p = spell[index];
    const toneP = tones[noTones.indexOf(p) * 4 + (tone - 1)];
    if (p !== toneP) {
        return spell.replace(p, toneP);
    }
    return spell;
}

// 计算笔画基础方法
export function stroke (
    dict: Json<string>,
    originArgs: Array<string>
): number | Array<number> {
    const strs = originArgs[0].split('');
    const strokes: Array<number> = [];
    const args = originArgs.splice(1) as Array<StrokeArg>;
    checkArgs('stroke', args);
    for (const i in dict) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j]) {
                if (dict[i].indexOf(strs[j] as string) !== -1) {
                    strs[j] = '';
                    strokes[j] = parseInt(i);
                }
            }
        }
    }
    strs.forEach((c: string, i: number): void => {
        if (c) {strokes[i] = 0;}
    });
    if (!has(args, arg.array as StrokeArg)) {
        return sumStroke(strokes);
    }
    return strokes;
}

export const sumStroke: IFunc<number, Array<number>> = (strs: Array<number>): number => {
    let sum: number = 0;
    strs.forEach(function (c) {
        sum += c;
    });
    return sum;
};

/*
    检查cnchar中某方法 传入的参数是否合法
    spell 所有参数 ["array", "low", "up", "first", "poly", "tone", "simple"] // simple 禁用繁体字
    stroke 所有参数 ["letter", "shape", "count", "name", "detail", "array", "order", "simple"]
*/
let _hasCheck: boolean = false;
export const checkArgs: ICheckArgs = (
    type: TypeProp,
    args: Array<AllArgs>,
    jumpNext?: boolean
): void => {
    if (!_cnchar.check) {
        return;
    }
    if (_hasCheck) {
        _hasCheck = false;
        return;
    }
    if (jumpNext) { _hasCheck = true; }
    const useless: Array<AllArgs> = [];
    for (let i = args.length - 1; i >= 0; i--) {
        const arg = args[i];
        if (!(_cnchar.type[type] as TypeValueObject)[arg]) {
            useless.push(arg);
            args.splice(i, 1);
        }
    }
    const ignore: Array<AllArgs> = [];
    const redunt: Array<AllArgs> = [];
    const check = (name: AllArgs | Array<AllArgs>, arr: Array<AllArgs> = ignore): void => {
        if (name instanceof Array) {
            name.forEach((item) => {
                check(item, arr);
            });
            return;
        }
        if (has(args, name)) { arr.push(name); }
    };
    if (_cnchar.plugins.indexOf('trad') === -1) {
        if (has(args, 'simple'))
            ignore.push('simple');
        if (has(args, 'trad'))
            ignore.push('trad');
    }
    if (type === 'spell') {
        if (has(args, 'up') && has(args, 'low')) {
            ignore.push('low');
        }
        // t.spell.origin 表示启用了多音词
        // !has(args,'origin') 表示没有禁用多音词
        // 此时的 poly 就会被忽略
        // if(t.spell.origin && !has(args,'origin') && has(args,'poly')){
        //     ignore.push('poly');
        // }
    } else if (type === 'stroke') { // stroke
        if (has(args, 'order')) { // 笔画顺序模式
            check('array', redunt);
            // detail > shape > name > count > letter 默认值是 letter
            if (has(args, 'letter')) {
                check(['detail', 'shape', 'name', 'count']);
                check('letter', redunt);
            } else if (has(args, 'detail')) {
                check(['shape', 'name', 'count']);
            } else if (has(args, 'shape')) {
                check(['name', 'count']);
            } else if (has(args, 'name')) {
                check(['count']);
            }
        } else { // 笔画数模式
            check(['detail', 'shape', 'name', 'letter']);
            check('count', redunt);
        }
    } else if (type === 'orderToWord') {
        if (has(args, 'match')) {
            check(['matchorder', 'contain', 'start']);
        } else if (has(args, 'matchorder')) {
            check(['contain', 'start']);
        } else if (has(args, 'contain')) {
            check(['start']);
        }
    } else if (type === 'strokeToWord') {
    } else if (type === 'spellToWord') {
    } else if (type === 'idiom') {
        if (has(args, 'spell')) {
            check(['stroke', 'char']);
        } else if (has(args, 'stroke')) {
            check(['tone', 'char']);
        } else {
            check(['tone']);
        }
    } else if (type === 'xhy') {
    } else if (type === 'radical') {
    }
    warnArgs(useless, '无效', type, args);
    warnArgs(ignore, '被忽略', type, args);
    warnArgs(redunt, '冗余', type, args);
};
function warnArgs (
    arr: Array<AllArgs>,
    txt: string,
    type: TypeProp,
    args: Array<AllArgs>
): void {
    if (arr.length > 0) {
        let mes: string = `以下参数${txt}:${JSON.stringify(arr)};`;
        if (txt === '被忽略' && type === 'stroke' && !has(args, 'order')) {
            mes += ' 要启用笔顺模式必须使用 order 参数';
        } else {
            mes += ` 可选值：[${Object.keys((_cnchar.type[type] as TypeValueObject))}]`;
        }
        _warn(mes);
    }
}

/*
    将拼音转换成含有音调的拼音
    lv2 => lǘ

    reverse=true: lǘ => lv2
 */
export function shapeSpell (spell: string, reverse: boolean = false): string {
    const tones: string = '01234';

    const hasNumTone = tones.indexOf(spell[spell.length - 1]) !== -1;

    if (!reverse) {
        return hasNumTone ? transformTone(spell, true, 'low').spell : spell;
    }
    if (hasNumTone) {
        return spell;
    }
    const info = transformTone(spell, false, 'low');
    if (info.spell.indexOf('ü') !== -1) {
        info.spell = info.spell.replace('ü', 'v');
    }
    return hasNumTone ? spell : info.spell + info.tone;
}

/*
    将拼音转换成json数据
    lv2 => {spell:'lü', tone: 2, index: 2, isTrans: true}
    lǘ => {spell:'lü', tone: 2, index: 2, isTrans: false}
    needTone = true: lv2 => {spell:'lǘ', tone: 2, index: 2, isTrans: true}
 */
export const transformTone: ITransformTone = (
    spell: string,
    needTone: boolean = false,
    type: 'low' | 'up' = 'low'
): ITransformReturn => {
    if (spell.indexOf('v') !== -1) {
        spell = spell.replace('v', 'ü');
    }
    const lastStr: string = spell[spell.length - 1];
    let tone: ToneType;
    let index: number = -1;
    let isTrans: boolean = false;

    if (parseInt(lastStr).toString() === lastStr) { // lv2
        spell = spell.substr(0, spell.length - 1);
        const info = spellInfo(spell);
        index = info.index;
        tone = parseInt(lastStr) as ToneType;
        isTrans = true;
        if (needTone) {
            spell = setTone(spell, index - 1, tone);
        }
    } else { // lǘ
        const info = spellInfo(spell);
        index = info.index;
        tone = info.tone; // 声调已经带好了的情况
        if (!needTone && tone !== 0) { // 需要去除音调并且有音调
            spell = info.spell;
        }
    }
    if (type === 'low') {
        spell = spell.toLowerCase();
    } else if (type === 'up') {
        spell = spell.toUpperCase();
    }
    return {spell, tone, index, isTrans};
};

export function checkTrad (input: string|string[], args: string[]) {
    if (args.indexOf('trad') === -1 || _cnchar.plugins.indexOf('trad') === -1) {
        return input;
    }

    let isArr = false;

    if (input instanceof Array) {
        isArr = true;
        input = input.join('');
    }

    input = _cnchar.convert.tradToSimple(input);

    if (isArr) return input.split('');
    return input;
}