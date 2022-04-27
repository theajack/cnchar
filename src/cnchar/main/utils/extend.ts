import {IIdiom} from 'cnchar-types/plugin/idiom';
import {IDraw} from 'cnchar-types/plugin/draw/common';
import {_warn} from '@common/util';
import {IOrderToWord, ISetOrder} from 'cnchar-types/plugin/order';
import {ISetPolyPhrase} from 'cnchar-types/plugin/poly';
import {IRadical} from 'cnchar-types/plugin/radical';
import {IConverter} from 'cnchar-types/plugin/trad';
import {IXHY} from 'cnchar-types/plugin/xhy';
import {IWords} from 'cnchar-types/plugin/words';
import {IExplain} from 'cnchar-types/plugin/explain';
import {IVoice} from 'cnchar-types/plugin/voice';

export function extendCnChar (): {
    idiom: IIdiom;
    draw: IDraw;
    setOrder: ISetOrder;
    orderToWord: IOrderToWord;
    setPolyPhrase: ISetPolyPhrase;
    radical: IRadical;
    convert: IConverter;
    xhy: IXHY;
    words: IWords;
    explain: IExplain;
    voice: IVoice;
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
        xhy,
        words: fn('words') as IWords,
        explain: fn('explain') as IExplain,
        voice: fn('voice') as IVoice,
    };
}

const fn = (name: string) => {
    const result = (() => {
        _warn(`请先调用 cnchar-${name}`);
    }) as any;
    result.__default = true;
    return result;
};