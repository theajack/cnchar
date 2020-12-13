import {CnCharInterface, ToneType} from '.';

export declare interface Json<T = any> {
    [prop: string]: T
}

export declare interface spellInfoReturnInterface {
    spell: string;
    initial: string;
    final: string;
    tone: ToneType;
    index: number;
}

export declare interface SpellInfoInterface extends Function {
    (spell: string): spellInfoReturnInterface;
    tones: Array<string>,
    initials: Array<string>
}

export declare interface ITransformReturn {
    spell: string,
    tone: ToneType,
    index: number,
    isTrans: boolean
}

export declare interface IPlugin {
    (cnchar: CnCharInterface): void;
    init?(cnchar: CnCharInterface): void;
}

declare global {
    interface Window {
        cnchar: CnCharInterface,
        CnChar: CnCharInterface,
    }
}
