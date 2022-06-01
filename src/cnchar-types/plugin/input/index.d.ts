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
    spellTone?: boolean;
}

export interface IInput {
    (input: string, options: IInputOptions): IInputResult;
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

