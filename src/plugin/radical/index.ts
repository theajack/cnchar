import {ICnChar} from 'cnchar/types';
import {IRadical, IInitRadical} from './types/common';

import {radical, arg, setCnchar, setRadical} from './radical';

function main (cnchar: ICnChar & {radical?: IRadical}) {
    if (cnchar.plugins.indexOf('radical') !== -1) {
        return;
    }
    cnchar.plugins.push('radical');
    cnchar.radical = radical;
    cnchar.type.radical = arg;
}

const init: IInitRadical = (cnchar?: ICnChar): void => {
    if (typeof window === 'object' && !window.CncharRadical) {
        window.CncharRadical = radical;
    }
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
        setCnchar(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
        setCnchar(cnchar);
    }
};

radical.init = init;
radical.setRadical = setRadical;

init();

export default radical;