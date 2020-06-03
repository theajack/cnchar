let version = require('./version');
let {spell, tones, stroke, arg, has, _throw, _wran,
    dealUpLowFirst, removeTone, sumStroke, isCnChar,
    checkArgs, initCnchar, transformTone} = require('./tool');
let dict = require('./dict');
let {initSpellToWord} = require('./spellToWord');
let initStrokeToWord = require('./strokeToWord');
let {compareSpell, sortSpell, compareStroke, sortStroke, initSort} = require('./sort');

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
            if (typeof f.init === 'function') {
                f.init(cnchar);
            } else {
                f(cnchar);
            }
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
    _: {arg, has, _throw, tones, _wran, dealUpLowFirst, removeTone,
        sumStroke, isCnChar, checkArgs, transformTone, dict: {}},
    type: {
        spell: arg,
        stroke: {
            array: arg.array
        }
    },
    // 工具方法
    transformTone,
    isCnChar,
    compareSpell,
    compareStroke,
    sortSpell,
    sortStroke
};

function init () {
    initStrProto();
    initCnchar(cnchar);
    initSpellToWord(cnchar);
    initStrokeToWord(cnchar);
    initSort(cnchar);
    if (typeof window !== 'undefined') {
        window.cnchar = window.CnChar = cnchar;
    }
}

init();

module.exports = cnchar;