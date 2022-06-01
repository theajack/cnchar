import {IInput} from 'cnchar-types/plugin/input';
import dict from './dict/wubi.json';
import {spellInput} from './spell';
import {wubiInput} from './wubi';

// 待选数组
export const input = ((input, options = {}) => {
    const type = options.type || 'spell';
    if (type === 'spell') {
        return spellInput(input.toLowerCase(), options);
    } else if (type === 'wubi') {
        return wubiInput(input.toUpperCase(), options);
    } else {
        console.warn('input: 暂不支持该类型 - ' + type);
    }
    return [];
}) as IInput;

export function getDict () {
    return {wubi: dict};
}

