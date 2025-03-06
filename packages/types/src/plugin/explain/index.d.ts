import {Json} from '../../main/common';
import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface IExplain {
    (words: string, ...args: string[]): Promise<string>;
    addExplain(json: Json<string>): void;
    addExplain(words: string, explain: string): void;
    setResourceBase(url: string): void;
    dict: {temp: Json<string>};
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

