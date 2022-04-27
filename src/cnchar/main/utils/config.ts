import defDict from '../dict/spell-default.json';
import spellDict from '../dict/spell-dict-jian.json';
import originStrokeDict from '../dict/stroke-count-jian.json';
import infoDict from '../dict/info-dict.json';
import {transformTone, spell, arg, shapeSpell, stroke} from './tool';
import {Json, ITransformReturn} from 'cnchar-types/main/common';
import {ISetIntoJson} from 'cnchar-types/main/tool';
import {mapJson} from '@common/util';

const strokeDict = originStrokeDict as Json<string>;
// 设置多音字默认拼音
export function setSpellDefault (word: string | Json<string>, spell?: string): void {
    setIntoJson({
        target: defDict,
        key: word,
        value: spell,
        isSpell: true
    });
}
export const setIntoJson: ISetIntoJson = ({
    target,
    key,
    value,
    isSpell = false,
}): void => {
    mapJson(key, value, (k, v) => {
        if (k && v) {
            target[k] = isSpell ? shapeSpell(v) : v;
        }
    });
};

function setIntoSpellBase (
    dict: Json<string>,
    currentSpell: Json<Array<ITransformReturn>> | Array<ITransformReturn>,
    word:  string | Json<string | Array<string>>,
    spells?: string | Array<string>,
    isPoly: boolean = false
): void {
    if (typeof word === 'object') {
        for (const k in word) {
            setIntoSpellBase(
                dict,
                (currentSpell as Json<Array<ITransformReturn>>)[k],
                k,
                word[k]
            );
        }
        return;
    }
    if (spells instanceof Array) {
        spells.forEach((spell => {
            setIntoSpellBase(dict, currentSpell, word, spell, true);
        }));
        return;
    }
    const info = transformTone(spells as string);
    const str = dict[info.spell];
    currentSpell = currentSpell as Array<ITransformReturn>;
    if (currentSpell.length >= 1) {
        for (let i = 0; i < currentSpell.length; i++) {
            const csItem = currentSpell[i];
            if (csItem.spell === info.spell && csItem.tone === info.tone) {
                return;
            }
        }
        if (!isPoly) isPoly = true;
    }

    const appendStr = `${word}${info.tone + (isPoly ? 5 : 0)}`;

    if (!str) {
        dict[info.spell] = `${info.index}:` + appendStr;
    } else {
        dict[info.spell] = str + appendStr;
    }
    // 修改之前的拼音
    if (currentSpell.length === 1) {
        const cinfo = currentSpell[0];
        dict[cinfo.spell] = dict[cinfo.spell].replace(`${word}${cinfo.tone}`, `${word}${cinfo.tone + 5}`);
    }
    if (isPoly) {
        addPolyWord(word);
    }
}

export function setIntoSpell (
    dict: Json<string>,
    word:  string | Json<string | Array<string>>,
    spells?: string | Array<string>
): void {
    let currentSpell: Json<Array<ITransformReturn>> | Array<ITransformReturn>;
    if (typeof word === 'object') {
        currentSpell = {};
        for (const k in word) {
            currentSpell[k] = _getCurrentSpellInfo(dict, k);
        }
    } else {
        currentSpell = _getCurrentSpellInfo(dict, word);
    }
    
    setIntoSpellBase(dict, currentSpell, word, spells);
}

function _getCurrentSpellInfo (
    dict: Json<string>,
    word: string
): Array<ITransformReturn> {
    const spl = spell(dict, [word, arg.tone, arg.poly]) as string;
    if (spl === word) {
        return [];
    }
    let result: Array<string>;
    if (spl.indexOf('|') !== -1) {
        result = spl.substring(1, spl.length - 1).split('|');
    } else {
        result = [spl];
    }
    return result.map(sp => {
        return transformTone(sp);
    });
}

export function setSpell (
    word:  string | Json<string | Array<string>>,
    spells?: string | Array<string>
): void {
    setIntoSpell(spellDict, word, spells);
}
export function setStrokeCount (word: string | Json<number>, count?: number): void {
    mapJson(word, count, (k, v) => {
        const oldCount = stroke(strokeDict, [k]) as number;
        if (oldCount === count) {
            return;
        }
        // 去除旧笔画数
        if (oldCount !== 0) {
            const index = oldCount.toString();
            strokeDict[index] = strokeDict[index].replace(k, '');
        }
        if (strokeDict[v]) {
            strokeDict[v] += k;
        } else {
            strokeDict[v] = k;
        }
    });
}

function addPolyWord (word: string): void {
    if (infoDict.polyWord.indexOf(word) === -1) {
        infoDict.polyWord += word;
    }
}

