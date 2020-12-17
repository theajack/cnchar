import {ICnChar} from 'cnchar-types/main';
import {idiom, arg, setCnchar} from './idiom';
import {IIdiom} from 'cnchar-types/plugin/idiom';

function main (cnchar: ICnChar & {idiom?: IIdiom}) {
    if (cnchar.plugins.indexOf('idiom') !== -1) {
        return;
    }
    cnchar.plugins.push('idiom');
    cnchar.idiom = idiom;
    cnchar.type.idiom = arg;
}

function init (cnchar?: ICnChar) {
    if (typeof window === 'object' && !window.CncharIdiom) {
        window.CncharIdiom = idiom;
    }
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
        setCnchar(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
        setCnchar(cnchar);
    }
}

idiom.init = init;

init();

export default idiom;