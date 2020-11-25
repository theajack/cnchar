"use strict";

var version = require('./version');

var _require = require('./tool'),
    spell = _require.spell,
    tones = _require.tones,
    stroke = _require.stroke,
    arg = _require.arg,
    dealUpLowFirst = _require.dealUpLowFirst,
    removeTone = _require.removeTone,
    sumStroke = _require.sumStroke,
    checkArgs = _require.checkArgs,
    initCnchar = _require.initCnchar,
    transformTone = _require.transformTone,
    shapeSpell = _require.shapeSpell;

var _require2 = require('./util'),
    has = _require2.has,
    _throw = _require2._throw,
    _warn = _require2._warn,
    isCnChar = _require2.isCnChar,
    isPolyWord = _require2.isPolyWord,
    mapJson = _require2.mapJson;

var dict = require('./dict');

var _require3 = require('./config'),
    setSpellDefault = _require3.setSpellDefault,
    setIntoJson = _require3.setIntoJson,
    setSpell = _require3.setSpell,
    setStrokeCount = _require3.setStrokeCount;

var _require4 = require('./spellToWord'),
    initSpellToWord = _require4.initSpellToWord;

var initStrokeToWord = require('./strokeToWord');

var _require5 = require('./sort'),
    compareSpell = _require5.compareSpell,
    sortSpell = _require5.sortSpell,
    compareStroke = _require5.compareStroke,
    sortStroke = _require5.sortStroke,
    initSort = _require5.initSort;

function _spell() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return spell(dict.spell, args);
}

function _stroke() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return stroke(dict.stroke, args);
}

function initStrProto() {
  String.prototype.spell = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _spell.apply(void 0, [this].concat(args));
  };

  String.prototype.stroke = function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _stroke.apply(void 0, [this].concat(args));
  };
}

function use() {
  for (var _len5 = arguments.length, plugins = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    plugins[_key5] = arguments[_key5];
  }

  plugins.forEach(function (f) {
    if (typeof f === 'function') {
      if (typeof f.init === 'function') {
        f.init(cnchar);
      } else {
        f(cnchar);
      }
    }
  });
}

var cnchar = {
  version: version,
  spell: _spell,
  stroke: _stroke,
  check: true,
  _origin: {
    spell: _spell,
    stroke: _stroke
  },
  plugins: [],
  use: use,
  _: {
    arg: arg,
    has: has,
    _throw: _throw,
    tones: tones,
    setIntoJson: setIntoJson,
    _warn: _warn,
    dealUpLowFirst: dealUpLowFirst,
    removeTone: removeTone,
    sumStroke: sumStroke,
    isCnChar: isCnChar,
    checkArgs: checkArgs,
    transformTone: transformTone,
    dict: {},
    mapJson: mapJson
  },
  type: {
    spell: arg,
    stroke: {
      array: arg.array
    }
  },
  // 工具方法
  transformTone: transformTone,
  isCnChar: isCnChar,
  compareSpell: compareSpell,
  compareStroke: compareStroke,
  sortSpell: sortSpell,
  sortStroke: sortStroke,
  setSpellDefault: setSpellDefault,
  setSpell: setSpell,
  setStrokeCount: setStrokeCount,
  isPolyWord: isPolyWord,
  shapeSpell: shapeSpell
};

function init() {
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