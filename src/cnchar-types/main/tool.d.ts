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
    transformTone: ITransformTone;
    convert?: ConvertInterface;
    dict: {
        getTradOrders?(): Json<string>;
        getTradCount?(): Json<string>;
    };
    mapJson: IMapJson;
    poly?: boolean;
    [prop: string]: any;
}

