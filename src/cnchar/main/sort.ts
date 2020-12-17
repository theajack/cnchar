import {initToneCodes, getCharCode} from './compareSpell';
import {ICnChar, CompareType, SortSpellArg, SpellArg} from 'cnchar-types/main';

let _cnchar: ICnChar;

const arg:{
    [prop in SortSpellArg]: SortSpellArg
} = {
    'tone': 'tone',
    'desc': 'desc',
};

export function initSort (__cnchar: ICnChar) {
    _cnchar = __cnchar;
    initToneCodes(__cnchar);
}

const TYPE:{
    [prop: string]: CompareType
} = {
    MORE: 'more', // 大于
    LESS: 'less', // 小于
    EVEN: 'even', // 等于
    ERROR: 'error'
};

function pretreat (spell: string, tone: boolean): string {
    const arr: Array<SpellArg> = ['low'];
    if (tone) {arr.push('tone');}
    if (_cnchar.isCnChar(spell)) {
        return _cnchar.spell(spell, ...arr) as string;
    }
    return _cnchar._.transformTone(spell, tone).spell;
}

export function compareSpell (
    spell1: string,
    spell2: string,
    tone: boolean = false
): CompareType {
    spell1 = pretreat(spell1, tone);
    spell2 = pretreat(spell2, tone);
    for (let i = 0; i < spell1.length; i++) {
        if (!spell2[i]) { // spell1与spell2值前面拼音一样，但是spell1长度大于spell2 说明 spell1 > spell2
            return TYPE.MORE;
        }
        const code = getCharCode(spell1[i], tone);
        const code2 = getCharCode(spell2[i], tone);
        if (code > code2) { // spell1 > spell2
            return TYPE.MORE;
        } else if (code < code2) { // spell1 < spell2
            return TYPE.LESS;
        }
    }
    if (spell1.length === spell2.length) {
        return TYPE.EVEN;
    }
    return TYPE.LESS; // spell1与spell2值前面拼音一样，但是spell1长度小于spell2 说明 中 < spell2
}

export function sortSpell (
    spells:Array<string> | string,
    ...args: Array<SortSpellArg>
): Array<string> | string {
    let isString: boolean = false;
    if (typeof spells === 'string') {
        spells = spells.split('');
        isString = true;
    }
    const tone = args.indexOf(arg.tone) !== -1;
    const desc = args.indexOf(arg.desc) !== -1;
    const more = desc ? -1 : 1;
    const less = more * -1;
    const result = spells.sort((a, b) => {
        const res = compareSpell(a, b, tone);
        if (res === TYPE.MORE) {
            return more;
        }
        if (res === TYPE.LESS) {
            return less;
        }
        return 0;
    });
    if (isString) {
        return result.join('');
    }
    return result;
}

export function compareStroke (
    stroke1: string | number,
    stroke2: string | number
): CompareType {
    if (typeof stroke1 === 'string') {
        stroke1 = _cnchar.stroke(stroke1) as number;
    }
    if (typeof stroke2 === 'string') {
        stroke2 = _cnchar.stroke(stroke2) as number;
    }

    if (stroke1 > stroke2) {
        return TYPE.MORE;
    }
    if (stroke1 < stroke2) {
        return TYPE.LESS;
    }
    return TYPE.EVEN;
}

export function sortStroke (
    strokes: Array<string | number> | string,
    desc?: 'desc' | 'asc'
): Array<string | number> | string {
    let isString: boolean = false;
    if (typeof strokes === 'string') {
        strokes = strokes.split('');
        isString = true;
    }
    const more = (desc === arg.desc) ? -1 : 1;
    const less = more * -1;
    const result = strokes.sort((a, b) => {
        const res = compareStroke(a, b);
        if (res === TYPE.MORE) {
            return more;
        }
        if (res === TYPE.LESS) {
            return less;
        }
        return 0;
    });
    if (isString) {
        return result.join('');
    }
    return result;
}