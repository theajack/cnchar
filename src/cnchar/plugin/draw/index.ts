// powerd by hanzi-writer v2.2.2
import {ICnChar} from 'cnchar-types/main';
import './promise-polyfill';
import {IDraw} from 'cnchar-types/plugin/draw/common';
import draw from './writer';


export default function main (cnchar: ICnChar & {draw?: IDraw}): void {
    if (cnchar.plugins.indexOf('draw') !== -1) {
        return;
    }
    cnchar.plugins.push('draw');
    cnchar.draw = draw;
}

function init (cnchar?: ICnChar): void {
    if (typeof window === 'object') {
        window.CncharDraw = draw;
    }
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
    }
}

draw.init = init;

init();