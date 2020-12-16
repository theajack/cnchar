import {ICnChar, XhyArg} from 'cnchar/types/index';

export declare type TAddXhyArg1 = Array<Array<string>> | Array<string>;

export declare interface IAddXhy {
    (args: TAddXhyArg1): void;
    (xhyHead: string, xhyTail: string): void;
}

export declare interface IInitXHY {
    (cnchar?: ICnChar): void;
}

export declare interface IXHY {
    (text:string, ...xhyArgs: Array<XhyArg>): Array<string>;
    addXhy: IAddXhy;
    init: IInitXHY;
}

declare global {
    interface Window {
        CncharXHY: IXHY,
    }
}

declare module 'cnchar' {
    interface ICnChar {
        xhy: IXHY;
    }
}