declare type radicalArg = 'array';

export declare interface Radical {
    (text:string | Array<string>, ...radicalArgs: Array<radicalArg>): string | Array<string>;
    setRadical(word: string, radical: string): void;
    setRadical(json: {[key: string]: string}): void;
}

declare const radical: Radical;

declare module 'cnchar' {
    interface CnCharStatic {
        radical: Radical;
    }
}

export default radical;