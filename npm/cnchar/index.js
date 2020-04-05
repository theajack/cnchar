"use strict";

var version = require('./version');

var _require = require('./tool'),
    spell = _require.spell,
    tones = _require.tones,
    stroke = _require.stroke,
    arg = _require.arg,
    has = _require.has,
    _throw = _require._throw,
    _wran = _require._wran,
    dealUpLowFirst = _require.dealUpLowFirst,
    removeTone = _require.removeTone,
    sumStroke = _require.sumStroke,
    isCnChar = _require.isCnChar,
    checkArgs = _require.checkArgs,
    initCnchar = _require.initCnchar;

var dict = require('./dict');

var initSpellToWord = require('./spellToWord');

var initStrokeToWord = require('./strokeToWord');

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
      f(cnchar);
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
    _wran: _wran,
    dealUpLowFirst: dealUpLowFirst,
    removeTone: removeTone,
    sumStroke: sumStroke,
    isCnChar: isCnChar,
    checkArgs: checkArgs,
    dict: {}
  },
  type: {
    spell: arg,
    stroke: {
      array: arg.array
    }
  }
};

function init() {
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