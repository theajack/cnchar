import {IFunc} from '../../main/tool';
import {ICnChar, IdomArg, XhyArg} from '../../main'; // ! important for declare module '../../main/index'
import {IPlugin} from '../../main/common';

export interface IRandomSpellOptions {
    number?: number;
    tone?: boolean;
    flat?: boolean;
}

export interface IRandomWordOptions {
    number?: number;
    stroke?: number;
    trad?: boolean;
}

export interface IRandomIdiomOptions {
    number?: number;
    pattern?: [string, ...IdomArg[]];
}

export interface IRandomXHYOptions {
    number?: number;
    pattern?: [string, ...XhyArg[]];
}

export interface IRandomWordsOptions {
    number?: number;
    length?: number;
    pattern?: [string, ...('trad')[]];
}

export interface IRandom {
    use(plugin: IPlugin): void;
    spell: IFunc<string[], IRandomSpellOptions>;
    word: IFunc<string, IRandomWordOptions>;
    idiom: IFunc<string[], IRandomIdiomOptions>;
    xhy: IFunc<string[], IRandomXHYOptions>;
    words: IFunc<string[], IRandomWordsOptions>;
}

declare global {
    interface Window {
        CncharRandom: IRandom,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        random: IRandom;
    }
}

