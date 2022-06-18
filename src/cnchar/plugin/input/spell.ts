import {IInputOptions, IInputResult} from 'cnchar-types/plugin/input';
import {Json} from 'cnchar-types/main/common';
import {associateSpell} from './associate/ass-spell';
import {debounceReturn, getSpellDict} from './util';
import {splitString} from './wubi';
import {distinctArray} from './associate/common';

const tones = ['0', '1', '2', '3', '4'];

export function spellInput (
    input: string,
    {
        debounce = 0,
        onResult,
        associate = true,
    }: IInputOptions
): IInputResult {

    if (!getSpellDict()) {
        console.warn('spellInput: cnchar is not installed');
        return [];
    }
    
    return debounceReturn(
        'spell',
        debounce,
        () => associateSpell(associate, spellInputBase(input)),
        onResult,
    );
}

function spellInputBase (input: string) {
    return traverse(input, getSpellDict());
}

function buildSpellReg (tone: string = '') {
    if (!tone) return /[\u4e00-\u9fa5]/g;
    return new RegExp(`[\u4e00-\u9fa5][${tone}${parseInt(tone) + 5}]`, 'g');
}

function traverse (
    input: string,
    map: Json,
    path: string[] = [],
    spellPath: string[] = [],
    result: IInputResult = [],
) {
    let addon = 0;
    let matched = false;
    for (let length = 1; length <= 7; length++) { // 拼音最长6+1个音调长度
        
        length += addon; // 加上音调的长度
        if (input.length < length) {
            break;
        }

        // eslint-disable-next-line prefer-const
        let [spell, rest] = splitString(input, length);
        const wordString = map[spell];

        if (wordString && spell !== 'n') {
            matched = true;
            let tone = '';
            if (rest && tones.indexOf(rest[0]) !== -1) {
                tone = rest[0];
                spell += tone;
                rest = rest.substring(1);
                addon ++;
            }
            const reg = buildSpellReg(tone);

            const matchWords = wordString.match(reg);
            let pathValue = '';
            if (matchWords) {
                pathValue = distinctArray(matchWords).join('');
                if (tone) pathValue = pathValue.replace(/[0-9]/g, '');
            }
            const newPath = [...path, pathValue];
            const newSpellPath = [...spellPath, spell];
            if (rest) {
                traverse(rest, map, newPath, newSpellPath, result);
            } else {
                result.push({
                    split: newSpellPath,
                    words: newPath,
                    association: [],
                });
            }
        } else {
            if (rest.length === 0 && !matched) {
                result.push({
                    split: [...spellPath, spell],
                    words: [...path, spell],
                    association: [],
                });
            }
        }
    };

    return result;
}

// cnchar.input('anang', {type: 'spell'})