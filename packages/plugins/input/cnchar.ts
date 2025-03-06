import ICnChar from 'cnchar-types';
import {initSpellMap} from './util';
import {initTradMap} from './wubi';

let cnchar: ICnChar;

export function setCnchar (_cnchar: ICnChar) {
    cnchar = _cnchar;
    initSpellMap(cnchar.dict.spell);
    if (_cnchar.hasPlugin('trad')) {
        initTradMap(_cnchar.trad.dict?.wubi);
    }
}

export function getCnChar (): ICnChar|null{
    return cnchar || null;
}