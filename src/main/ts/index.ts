import version from './version';
import {spell, tones, stroke, arg,
    dealUpLowFirst, removeTone, sumStroke,
    checkArgs, initCnchar, transformTone,
    shapeSpell} from './tool';
import {has, _throw, _warn, isCnChar, isPolyWord, mapJson} from './util';
import dict from './dict';
import {setSpellDefault, setIntoJson, setSpell, setStrokeCount} from './config';
import {initSpellToWord, spellToWord, spellInfo} from './spellToWord';
import {initStrokeToWord, strokeToWord} from './strokeToWord';
import {compareSpell, sortSpell, compareStroke, sortStroke, initSort} from './sort';
import {ICnChar, SpellArg, StrokeArg} from './types';
import {IPlugin} from './types/common';

function _spell (...args: Array<string>): string | Array<string> {
    return spell(dict.spell, args);
}
function _stroke (...args: Array<string>): number | Array<number> {
    return stroke(dict.stroke, args);
}

function initStrProto () {
    String.prototype.spell = function (...args: Array<SpellArg>): string | Array<string> {
        return _spell(this as string, ...args);
    };
    String.prototype.stroke = function (...args: Array<StrokeArg>): number | Array<number> {
        return _stroke(this as string, ...args);
    };
}

const cnchar: ICnChar = {
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
        sumStroke, isCnChar, checkArgs, transformTone, dict: {}, mapJson},
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
    spellToWord,
    strokeToWord,
    spellInfo,
};

function use (...plugins: Array<IPlugin>) {
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

export default cnchar;