import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'
export interface IWords {
    (words: string, ...args: string[]): string[];
    addWords(words: string | string[]): void;
}

declare global {
    interface Window {
        CncharWords: IWords,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        words: IWords;
    }
}