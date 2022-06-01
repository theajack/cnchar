import {Json} from '../../main/common';
import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface IInfoResult {
    fiveElementType: string;
    methodType: string;
    markSpell: string;
}

export interface IInfo {
    (input: string): IInfoResult[];
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

