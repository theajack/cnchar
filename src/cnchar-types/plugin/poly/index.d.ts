import {ICnChar} from '../../main';
import {Json} from '../../main/common';

export declare interface IInitPoly {
    (cnchar?: ICnChar): void;
}

export declare interface ISetPolyPhrase {
    (word: string, spell: string): void;
    (json: Json<string>): void;
}

declare module '../../main/index' {
    interface ICnChar {
        setPolyPhrase: ISetPolyPhrase;
    }
}