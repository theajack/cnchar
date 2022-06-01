import {IInputOptions, IInputResult} from 'cnchar-types/plugin/input';
import {Json} from 'src/cnchar-types/main/common';
import {associateSpell} from './associate/ass-spell';
import {debounceReturn, getSpellDict} from './util';
import {splitString} from './wubi';

const tones = ['0', '1', '2', '3', '4'];


export function spellInput (
    input: string,
    {
        debounce = 0,
        onResult,
        associate = true,
        spellTone = true,
    }: IInputOptions
): IInputResult {

    if (!getSpellDict()) {
        console.warn('spellInput: cnchar is not installed');
        return [];
    }
    
    return debounceReturn(
        'spell',
        debounce,
        () => associateSpell(associate, spellInputBase(input, spellTone)),
        onResult,
    );
}

function spellInputBase (input: string, spellTone: boolean) {
    return traverse(input, getSpellDict(), spellTone);
}

function buildSpellReg (tone: string = '') {
    if (!tone) return /[\u4e00-\u9fa5]/g;
    return new RegExp(`[\u4e00-\u9fa5]${tone}`, 'g');
}

function traverse (
    input: string,
    map: Json,
    spellTone: boolean,
    path: string[] = [],
    spellPath: string[] = [],
    result: IInputResult = [],
) {
    [1, 2, 3, 4, 5, 6].forEach(length => {
        if (input.length < length) return;

        // eslint-disable-next-line prefer-const
        let [spell, rest] = splitString(input, length);
        const wordString = map[spell];

        if (wordString && spell !== 'n') {
            let tone = '';
            if (spellTone && rest && tones.indexOf(rest[0]) !== -1) {
                tone = rest[0];
                spell += tone;
                rest = rest.substring(1);
            }
            const reg = buildSpellReg(tone);

            const matchWords = wordString.match(reg);
            let pathValue = '';
            if (matchWords) {
                pathValue = matchWords.join('');
                if (tone) pathValue = pathValue.replace(/[0-4]/g, '');
            }
            const newPath = [...path, pathValue];
            const newSpellPath = [...spellPath, spell];
            if (rest) {
                traverse(rest, map, spellTone, newPath, newSpellPath, result);
            } else {
                result.push({
                    split: newSpellPath,
                    words: newPath,
                    association: [],
                });
            }
        } else {
            if (rest.length === 0) {
                result.push({
                    split: [...spellPath, spell],
                    words: [...path, spell],
                    association: [],
                });
            }
        }
    });

    return result;
}

// cnchar.input('anang', {type: 'spell'})