const radicals = require('./radicals.json');

function main(cnchar) {
    if (cnchar.plugins.indexOf('radical') !== -1) {
        return;
    }
    cnchar.plugins.push('radical');
    cnchar.radical = radical;
}

function init(cnchar) {
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
    }
}

function radical(char) {
    return radicals[char];
}

init();

module.exports = init;
