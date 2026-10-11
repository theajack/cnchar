import {Json} from '../../main/common';
import {ICnChar, TradArg, SpellArg} from '../../main';

export declare type TTradAag = {
    [prop in TradArg]: TradArg;
}

export interface ITradModArg {
    trad: 'trad',
    simple: 'simple',
    array: 'array',
    order: 'order'
}

declare const trad: Function;

export interface IConverter {
    type: TTradAag,
    simpleToSpark(sentence: string): string;
    simpleToTrad(sentence: string): string;
    sparkToSimple(sentence: string): string;
    sparkToTrad(sentence: string): string;
    tradToSimple(sentence: string): string;
    tradToSpark(sentence: string): string;
}

export interface IInitTrad {
    (cnchar?: ICnChar): void;
}

export interface ITradString {
    convertSimpleToTrad?(): string;
    convertSimpleToSpark?(): string;
    convertTradToSimple?(): string;
    convertTradToSpark?(): string;
    convertSparkToSimple?(): string;
    convertSparkToTrad?(): string;
    spell?: {(...args: Array<SpellArg>): string | Array<any>;}
}

export interface ITrad {
    convert: IConverter;
    dict: {
        code: Json<string>;
        count: Json<string>;
        order: Json<string>;
        trad: {
            simple: string;
            trad: string;
        },
        spark: {
            simple: string;
            spark: string;
        },
        radical: Json<string>;
        info: Json<string>;
        wubi: Json<string>;
    };
}

declare global {
    interface String {
        convertSimpleToTrad(): string;
        convertSimpleToSpark(): string;
        convertTradToSimple(): string;
        convertTradToSpark(): string;
        convertSparkToSimple(): string;
        convertSparkToTrad(): string;
    }
    interface Window {
        CncharTrad: ITrad;
    }
}

declare module '../../main/index' {
    interface ICnChar {
        convert: IConverter;
        trad: ITrad;
    }
}

export default trad;