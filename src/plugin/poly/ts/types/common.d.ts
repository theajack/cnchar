import {ICnChar} from 'cnchar/types';
import {Json} from 'cnchar/types/common';

export declare interface IInitPoly {
    (cnchar?: ICnChar): void;
}

export declare interface ISetPolyPhrase {
    (word: string, spell: string): void;
    (json: Json<string>): void;
}

declare module 'cnchar' {
    interface CnCharStatic {
        setPolyPhrase: ISetPolyPhrase;
    }
}