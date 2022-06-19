import version from './version';
import {spell, tones, stroke, arg,
    dealUpLowFirst, removeTone, sumStroke,
    checkArgs, initCnchar, transformTone,
    shapeSpell,
    checkTrad} from './utils/tool';
import {has, isPolyWord} from './utils/util';
import {
    _throw, _warn, isCnChar, mapJson, pickRandomChar,
    pickRandomEle, randomNum, shuffle, hasTone
} from '@common/util';
import dict from './dict';
import {setSpellDefault, setIntoJson, setSpell, setStrokeCount} from './utils/config';
import {initSpellToWord, spellToWord, spellInfo} from './utils/spellToWord';
import {initStrokeToWord, strokeToWord} from './utils/strokeToWord';
import {compareSpell, sortSpell, compareStroke, sortStroke, initSort} from './utils/sort';
import {ICnChar, SpellArg, StrokeArg} from 'cnchar-types/main';
import {extendCnChar} from './utils/extend';
import {getPlugins, hasPlugin, installPlugin} from './utils/plugins';
import {getResourceBase, setResourceBase} from './utils/resource';
import {Env} from '@common/adapter';

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
    env: Env,
    version,
    spell: _spell,
    stroke: _stroke,
    check: true,
    _origin: {
        spell: _spell,
        stroke: _stroke,
    },
    plugins: getPlugins(),
    hasPlugin,
    use: installPlugin,
    _: {
        arg, has, _throw, tones, setIntoJson, _warn, dealUpLowFirst, removeTone,
        sumStroke, isCnChar, checkArgs, transformTone, dict: {}, mapJson, checkTrad,
        getResourceBase, pickRandomEle, shuffle, randomNum, pickRandomChar,
    },
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
    hasTone,
    spellToWord,
    strokeToWord,
    spellInfo,
    setResourceBase,
    ...extendCnChar(),
    pluginName: 'cnchar',
    dict,
};

function init (): void {
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