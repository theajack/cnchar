import {ICnChar} from '../../main';
import {Json} from '../../main/common';

// export type RadicalArg = 'array' | 'trad';

export type TStruct = '左右结构' | '上下结构' | '独体结构' | '半包围结构' | '全包围结构' | '品字结构' | '上中下结构' | '左中右结构'

export interface IRadicalFn {
    (text:string | Array<string>): Array<IRadicalResult>;
}

export interface IRadicalResult {
    radical: string;
    struct: TStruct;
    radicalCount: number;
}

export interface ISetRadical {
    (word: string, radical: IRadicalResult): void;
    (json: Json<IRadicalResult>): void;
}


export interface IRadical extends IRadicalFn {
    setRadical: ISetRadical;
    dict: {
        radical: Json<string>;
        struct: Json<string>;
    };
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
