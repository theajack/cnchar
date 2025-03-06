import {IInputOptions, IInputResult} from 'cnchar-types/plugin/input';
import {Json} from 'cnchar-types/main/common';
import {associateSpell} from './associate/ass-spell';
import {debounceReturn, getSpellDict} from './util';
import {splitString} from './wubi';
import {distinctArray} from './associate/common';
import {getCnChar} from './cnchar';

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
        let [spell, rest] = splitString(input, length); // 分割输入
        const wordString = map[spell];

        const onSpellMatched = (matchWords: string[] | null, tone: string) => {
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
        };

        const pickTone = () => { // 提取当前拼音的音调，从当前最后一位字符取或者取rest第一位
            let tone = '';
            if (spell.length > 1) { // 先检查当前拼音是否都有音调
                const last = spell[spell.length - 1];
                if (tones.includes(last)) {
                    tone = last;
                }
            }
            if (!tone && rest && tones.indexOf(rest[0]) !== -1) {
                tone = rest[0];
                spell += tone;
                rest = rest.substring(1);
                addon ++;
            }
            const reg = buildSpellReg(tone);
            return {tone, reg};
        };

        if (wordString && spell !== 'n') { // 匹配到拼音
            matched = true;

            const {reg, tone} = pickTone();
            const matchWords = wordString.match(reg); // 筛选出音调匹配到的汉字

            onSpellMatched(matchWords, tone);
        } else {
            if (!matched) {
                if (rest.length === 0) {
                    result.push({
                        split: [...spellPath, spell],
                        words: [...path, spell],
                        association: [],
                    });
                } else {
                    if (spell.length <= 2) {
                        if (isInitial(spell) && isInitial(rest[0]) && !isInitial(spell + rest[0])) {
                            matched = true;
                            const {reg, tone} = pickTone();

                            const matchWords = findWordsStartWithInitial(spell, map, tone).match(reg); // 筛选出音调匹配到的汉字
                            onSpellMatched(matchWords, tone);
                        }
                    }
                }
            }
        }
    };

    return result;
}

const WordsStartWithInitialMap: Json<string> = {};
function findWordsStartWithInitial (spell: string, map: Json, tone: string): string { // 根据声母查找所有字典汉字
    if (tone) spell = spell.replace(tone, '');

    if (WordsStartWithInitialMap[spell]) return WordsStartWithInitialMap[spell];

    let str = '';
    for (const k in map) {
        if (k.indexOf(spell) === 0) {
            str += map[k];
        }
    }
    WordsStartWithInitialMap[spell] = str;
    return str;
}


// cnchar.input('anang', {type: 'spell'})

function isInitial (n: string) {
    if (n.length > 1) n = n.replace(/[0-4]/, '');
    return (getCnChar()?.spellInfo.initials.includes(n)) || false;
}