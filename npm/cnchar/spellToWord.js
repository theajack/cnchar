"use strict";

var dict = require('./spell-dict-jian.json');

var initialDict = require('./initial.json');

var arg = {
  simple: 'simple',
  trad: 'trad',
  poly: 'poly',
  alltone: 'alltone',
  array: 'array'
};
var _ = {}; // 工具方法

function initSpellToWord(cnchar) {
  _ = cnchar._;
  cnchar.spellToWord = spellToWord;
  spellInfo.tones = _.tones.split('');
  spellInfo.initials = initialDict;
  cnchar.spellInfo = spellInfo;
  cnchar.type.spellToWord = arg;
} // 获取拼音信息 spell,tone,index,initial,final


function spellInfo(spell) {
  spell = spell.toLowerCase();

  var info = _.removeTone(spell, false);

  if (info.index === -1) {
    if (!dict[info.spell]) {
      throw new Error('【spellInfo】错误的拼音: ' + spell);
    }

    info.index = parseInt(dict[info.spell][0]) + 1;
  }

  var initial = '';
  var _final = info.spell;

  for (var i = 0; i < initialDict.length; i++) {
    if (info.spell.indexOf(initialDict[i]) === 0) {
      initial = initialDict[i];
      _final = info.spell.substr(initial.length);
      break;
    }
  }

  info.initial = initial;
  info["final"] = _final;
  return info;
}

function spellToWord() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var spell = args[0].toLowerCase();

  if (typeof spell !== 'string') {
    throw new Error('spellToWord: 输入必须是字符串');
  }

  if (spell.indexOf('v') !== -1) {
    spell = spell.replace('v', 'ü');
  }

  var tone = spell[spell.length - 1];

  if (parseInt(tone).toString() === tone) {
    spell = spell.substr(0, spell.length - 1);
    tone = parseInt(tone);
  } else {
    tone = false;
  }

  args = args.splice(1);

  _.checkArgs('spellToWord', args);

  var argRes = {
    simple: _.has(args, arg.simple),
    trad: _.has(args, arg.trad),
    poly: _.has(args, arg.poly),
    alltone: _.has(args, arg.alltone)
  };

  if (!argRes.simple && !argRes.trad) {
    argRes.simple = argRes.trad = true;
  }

  var res = '';

  var info = _.removeTone(spell, false);

  if (tone !== false) {
    info.tone = tone;
  }

  var str = dict[info.spell].substr(2);

  for (var i = 0; i < str.length; i += 2) {
    var word = str[i];

    var _tone = parseInt(str[i + 1]);

    var isPoly = _tone > 4;

    if (isPoly) {
      _tone = _tone - 5;
    }

    if (res.indexOf(word) === -1 && (argRes.alltone || _tone === info.tone)) {
      if (!argRes.poly || isPoly) {
        res += word;
      }
    }
  }

  if (argRes.trad && _.convert) {
    var tradRes = '';

    for (var _i = 0; _i < res.length; _i++) {
      var trad = _.convert.simpleToTrad(res[_i]);

      if (trad !== res[_i]) {
        tradRes += trad;
      }
    }

    if (!argRes.simple) {
      res = tradRes;
    } else {
      res += tradRes;
    }
  }

  if (_.has(args, arg.array)) {
    return res.split('');
  }

  return res;
}

module.exports = initSpellToWord;