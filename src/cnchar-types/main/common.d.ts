import {ICnChar, ToneType} from '.';

export interface Json<T = any> {
    [prop: string]: T
}

export interface ISpellInfoReturn {
    spell: string;
    initial: string;
    final: string;
    tone: ToneType;
    index: number;
}

export interface ISpellInfo extends Function {
    (spell: string): ISpellInfoReturn;
    tones: Array<string>,
    initials: Array<string>
}

export interface ITransformReturn {
    spell: string,
    tone: ToneType,
    index: number,
    isTrans: boolean
}

export interface IPluginBase {
    pluginName: string;
    dict?: Json;
}

export interface IPlugin extends Json {
    pluginName: string;
    dict?: Json;
    args?: Json;
    install?(cnchar: ICnChar): void | Json;

    getCnChar?(): ICnChar;
    installed?: boolean;
}

export interface IPluginObject extends IPluginBase {
}

export interface ConvertInterface {
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
