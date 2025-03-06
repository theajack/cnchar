import {Json} from '../../main/common';
import {ICnChar, OrderToWordArg, StrokeArg} from '../../main/index';

export declare type TOrderToWordArg = {
    [prop in OrderToWordArg]: OrderToWordArg;
}
export interface TOrderArg {
    [prop: string]: StrokeArg;
}

export declare type TStrokeOrderReturn = string | number | Array<string | object>;

export declare type OrderName = '横折折撇' | '竖弯' | '横折' | '撇点' | '横斜钩' | '横' | '捺' | '横折钩' | '竖' | '竖钩' | '点' | '撇' | '撇折' | '竖折撇' | '横折折折钩' | '竖折折钩' | '提' | '弯钩' | '斜钩' | '横折折' | '横撇' | '横折提' | '横折折折' | '竖提' | '竖弯钩'
| '竖折折' | '横撇弯钩' | '卧钩' | '横折弯' | '横钩';

declare interface ISetOrder {
    (word: string, order: string): void;
    (json: {[key: string]: string}): void;
}

export interface IOrderToWord {
    (orders: string | Array<OrderName>, ...args: Array<OrderToWordArg>): string | Array<string>;
    orders: Json;
    _base: IBase;
}

export interface IBase {
    (
        res: string[],
        letters: string,
        args: {[prop in OrderToWordArg]: boolean},
        dict: Json<string>
    ): string[];
}

export interface ICnCharOrder {
    setOrder?: ISetOrder;
    orderToWord?: IOrderToWord;
}


export interface IOrder {
    setOrder: ISetOrder;
    orderToWord: IOrderToWord;
    dict: {
        orders: Json;
        strokeTable: Json;
    }
}

declare global {
    interface String {
        stroke(...args: Array<StrokeArg>): number | Array<any>;
    }
    interface Window {
        CncharOrder: IOrder,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        order: IOrder;
        setOrder: ISetOrder;
        orderToWord: IOrderToWord;
    }
}