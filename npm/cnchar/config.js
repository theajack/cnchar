"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defDict = require('./spell-default.json');

var spellDict = require('./spell-dict-jian.json');

var strokeDict = require('./stroke-count-jian.json');

var infoDict = require('./info-dict.json');

var _require = require('./util'),
    mapJson = _require.mapJson;

var _require2 = require('./tool'),
    transformTone = _require2.transformTone,
    spell = _require2.spell,
    arg = _require2.arg,
    shapeSpell = _require2.shapeSpell,
    stroke = _require2.stroke; // 设置多音字默认拼音


function setSpellDefault(word, spell) {
  setIntoJson({
    target: defDict,
    key: word,
    value: spell,
    isSpell: true
  });
}

function setIntoJson(_ref) {
  var target = _ref.target,
      key = _ref.key,
      value = _ref.value,
      _ref$isSpell = _ref.isSpell,
      isSpell = _ref$isSpell === void 0 ? false : _ref$isSpell;
  mapJson(key, value, function (k, v) {
    if (k && v) {
      target[k] = isSpell ? shapeSpell(v) : v;
    }
  });
}

function setIntoSpellBase(dict, currentSpell, word, spells) {
  var isPoly = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (_typeof(word) === 'object') {
    for (var k in word) {
      setIntoSpellBase(dict, currentSpell[k], k, word[k]);
    }

    return;
  }

  if (spells instanceof Array) {
    spells.forEach(function (spell) {
      setIntoSpellBase(dict, currentSpell, word, spell, true);
    });
    return;
  }

  var info = transformTone(spells);
  var str = dict[info.spell];

  if (currentSpell.length >= 1) {
    for (var i = 0; i < currentSpell.length; i++) {
      if (currentSpell[i].spell === info.spell && currentSpell[i].tone === info.tone) {
        return;
      }
    }

    if (!isPoly) isPoly = true;
  }

  var appendStr = "".concat(word).concat(info.tone + (isPoly ? 5 : 0));

  if (!str) {
    dict[info.spell] = "".concat(info.index, ":") + appendStr;
  } else {
    dict[info.spell] = str + appendStr;
  } // 修改之前的拼音


  if (currentSpell.length === 1) {
    var cinfo = currentSpell[0];
    dict[cinfo.spell] = dict[cinfo.spell].replace("".concat(word).concat(cinfo.tone), "".concat(word).concat(cinfo.tone + 5));
  }

  if (isPoly) {
    addPolyWord(word);
  }
}

function setIntoSpell(dict, word, spells) {
  var currentSpell;

  if (_typeof(word) === 'object') {
    currentSpell = {};

    for (var k in word) {
      currentSpell[k] = _getCurrentSpellInfo(dict, k);
    }
  } else {
    currentSpell = _getCurrentSpellInfo(dict, word);
  }

  setIntoSpellBase(dict, currentSpell, word, spells);
}

function _getCurrentSpellInfo(dict, word) {
  var s = spell(dict, [word, arg.tone, arg.poly]);

  if (s === word) {
    return [];
  }

  if (s.indexOf('|') !== -1) {
    s = s.substring(1, s.length - 1).split('|');
  } else {
    s = [s];
  }

  return s.map(function (sp) {
    return transformTone(sp);
  });
}

function setSpell(word, spells) {
  setIntoSpell(spellDict, word, spells);
}

function setStrokeCount(word, count) {
  mapJson(word, count, function (k, v) {
    var oldCount = stroke(strokeDict, [k]);

    if (oldCount === count) {
      return;
    } // 去除旧笔画数


    if (oldCount !== 0) {
      strokeDict[oldCount] = strokeDict[oldCount].replace(k, '');
    }

    if (strokeDict[v]) {
      strokeDict[v] += k;
    } else {
      strokeDict[v] = k;
    }
  });
}

function addPolyWord(word) {
  if (infoDict.polyWord.indexOf(word) === -1) {
    infoDict.polyWord += word;
  }
}

module.exports = {
  setSpellDefault: setSpellDefault,
  setIntoJson: setIntoJson,
  setSpell: setSpell,
  setIntoSpell: setIntoSpell,
  setStrokeCount: setStrokeCount
};