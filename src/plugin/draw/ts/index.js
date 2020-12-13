// powerd by hanzi-writer v2.2.2
require('./promise-polyfill');
const draw = require('./writer');


function main (cnchar) {
    if (cnchar.plugins.indexOf('draw') !== -1) {
        return;
    }
    cnchar.plugins.push('draw');
    cnchar.draw = draw;
}

function init (cnchar) {
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

module.exports = draw;
