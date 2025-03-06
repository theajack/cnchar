import {Json} from '../../main/common';
import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export type TFiveElement = '金' | '木' | '水' | '火' | '土';
export type TMethod = '形声' | '会意';

export interface IInfoResult {
    fiveElement?: TFiveElement | ''; // 根据五行查找
    method?: TMethod | ''; // 根据造字法查找
    markSpell: string;
}

export interface IInfo {
    (input: string): IInfoResult[];
    setInfo(json: Json<IInfoResult>): void;
    setInfo(words: string, info: IInfoResult): void;
    dict: {
        fiveElementMap: Json<string>;
        methodMap: Json<string>;
        info: Json<string>;
    }
}

declare global {
    interface Window {
        CncharInfo: IInfo,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        info: IInfo;
    }
}

