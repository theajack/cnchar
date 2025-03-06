import {Json, ConvertInterface, ITransformReturn} from './common';
import {AllArgs, SpellArg, ToneType, TypeProp} from '.';

export interface ISetIntoJson {
    (option: {
        target: Json<string>,
        key: string | Json<string>,
        value?: string,
        isSpell: boolean
    }): void
}

export declare type TSpellArg = {
    [prop in SpellArg]: SpellArg
}

export interface IHas {(args: Array<AllArgs>, name: AllArgs): boolean;}

export interface IFunc<T = void, A = string> {(arg: A): T;}
export interface IOptionFunc<T = void, A = string> {(arg?: A): T;}

export interface IDealUpLowFirst {
    (
        res: Array<Array<string>> | Array<string>,
        args: Array<SpellArg>
    ): void;
}

export interface IRemoveTone {
    (spell: string, tone: boolean): {spell: string, tone?: ToneType, index?: number};
}

export interface IMapJson<T=any> {
    (
        key: Json<T> | string,
        value: undefined | T,
        cb: (key: string, value: T) => void
    ): void;
}

export interface ICheckArgs {
    (
        type: TypeProp,
        args: Array<AllArgs>,
        jumpNext?: boolean
    ): void;
}

/**
    将拼音转换成json数据
    lv2 => {spell:'lü', tone: 2, index: 2, isTrans: true}
    lǘ => {spell:'lü', tone: 2, index: 2, isTrans: false}
    needTone = true: lv2 => {spell:'lǘ', tone: 2, index: 2, isTrans: true}
 */
export interface ITransformTone {
    (
        spell: string,
        needTone?: boolean,
        type?: 'low' | 'up'
    ): ITransformReturn;
}

export interface ICncharTool {
    arg: TSpellArg;
    has: IHas;
    _throw: IFunc<never>;
    tones: string;
    setIntoJson: ISetIntoJson;
    _warn: IFunc;
    dealUpLowFirst: IDealUpLowFirst;
    removeTone: IRemoveTone;
    sumStroke: IFunc<number, Array<number>>;
    isCnChar: IFunc<boolean>;
    checkArgs: ICheckArgs;
    checkTrad(input: string | string[], args: string[]): string | string[];
    transformTone: ITransformTone;
    convert?: ConvertInterface;
    dict: {
        getTradOrders?(): Json<string>;
        getTradCount?(): Json<string>;
    };
    mapJson: IMapJson;
    getResourceBase(): string;
    pickRandomEle<T = string> (arr: T[], n?: number): T[];
    pickRandomChar(str: string, n?: number): string;
    
    shuffle<T=string> (array: T[]): T[];
    randomNum(a: number, b: number): number;
    poly?: boolean;
    [prop: string]: any;
}

