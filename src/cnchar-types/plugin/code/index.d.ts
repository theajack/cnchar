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
}
export interface ICode {
    (input: string): ICodeResult[];
    // 解码时 word传入code 请以空格分割
    binary(word: string, decoce?: boolean): string;
    char(word: string, decoce?: boolean): string;
    unicode(word: string, decoce?: boolean): string;
    url(word: string, decoce?: boolean): string;
    gbk(word: string, decoce?: boolean): string;
    sijiao(word: string, decoce?: boolean): string;
    cangjie(word: string, decoce?: boolean): string;
    uniform(word: string, decoce?: boolean): string;
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

