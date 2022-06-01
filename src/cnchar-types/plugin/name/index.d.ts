import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface INameOptions {
    number?: number;
    gender?: 'boy' | 'girl' | 'both';
    length?: number; // 如果使用通配符 * 则该参数无效
}

export interface IName {
    (input: string, options?: INameOptions): string[];
    isSurname(input: string): boolean;
    isName(input: string): boolean;
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

