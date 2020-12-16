import {ICnChar} from 'cnchar-types/main';

let _cnchar: ICnChar;
const toneCodes: Array<number> = [];
 
export function initToneCodes (__cnchar: ICnChar): void {
    _cnchar = __cnchar;
    'aoeiuvn'.split('').forEach(item => {
        const code = item.charCodeAt(0);
        for (let i = 1; i <= 4; i++) {
            toneCodes.push(code + i * 0.1);
        }
    });
}

function getToneCodes (char: string): number {
    const index = _cnchar._.tones.indexOf(char);
    if (index === -1) {
        return -1;
    }
    return toneCodes[index];
}

export function getCharCode (char: string, tone: boolean = false): number {
    if (!tone) {
        return char.charCodeAt(0);
    }
    const code = getToneCodes(char);
    if (code === -1) {
        return char.charCodeAt(0);
    }
    return code;
}