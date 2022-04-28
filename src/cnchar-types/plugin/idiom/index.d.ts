
import {ICnChar, IdomArg} from '../../main';

export declare type TIdiomArg = {
    [prop in IdomArg]: IdomArg
}

export declare type TIdiomInput = string | number | Array<string|number>;

export declare interface IIdiom {
    (input: TIdiomInput, ...args: Array<IdomArg>): Array<string> | void;
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