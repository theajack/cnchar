import {isCnChar} from '@common/util';

export function pickCnChar (text: string, onDisPick?: (word: string)=>void): string {
    let v = '';
    for (let i = 0; i < text.length; i++) {
        if (isCnChar(text[i])) {
            v += text[i];
        } else {
            if (onDisPick)onDisPick(text[i]);
        }
    }
    return v;
}