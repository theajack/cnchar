
import {ICnChar} from '../../main';

export declare type TIdiomInput = string | number | Array<string|number>;

export interface IIdiom {
    (input: TIdiomInput): Array<string>;
    dict: {
        idiom: string[];
        spellDict: string[];
        spellNoToneDict: string[];
    }
}

declare global {
    interface Window {
        CncharIdiom: IIdiom,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        idiom: IIdiom;
    }
}