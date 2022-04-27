import {ICnChar} from '../../main';
import {Json} from '../../main/common';

export declare type RadicalArg = 'array' | 'trad';

export declare interface IRadicalFn {
    (text:string | Array<string>, ...radicalArgs: Array<RadicalArg>): string | Array<string>;
}

export declare interface ISetRadical {
    (word: string, radical: string): void;
    (json: Json<string>): void;
}

export declare interface IInitRadical {
    (cnchar?: ICnChar): void;
}

export declare interface IRadical extends IRadicalFn {
    setRadical: ISetRadical;
    init: IInitRadical;
}

declare global {
    interface Window {
        CncharRadical: IRadical,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        radical: IRadical;
    }
}
