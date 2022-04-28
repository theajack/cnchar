import {ICnChar, ToneType} from '.';

export declare interface Json<T = any> {
    [prop: string]: T
}

export declare interface ISpellInfoReturn {
    spell: string;
    initial: string;
    final: string;
    tone: ToneType;
    index: number;
}

export declare interface ISpellInfo extends Function {
    (spell: string): ISpellInfoReturn;
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
    pluginName: string;
    install(cnchar: ICnChar): void;
    args?: Json;
}
export declare interface ConvertInterface {
    simpleToSpark(sentence: string): string;
    simpleToTrad(sentence: string): string;
    sparkToSimple(sentence: string): string;
    sparkToTrad(sentence: string): string;
    tradToSimple(sentence: string): string;
    tradToSpark(sentence: string): string;
}
declare global {
    interface Window {
        cnchar: ICnChar,
        CnChar: ICnChar,
    }
}
