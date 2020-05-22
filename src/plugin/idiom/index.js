const {idiom, arg, setCnchar} = require('./idiom');

function main (cnchar) {
    if (cnchar.plugins.indexOf('idiom') !== -1) {
        return;
    }
    cnchar.plugins.push('idiom');
    cnchar.idiom = idiom;
    cnchar.type.idiom = arg;
}

function init (cnchar) {
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

module.exports = idiom;