let version = require('./version');
let {spell, tones, stroke, arg, has, _throw, _wran, dealUpLowFirst, removeTone, sumStroke, isCnChar, checkArgs, initCnchar} = require('./tool');
let dict = require('./dict');
let initSpellToWord = require('./spellToWord');
let initStrokeToWord = require('./strokeToWord');

function _spell (...args) {
    return spell(dict.spell, args);
}
function _stroke (...args) {
    return stroke(dict.stroke, args);
}

function initStrProto () {
    String.prototype.spell = function (...args) {
        return _spell(this, ...args);
    };
    String.prototype.stroke = function (...args) {
        return _stroke(this, ...args);
    };
}
function use (...plugins) {
    plugins.forEach(f => {
        if (typeof f === 'function') {
            f(cnchar);
        }
    });
}

let cnchar = {
    version,
    spell: _spell,
    stroke: _stroke,
    check: true,
    _origin: {
        spell: _spell,
        stroke: _stroke,
    },
    plugins: [],
    use,
    _: {arg, has, _throw, tones, _wran, dealUpLowFirst, removeTone, sumStroke, isCnChar, checkArgs, dict: {}},
    type: {
        spell: arg,
        stroke: {
            array: arg.array
        }
    }
};

function init () {
    initStrProto();
    initCnchar(cnchar);
    initSpellToWord(cnchar);
    initStrokeToWord(cnchar);
    if (typeof window !== 'undefined') {
        window.cnchar = window.CnChar = cnchar;
    }
}

init();

module.exports = cnchar;