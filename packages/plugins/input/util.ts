import {Json} from 'cnchar-types/main/common';
import {IInputResult} from 'cnchar-types/plugin/input';

const map: Json = {};

export function debounceReturn (
    name: string,
    debounce: number,
    fn: ()=> IInputResult,
    onreturn?: (v: IInputResult)=>void,
) {
    if (debounce) {
        clearTimeout(map[name]);
        map[name] = setTimeout(() => {
            if (onreturn) {
                onreturn(fn());
            } else {
                console.warn('debounceReturn: onreturn is not defined');
            }
        }, debounce);
        return [];
    } else {
        return fn();
    }
}


let spellDict: Json | null = null;

export function initSpellMap (dict: Json) {
    spellDict = dict;
}

export function getSpellDict () {
    return spellDict as Json;
}