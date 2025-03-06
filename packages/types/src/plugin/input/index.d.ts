import {Json} from '../../main/common';
import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface IInputItemBase {
    split: string[],
    words: string[],
}

export interface IInputItem extends IInputItemBase {
    association: string[],
}

export type IInputResultBase = Array<IInputItemBase>;

export type IInputResult = Array<IInputItem>

export interface IInputOptions {
    type?: 'spell' | 'wubi',
    debounce?: number,
    onResult?: (result: IInputResult) => void,
    associate?: boolean;
    wubiVersion?: '86' | '98',
    wubiMode?: 'trad' | 'simple' | 'both',
}

export interface IWubiCodeData {
    v86: string;
    v98: string;
}

export interface IInput {
    (input: string, options: IInputOptions): IInputResult;
    setWubiCode(json: Json<IWubiCodeData>): void;
    setWubiCode(words: string, info: IWubiCodeData): void;
    dict: {wubi: Json<string>}
}

declare global {
    interface Window {
        CncharInput: IInput,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        input: IInput;
    }
}

