import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface IInfo {
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

