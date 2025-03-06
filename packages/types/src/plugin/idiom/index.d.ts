/*
 * @Author: chenzhongsheng
 * @Date: 2022-10-09 09:18:54
 * @Description: Coding something
 */

import {ICnChar, IdomArg} from '../../main';

export declare type TIdiomInput = string | number | Array<string|number>;

export interface IIdiom {
    (input: TIdiomInput, mode?: IdomArg): Array<string>;
    dict: {
        idiom: string[];
        spellDict: string[];
        spellNoToneDict: string[];
    }
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