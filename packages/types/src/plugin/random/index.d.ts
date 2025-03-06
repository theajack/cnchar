import {IOptionFunc} from '../../main/tool';
import {ICnChar, XhyArg} from '../../main'; // ! important for declare module '../../main/index'
import {IPlugin} from '../../main/common';
import {TIdiomInput} from '../idiom';
import {TFiveElement, TMethod} from '../info';

export interface IRandomSpellOptions {
    number?: number; // 生成数量 默认1
    tone?: boolean; // 是否带音调 默认false
    flat?: boolean; // 是否扁平化拼音 如 lv2 默认false
}

export interface IRandomWordOptions {
    number?: number; // 生成数量 默认1
    stroke?: number; // 笔画数 默认不限制
    trad?: boolean; // 是否查找繁体字 默认否
}

export interface IRandomIdiomOptions {
    number?: number; // 生成数量 默认1
    query?: TIdiomInput; // 这个参数会直接调用cnchar.idiom 请参考cnchar-idiom文档
}

export interface IRandomXHYOptions {
    number?: number;
    pattern?: [string, ...XhyArg[]];
}

export interface IRandomWordsOptions {
    number?: number; // 生成数量 默认1
    length?: number; // 词语长度 默认不限制
    match?: string; // 查找包含match的词语
}

export interface IRandomInfoOptions {
    number?: number; // 生成数量 默认1
    fiveElement?: TFiveElement; // 根据五行查找
    method?: TMethod; // 根据造字法查找
}

export interface IRandom {
    use(...plugins: IPlugin[]): void;
    spell: IOptionFunc<string[], IRandomSpellOptions>;
    word: IOptionFunc<string, IRandomWordOptions>;
    idiom: IOptionFunc<string[], IRandomIdiomOptions>;
    xhy: IOptionFunc<string[], IRandomXHYOptions>;
    words: IOptionFunc<string[], IRandomWordsOptions>;
    info: IOptionFunc<string, IRandomInfoOptions>;
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

