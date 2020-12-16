import {ICnChar, TradArg, SpellArg} from 'cnchar/types';

export declare type TTradAag = {
    [prop in TradArg]: TradArg;
}

export declare interface ITradModArg {
    trad: 'trad',
    simple: 'simple',
    array: 'array',
    order: 'order'
}

declare const trad: Function;

export declare interface IConverter {
    type: TTradAag,
    simpleToSpark(sentence: string): string;
    simpleToTrad(sentence: string): string;
    sparkToSimple(sentence: string): string;
    sparkToTrad(sentence: string): string;
    tradToSimple(sentence: string): string;
    tradToSpark(sentence: string): string;
}

export declare interface IInitTrad {
    (cnchar?: ICnChar): void;
}

export declare interface ITradString {
    convertSimpleToTrad?(): string;
    convertSimpleToSpark?(): string;
    convertTradToSimple?(): string;
    convertTradToSpark?(): string;
    convertSparkToSimple?(): string;
    convertSparkToTrad?(): string;
    spell?: {(...args: Array<SpellArg>): string | Array<any>;}
}

declare module 'cnchar' {
    interface ICnChar {
        convert: IConverter;
    }
}

export default trad;