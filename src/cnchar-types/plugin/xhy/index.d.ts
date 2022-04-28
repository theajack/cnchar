import {ICnChar, XhyArg} from '../../main/index';

export declare type TAddXhyArg1 = Array<Array<string>> | Array<string>;

export declare interface IAddXhy {
    (args: TAddXhyArg1): void;
    (xhyHead: string, xhyTail: string): void;
}

export declare interface IXHY {
    (text:string, ...xhyArgs: Array<XhyArg>): Array<string>;
    addXhy: IAddXhy;
}

declare global {
    interface Window {
        CncharXHY: IXHY,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        xhy: IXHY;
    }
}