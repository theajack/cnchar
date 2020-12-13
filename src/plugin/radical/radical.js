const radicals = require('./radicals.json');

const arg = {
    array: 'array'
};

let _cnchar = null;

function radical (...args) {
    if (args.length === 0) {
        console.warn('idiom: 请输入搜索项');
        return;
    }
    const input = args[0];
    args = args.slice(1);
    if (_cnchar) {
        _cnchar._.checkArgs('radical', args);
    }

    let res = '';
    for (let i = 0; i < input.length; i++) {
        const char = radicals[input[i]];
        if (char) {
            res += char;
        } else {
            res += input[i];
        }
    }
    if (args.indexOf(arg.array) !== -1 || input instanceof Array) {
        return res.split('');
    }
    return res;
}

function setCnchar (cnchar) {
    _cnchar = cnchar;
    // initToneCodes(cnchar);
}

function setRadical (key, value) {
    _cnchar._.mapJson(key, value, (k, v) => {
        radicals[k] = v;
    });
}

module.exports = {
    radical,
    arg,
    setCnchar,
    setRadical
};