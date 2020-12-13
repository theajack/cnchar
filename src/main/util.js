const infoDict = require('./info-dict.json');

function mapJson (key, value, cb) {
    if (typeof key === 'object') {
        for (const k in key) {
            cb(k, key[k]);
        }
        return;
    }
    cb(key, value);
}


function isCnChar (word) {
    const unicode = word.charCodeAt(0);
    return unicode >= 19968 && unicode <= 40869;
}

function has (args, name) {
    return args.indexOf(name) !== -1;
}

function isPolyWord (word) {
    if (!word) {
        return false;
    }
    if (word.length > 1) {
        word = word[0];
    }
    if (!isCnChar(word)) {
        return false;
    }
    return infoDict.polyWord.indexOf(word) !== -1;
}

function _throw (err) {
    throw new Error('CnChar Error:' + err);
}
function _warn (err) {
    console.warn('CnChar Warning:' + err);
}

module.exports = {
    mapJson,
    isCnChar,
    has,
    isPolyWord,
    _throw,
    _warn
};


