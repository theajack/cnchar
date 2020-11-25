declare type xhyArg = 'fuzzy' | 'answer' | 'second';

export declare interface XHY {
    (text:string, ...xhyArgs: Array<xhyArg>): Array<string>;
    addXhy(args: Array<Array<string> | string>): void;
    addXhy(xhyHead: string, xhyTail: string): void;
}

declare const xhy: XHY;

declare module 'cnchar' {
    interface CnCharStatic {
        xhy: XHY;
    }
}

export default xhy;