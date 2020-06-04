"use strict";

var _require = require('./compareSpell'),
    initToneCodes = _require.initToneCodes,
    getCharCode = _require.getCharCode;

var _cnchar = null;
var arg = {
  'tone': 'tone',
  'desc': 'desc',
  'array': 'array'
};

function initSort(__cnchar) {
  _cnchar = __cnchar;
  initToneCodes(__cnchar);
}

var TYPE = {
  MORE: 'more',
  // 大于
  LESS: 'less',
  // 小于
  EVEN: 'even',
  // 等于
  ERROR: 'error'
};

function pretreat(spell, tone) {
  var arr = ['low'];

  if (tone) {
    arr.push('tone');
  }

  if (_cnchar.isCnChar(spell)) {
    var _cnchar2;

    return (_cnchar2 = _cnchar).spell.apply(_cnchar2, [spell].concat(arr));
  }

  return _cnchar._.transformTone(spell, tone).spell;
}

function compareSpell(spell1, spell2) {
  var tone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  spell1 = pretreat(spell1, tone);
  spell2 = pretreat(spell2, tone);

  for (var i = 0; i < spell1.length; i++) {
    if (!spell2[i]) {
      // spell1与spell2值前面拼音一样，但是spell1长度大于spell2 说明 spell1 > spell2
      return TYPE.MORE;
    }

    var code = getCharCode(spell1[i], tone);
    var code2 = getCharCode(spell2[i], tone);

    if (code > code2) {
      // spell1 > spell2
      return TYPE.MORE;
    } else if (code < code2) {
      // spell1 < spell2
      return TYPE.LESS;
    }
  }

  if (spell1.length === spell2.length) {
    return TYPE.EVEN;
  }

  return TYPE.LESS; // spell1与spell2值前面拼音一样，但是spell1长度小于spell2 说明 中 < spell2
}

function sortSpell(spells) {
  var isString = false;

  if (typeof spells === 'string') {
    spells = spells.split('');
    isString = true;
  }

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var tone = args.indexOf(arg.tone) !== -1;
  var desc = args.indexOf(arg.desc) !== -1;
  var more = desc ? -1 : 1;
  var less = more * -1;
  var result = spells.sort(function (a, b) {
    var res = compareSpell(a, b, tone);

    if (res === TYPE.MORE) {
      return more;
    }

    if (res === TYPE.LESS) {
      return less;
    }

    return 0;
  });

  if (isString) {
    return result.join('');
  }

  return result;
}

function compareStroke(stroke1, stroke2) {
  if (typeof stroke1 === 'string') {
    stroke1 = _cnchar.stroke(stroke1);
  }

  if (typeof stroke2 === 'string') {
    stroke2 = _cnchar.stroke(stroke2);
  }

  if (stroke1 > stroke2) {
    return TYPE.MORE;
  }

  if (stroke1 < stroke2) {
    return TYPE.LESS;
  }

  return TYPE.EVEN;
}

function sortStroke(strokes) {
  var isString = false;

  if (typeof strokes === 'string') {
    strokes = strokes.split('');
    isString = true;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var desc = args.indexOf(arg.desc) !== -1;
  var more = desc ? -1 : 1;
  var less = more * -1;
  var result = strokes.sort(function (a, b) {
    var res = compareStroke(a, b);

    if (res === TYPE.MORE) {
      return more;
    }

    if (res === TYPE.LESS) {
      return less;
    }

    return 0;
  });

  if (isString) {
    return result.join('');
  }

  return result;
}

module.exports = {
  sortSpell: sortSpell,
  sortStroke: sortStroke,
  initSort: initSort,
  compareSpell: compareSpell,
  compareStroke: compareStroke
};