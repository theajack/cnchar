import originPolyPhrases from './dict/polyphone-phrase-simple.json';
import {ICnChar, ISpell, SpellArg} from 'cnchar-types/main/index';
import {ICncharTool} from 'cnchar-types/main/tool';
import {IPoly, ISetPolyPhrase} from 'cnchar-types/plugin/poly';
import {IPlugin, Json} from 'cnchar-types/main/common';

const polyPhrases = originPolyPhrases as Json<string>;

let _cnchar: ICnChar;

let _: ICncharTool;// 工具方法

// let arg = {origin:'origin'}
const arg: {
    poly: SpellArg
} = {poly: 'poly'};

let _spell: ISpell;

function _poly (str: string, ...args: Array<SpellArg>): string | Array<any> {
    _.checkArgs('spell', args, true);
    if (_.has(args, _.arg.poly)) { // 多拼音模式直接使用原始spell方法
        return _spell(str, ...args);
    }
    const newArgs = [_.arg.array]; // 先用数组
    // firt up low 参数等获取到多音拼音之后在处理
    args.forEach(arg => {
        if (arg !== 'first' && arg !== 'up' && arg !== 'low') newArgs.push(arg);
    });
    const tone = _.has(args, _.arg.tone);
    
    const res = _spell(str, ...newArgs) as Array<string>; // 获取
    for (const k in polyPhrases) {
        const index = str.indexOf(k);
        if (index !== -1) { // 命中了多音词词库
            const pa = polyPhrases[k].split(' ');// 多音词拼音数组
            for (let i = 0; i < pa.length; i++) {
                res[index + i] = _.removeTone(pa[i], tone).spell;
            }
        }
    }
    _.dealUpLowFirst(res, args);
    if (!_.has(args, _.arg.array)) {
        return res.join('');
    }
    return res;
}
const setPolyPhrase: ISetPolyPhrase = (word: string | Json<string>, spell?: string): void => {
    if (typeof word === 'object') {
        for (const k in word) {
            setPolyPhrase(k, word[k]);
        }
        return;
    }
    if (typeof spell !== 'string') return;
    polyPhrases[word] = spell.split(' ').map(s => {
        return _cnchar.shapeSpell(s);
    }).join(' ');
};

function install (cnchar: ICnChar & {setPolyPhrase?: ISetPolyPhrase}) {
    cnchar.setPolyPhrase = setPolyPhrase;
    _spell = cnchar._origin.spell;
    _ = cnchar._;
    _cnchar = cnchar;
    const _new: ISpell = (str: string, ...args: Array<SpellArg>) => {
        if (_.has(args, arg.poly)) { // 有 poly参数则不使用多音词模式
            return _spell(str, ...args);
        }
        return _poly(str, ...args);
    };
    cnchar.spell = _new;
    String.prototype.spell = function (...args: Array<SpellArg>) {
        return _new(this as string, ...args);
    };
    // cnchar.type.spell.origin = arg.origin;
    cnchar._.poly = true;
    if (cnchar._._reinitSpellPoly) {
        cnchar._._reinitSpellPoly();
        delete cnchar._._reinitSpellPoly;
    }
}

const plugin: IPlugin & IPoly = {
    pluginName: 'poly',
    install,
    setPolyPhrase,
    dict: {
        phrases: polyPhrases
    }
};

if (typeof window === 'object' && window.CnChar) {
    window.CncharPoly = plugin;
    window.CnChar.use(plugin);
}

export default plugin;