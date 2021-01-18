import {IIdiom} from 'cnchar-types/plugin/idiom';
import {IDraw} from 'cnchar-types/plugin/draw/common';
import {_warn} from './util';
import {IOrderToWord, ISetOrder} from 'cnchar-types/plugin/order';
import {ISetPolyPhrase} from 'cnchar-types/plugin/poly';
import {IRadical} from 'cnchar-types/plugin/radical';
import {IConverter} from 'cnchar-types/plugin/trad';
import {IXHY} from 'cnchar-types/plugin/xhy';

export function extendCnChar (): {
    idiom: IIdiom;
    draw: IDraw;
    setOrder: ISetOrder;
    orderToWord: IOrderToWord;
    setPolyPhrase: ISetPolyPhrase;
    radical: IRadical;
    convert: IConverter;
    xhy: IXHY;
    } {

    const draw = fn('draw') as unknown as IDraw;
    const idiom = fn('idiom');
    const radical = fn('radical') as unknown as IRadical;
    const xhy = fn('xhy') as unknown as IXHY;
    
    if (typeof window === 'object') {
        window.CncharIdiom = idiom;
        window.CncharDraw = draw;
        window.CncharRadical = radical;
        window.CncharXHY = xhy;
    }
    
    return {
        idiom,
        draw,
        setOrder: fn('order'),
        orderToWord: fn('order') as unknown as IOrderToWord,
        setPolyPhrase: fn('poly'),
        radical,
        convert: {
            type: {trad: 'trad', simple: 'simple', spark: 'spark'},
            simpleToSpark () {fn('radical'); return '';},
            simpleToTrad () {fn('radical'); return '';},
            sparkToSimple () {fn('radical'); return '';},
            sparkToTrad () {fn('radical'); return '';},
            tradToSimple () {fn('radical'); return '';},
            tradToSpark () {fn('radical'); return '';},
        },
        xhy
    };
}

const fn = (name: string) => {
    return () => {
        _warn(`请先调用 cnchar-${name}`);
    };
};