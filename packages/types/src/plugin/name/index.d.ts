import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export type TGender = 'boy' | 'girl' | 'both';

export interface INameOptions {
    number?: number; // 生成多少个姓名 默认为1
    gender?: TGender; // 性别 默认为both
    length?: number; // 名字长度 如果input包含有通配符 * 则该参数无效 默认值为3
}

export interface IName {
    (input: string, options?: INameOptions): string[];
    isSurname(input: string): boolean;
    isName(input: string): boolean;
    addName(input: string, gender?: TGender): void;
    dict: {
        name: {
            boy: string;
            girl: string;
        };
        surname: string;
    }
}

declare global {
    interface Window {
        CncharName: IName;
    }
}

declare module '../../main/index' {
    interface ICnChar {
        name: IName;
    }
}

