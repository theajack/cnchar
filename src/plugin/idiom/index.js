// powerd by hanzi-writer v2.2.2
const idiom = require('./writer');


function main (cnchar) {
    if (cnchar.plugins.indexOf('idiom') !== -1) {
        return;
    }
    cnchar.plugins.push('idiom');
    cnchar.idiom = idiom;
}

function init (cnchar) {
    if (typeof window === 'object') {
        window.CncharIdiom = idiom;
    }
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
    }
}

idiom.init = init;

init();

module.exports = idiom;