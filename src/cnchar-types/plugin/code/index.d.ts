import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface ICode {
}

declare global {
    interface Window {
        CncharCode: ICode,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        code: ICode;
    }
}

