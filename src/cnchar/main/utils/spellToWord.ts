import dict from '../dict';
import {ICnChar, ToneType, TypeValueObject, SpellToWordArg} from 'cnchar-types/main/index';
import {ICncharTool} from 'cnchar-types/main/tool';
import {ISpellInfo, ISpellInfoReturn} from 'cnchar-types/main/common';

const arg: {
    [prop in SpellToWordArg]: SpellToWordArg
} = {simple: 'simple', trad: 'trad', poly: 'poly', alltone: 'alltone', array: 'array'};
let _: ICncharTool;// 工具方法

/**
 * 获取拼音信息
 *
 * spellInfo('Shàng') => {
        spell: 'shang', // 无音调拼音
        initial: 'sh', // 声母
        final: 'ang', // 韵母
        tone: 4, // 音调
        index: 3 // 音调位置
    }
 */
export const spellInfo = ((spell: string): ISpellInfoReturn => {
    const initialDict = dict.info.initial;
    spell = spell.toLowerCase();
    const info = _.removeTone(spell, false);
    if (info.index === -1) {
        if (!dict.spell[info.spell]) {
            throw new Error('【spellInfo】错误的拼音: ' + spell);
        }
        info.index = parseInt(dict.spell[info.spell][0]) + 1;
    }
    let initial: string = '';
    let final: string = info.spell;
    for (let i = 0; i < initialDict.length; i++) {
        if (info.spell.indexOf(initialDict[i]) === 0) {
            initial = initialDict[i];
            final = info.spell.substr(initial.length);
            break;
        }
    }
    return {
        spell: info.spell,
        tone: info.tone as ToneType,
        index: info.index as number,
        initial,
        final,
    };
}) as unknown as ISpellInfo;

export function initSpellToWord (cnchar: ICnChar): void {
    _ = cnchar._;
    spellInfo.tones = _.tones.split('');
    spellInfo.initials = dict.info.initial;
    cnchar.spellInfo = spellInfo;
    cnchar.type.spellToWord = arg as TypeValueObject;
}

// spellToWord('shàng') => "上尚绱"
export function spellToWord (...originArgs: Array<string>): string | Array<string> {
    const spell = originArgs[0].toLowerCase();
    if (typeof spell !== 'string') {
        throw new Error('spellToWord: 输入必须是字符串');
    }
    const info = _.transformTone(spell, false);
    const args = originArgs.splice(1) as Array<SpellToWordArg>;
    _.checkArgs('spellToWord', args);
    const argRes = {
        simple: _.has(args, arg.simple),
        trad: _.has(args, arg.trad),
        poly: _.has(args, arg.poly),
        alltone: _.has(args, arg.alltone),
    };
    if (!argRes.simple && !argRes.trad) {
        argRes.simple = argRes.trad = true;
    }
    let res = '';
    const str = dict.spell[info.spell].substr(2);
    for (let i = 0; i < str.length; i += 2) {
        const word = str[i];
        let tone = parseInt(str[i + 1]);
        const isPoly = tone > 4;
        if (isPoly) {tone = tone - 5;}
        if (res.indexOf(word) === -1 && (argRes.alltone || tone === info.tone)) {
            if (!argRes.poly || isPoly) {
                res += word;
            }
        }
    }
    if (argRes.trad && _.convert) {
        let tradRes = '';
        for (let i = 0; i < res.length; i++) {
            const trad = _.convert.simpleToTrad(res[i]);
            if (trad !== res[i]) {
                tradRes += trad;
            }
        }
        if (!argRes.simple) {
            res = tradRes;
        } else {
            res += tradRes;
        }
    }
    if (_.has(args, arg.array)) {
        return res.split('');
    }
    return res;
};
