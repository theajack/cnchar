declare type radicalArg = 'array';

export declare interface Radical {
    (text:string | Array<string>, ...radicalArgs: Array<radicalArg>): string | Array<string>;
}

declare const radical: Radical;

declare module 'cnchar' {
    interface CnCharStatic {
        radical: Radical;
    }
}

export default radical;