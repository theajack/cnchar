import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface IInput {
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

