import {ICnChar} from 'cnchar/types';
import {IXHY, IInitXHY} from './types/common';
import {xhy, arg, addXhy, setCnchar} from './xhy';


function main (cnchar: ICnChar & {xhy?: IXHY}): void {
    if (cnchar.plugins.indexOf('xhy') !== -1) {
        return;
    }
    setCnchar(cnchar);
    cnchar.plugins.push('xhy');
    cnchar.xhy = xhy;
    cnchar.type.xhy = arg;
}

const init: IInitXHY = (cnchar?: ICnChar): void => {
    if (typeof window === 'object' && !window.CncharXHY) {
        window.CncharXHY = xhy;
    }
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
    }
};

xhy.init = init;

xhy.addXhy = addXhy;

init();

export default xhy;