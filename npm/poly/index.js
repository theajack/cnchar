"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var polyPhrases = require('./polyphone-phrase-simple.json');

var _cnchar = null;
var _ = {}; // 工具方法
// let arg = {origin:'origin'}

var arg = {
  poly: 'poly'
};

var _spell;

function _poly() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var str = args[0]; // 待处理的字符串

  args = args.splice(1);

  _.checkArgs('spell', args, true);

  if (_.has(args, _.arg.poly)) return _spell.apply(void 0, [str].concat(_toConsumableArray(args)));
  var newArgs = [_.arg.array]; // 先用数组

  var tone = _.has(args, _.arg.tone); // // 多音字参数参数将被忽略
  // if(_.has(args,_.arg.poly))
  //     _._warn('多音字参数 poly 被忽略')


  if (tone) {
    newArgs.push(_.arg.tone);
  } // 音调参数
  // 其他几个参数等获取到多音拼音之后在处理


  var res = _spell.apply(void 0, [str].concat(newArgs)); // 获取


  for (var k in polyPhrases) {
    var index = str.indexOf(k);

    if (index !== -1) {
      // 命中了多音词词库
      var pa = polyPhrases[k].split(' '); // 多音词拼音数组

      for (var i = 0; i < pa.length; i++) {
        res[index + i] = _.removeTone(pa[i], tone).spell;
      }
    }
  }

  _.dealUpLowFirst(res, args);

  if (!_.has(args, _.arg.array)) {
    res = res.join('');
  }

  return res;
}

function setPolyPhrase(word, spell) {
  if (_typeof(word) === 'object') {
    for (var k in word) {
      setPolyPhrase(k, word[k]);
    }

    return;
  }

  polyPhrases[word] = spell.split(' ').map(function (s) {
    return _cnchar.shapeSpell(s);
  }).join(' ');
}

function main(cnchar) {
  if (cnchar.plugins.indexOf('poly') !== -1) {
    return;
  }

  cnchar.setPolyPhrase = setPolyPhrase;
  cnchar.plugins.push('poly');
  _spell = cnchar._origin.spell;
  _ = cnchar._;
  _cnchar = cnchar;

  var _new = function _new() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (_.has(args, arg.poly)) {
      // 有 poly参数则不使用多音词模式
      return _spell.apply(void 0, args);
    }

    return _poly.apply(void 0, args);
  };

  cnchar.spell = _new;

  String.prototype.spell = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _new.apply(void 0, [this].concat(args));
  }; // cnchar.type.spell.origin = arg.origin;


  cnchar._.poly = true;

  if (cnchar._reinitSpellPoly) {
    cnchar._reinitSpellPoly();

    delete cnchar._reinitSpellPoly;
  }
}

function init(cnchar) {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.CnChar) {
    main(window.CnChar);
  } else if (typeof cnchar !== 'undefined') {
    main(cnchar);
  }
}

init();
module.exports = init;