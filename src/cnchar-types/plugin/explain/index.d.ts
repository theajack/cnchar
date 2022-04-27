import {Json} from '../../main/common';

export interface IExplain {
    (words: string, ...args: string[]): Promise<string>;
    addExplain(json: Json<string>): void;
    addExplain(words: string, explain: string): void;
}

declare global {
    interface Window {
        CncharExplain: IExplain,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        explain: IExplain;
    }
}

