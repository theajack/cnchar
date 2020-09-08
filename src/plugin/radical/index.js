
const {radical, arg, setCnchar} = require('./radical');

function main (cnchar) {
    if (cnchar.plugins.indexOf('radical') !== -1) {
        return;
    }
    cnchar.plugins.push('radical');
    cnchar.radical = radical;
    cnchar.type.radical = arg;
}

function init (cnchar) {
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
}

radical.init = init;

init();

module.exports = radical;