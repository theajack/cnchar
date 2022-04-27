import {Json, ConvertInterface, ITransformReturn} from './common';
import {AllArgs, SpellArg, ToneType, TypeProp} from '.';

export declare interface ISetIntoJson {
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

export declare interface IHas {(args: Array<AllArgs>, name: AllArgs): boolean;}

export declare interface IFunc<T = void, A = string> {(arg: A): T;}

export declare interface IDealUpLowFirst {
    (
        res: Array<Array<string>> | Array<string>,
        args: Array<SpellArg>
    ): void;
}

export declare interface IRemoveTone {
    (spell: string, tone: boolean): {spell: string, tone?: ToneType, index?: number};
}

export declare interface IMapJson {
    (
        key: Json | string,
        value: undefined | any,
        cb: (key: string, value: any) => void
    ): void;
}

export declare interface ICheckArgs {
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
export declare interface ITransformTone {
    (
        spell: string,
        needTone?: boolean,
        type?: 'low' | 'up'
    ): ITransformReturn;
}

export declare interface ICncharTool {
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
    poly?: boolean;
    [prop: string]: any;
}

