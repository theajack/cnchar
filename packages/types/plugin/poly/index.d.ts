import {ICnChar} from '../../main';
import {Json} from '../../main/common';

export interface IInitPoly {
    (cnchar?: ICnChar): void;
}

export interface ISetPolyPhrase {
    (word: string, spell: string): void;
    (json: Json<string>): void;
}

export interface IPoly {
    setPolyPhrase: ISetPolyPhrase;
    dict: Json;
}

declare global {
    interface Window {
        CncharPoly: IPoly,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        setPolyPhrase: ISetPolyPhrase;
        poly: IPoly;
    }
}