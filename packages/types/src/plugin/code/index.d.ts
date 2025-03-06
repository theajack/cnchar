/*
 * @Author: chenzhongsheng
 * @Date: 2022-10-09 09:18:54
 * @Description: Coding something
 */
import {Json} from '../../main/common';
import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface IDictCodeResult {
    sijiao: string;
    cangjie: string;
    uniform: string;
}

export interface ICodeResult extends IDictCodeResult {
    binary: string;
    char: string;
    unicode: string;
    url: string;
    gbk: string;
    fiveStroke: string;
}
export interface ICode {
    (input: string): ICodeResult[];
    // 解码时 word传入code 请以空格分割
    binary(word: string, decode?: boolean): string;
    char(word: string, decode?: boolean): string;
    unicode(word: string, decode?: boolean): string;
    url(word: string, decode?: boolean): string;
    gbk(word: string, decode?: boolean): string;
    sijiao(word: string, decode?: boolean): string;
    cangjie(word: string, decode?: boolean): string;
    uniform(word: string, decode?: boolean): string;
    fiveStroke(word: string, type?: '86'|'98'|'all'): string[];
    setCode(words: string | Json<IDictCodeResult>, data?: IDictCodeResult): void;
    dict: {code: Json<string>};
}

declare global {
    interface Window {
        CncharCode: ICode,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        code: ICode;
    }
}

