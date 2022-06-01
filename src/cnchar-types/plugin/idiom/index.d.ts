
import {Json} from '../../main/common';
import {ICnChar, IdomArg} from '../../main';

export declare type TIdiomArg = {
    [prop in IdomArg]: IdomArg
}

export declare type TIdiomInput = string | number | Array<string|number>;

export interface IIdiom {
    (input: TIdiomInput, ...args: Array<IdomArg>): Array<string>;
    dict: Json;
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