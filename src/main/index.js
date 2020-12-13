const version = require('./version');
const {spell, tones, stroke, arg,
    dealUpLowFirst, removeTone, sumStroke,
    checkArgs, initCnchar, transformTone,
    shapeSpell} = require('./tool');
const {has, _throw, _warn, isCnChar, isPolyWord, mapJson} = require('./util');
const dict = require('./dict');
const {setSpellDefault, setIntoJson, setSpell, setStrokeCount} = require('./config');
const {initSpellToWord} = require('./spellToWord');
const initStrokeToWord = require('./strokeToWord');
const {compareSpell, sortSpell, compareStroke, sortStroke, initSort} = require('./sort');

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

const cnchar = {
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
    _: {arg, has, _throw, tones, setIntoJson, _warn, dealUpLowFirst, removeTone,
        sumStroke, isCnChar, checkArgs, transformTone, dict: {}, mapJson, poly: false},
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
    sortStroke,
    setSpellDefault,
    setSpell,
    setStrokeCount,
    isPolyWord,
    shapeSpell,
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