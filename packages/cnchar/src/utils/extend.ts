import {IIdiom} from 'cnchar-types/plugin/idiom';
import {IDraw} from 'cnchar-types/plugin/draw/common';
import {_warn} from '@common/util';
import {IOrderToWord, ISetOrder} from 'cnchar-types/plugin/order';
import {IPoly, ISetPolyPhrase} from 'cnchar-types/plugin/poly';
import {IRadical} from 'cnchar-types/plugin/radical';
import {IConverter} from 'cnchar-types/plugin/trad';
import {IXHY} from 'cnchar-types/plugin/xhy';
import {IWords} from 'cnchar-types/plugin/words';
import {IExplain} from 'cnchar-types/plugin/explain';
import {IVoice} from 'cnchar-types/plugin/voice';
import {ICode} from 'cnchar-types/plugin/code';
import {IInput} from 'cnchar-types/plugin/input';
import {IRandom} from 'cnchar-types/plugin/random';
import {IInfo} from 'cnchar-types/plugin/info';
import {IName} from 'cnchar-types/plugin/name';

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
    code: ICode;
    input: IInput;
    random: IRandom;
    info: IInfo;
    trad: any;
    order: any;
    poly: any;
    name: any;
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
        trad: fn('trad'),
        order: fn('order'),
        xhy,
        words: fn('words') as IWords,
        explain: fn('explain') as IExplain,
        voice: fn('voice') as IVoice,
        code: fn('code') as ICode,
        input: fn('input') as IInput,
        random: fn('random') as IRandom,
        info: fn('info') as IInfo,
        poly: fn('poly') as IPoly,
        name: fn('name') as IName,
    };
}

const fn = (name: string) => {
    const result = (() => {
        _warn(`请先调用 cnchar-${name}`);
    }) as any;
    result.__default = true;
    return result;
};