declare const order: Function;

declare type orderToWordArg = 'match'  | 'matchorder' | 'contain' | 'start' | 'array' | 'simple' | 'trad';

declare type orderName = '横折折撇' | '竖弯' | '横折' | '撇点' | '横斜钩' | '横' | '捺' | '横折钩' | '竖' | '竖钩' | '点' | '撇' | '撇折' | '竖折撇' | '横折折折钩' | '竖折折钩' | '提' | '弯钩' | '斜钩' | '横折折' | '横撇' | '横折提' | '横折折折' | '竖提' | '竖弯钩'
    | '竖折折' | '横撇弯钩' | '卧钩' | '横折弯' | '横钩';

declare module 'cnchar' {
    interface CnCharStatic {
        orderToWord: {
            (orders: string | Array<orderName>, ...args: Array<orderToWordArg>): string | Array<string>;
            orders: object;
        };
        setOrder(word: string, order: string): void;
        setOrder(json: {[key: string]: string}): void;
    }
}

export default order;