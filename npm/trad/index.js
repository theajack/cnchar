"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var countDict = require('./stroke-count-fan.json');

var orderDict = require('./stroke-order-fan.json'); // 简-烦 一对多
// https://blog.csdn.net/e15273/article/details/79954700


var convert = require('./converter');

var arg = {
  trad: 'trad',
  simple: 'simple',
  array: 'array',
  order: 'order' // 开启简单模式

};
var _ = {}; // 工具方法

function main(cnchar) {
  if (cnchar.plugins.indexOf('trad') !== -1) {
    return;
  }

  cnchar.plugins.push('trad');
  cnchar.convert = convert;
  var _p = String.prototype;
  cnchar.type.spell.simple = arg.simple;
  cnchar.type.stroke.simple = arg.simple;
  cnchar.type.spell.trad = arg.trad;
  cnchar.type.stroke.trad = arg.trad;
  reinitSpell(_p, cnchar);
  reinitStroke(_p, cnchar); // _p.convert = function(to,from){return convert(this,to,from);}

  _p.convertSimpleToTrad = function () {
    return convert.simpleToTrad(this);
  };

  _p.convertSimpleToSpark = function () {
    return convert.simpleToSpark(this);
  };

  _p.convertTradToSimple = function () {
    return convert.tradToSimple(this);
  };

  _p.convertTradToSpark = function () {
    return convert.tradToSpark(this);
  };

  _p.convertSparkToSimple = function () {
    return convert.sparkToSimple(this);
  };

  _p.convertSparkToTrad = function () {
    return convert.sparkToTrad(this);
  }; // _p.convertToTrad = function(){return convert.toTrad(this);}
  // _p.convertToSimple = function(){return convert.toSimple(this);}
  // _p.convertToSpark = function(){return convert.toSpark(this);}


  _ = cnchar._;
  _.convert = convert;

  _.dict.getTradOrders = function () {
    return orderDict;
  };

  _.dict.getTradCount = function () {
    return countDict;
  };
}

function init(cnchar) {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.CnChar) {
    main(window.CnChar);
  } else if (typeof cnchar !== 'undefined') {
    main(cnchar);
  }
}

function reinitSpell(proto, cnchar) {
  var _spell = cnchar.spell;

  var newSpell = function newSpell() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var str = args[0];
    args = args.splice(1);

    if (_.has(args, arg.simple)) {
      return _spell.apply(void 0, [str].concat(_toConsumableArray(args)));
    }

    if (_.has(args, arg.trad)) {
      var isArr = _.has(args, arg.array);

      if (!isArr) {
        args.push(arg.array);
      } // 先使用array模式


      var simpleStr = convert.tradToSimple(str);
      var simples = [];
      var newStr = ''; // 提取出繁体字的简体

      for (var i = 0; i < simpleStr.length; i++) {
        if (simpleStr[i] !== str[i]) {
          newStr += simpleStr[i];
        } else {
          simples.push({
            index: i,
            str: str[i]
          });
        }
      }

      var res = _spell.apply(void 0, [newStr].concat(_toConsumableArray(args)));

      for (var _i = 0; _i < simples.length; _i++) {
        res.splice(simples[_i].index, 0, simples[_i].str);
      }

      return isArr ? res : res.join('');
    }

    str = convert.tradToSimple(str);
    return _spell.apply(void 0, [str].concat(_toConsumableArray(args)));
  };

  proto.spell = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return newSpell.apply(void 0, [this].concat(args));
  };

  cnchar.spell = function () {
    return newSpell.apply(void 0, arguments);
  };

  if (!cnchar._.poly) {
    cnchar._reinitSpellPoly = function () {
      _spell = cnchar.spell;

      proto.spell = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return newSpell.apply(void 0, [this].concat(args));
      };

      cnchar.spell = function () {
        return newSpell.apply(void 0, arguments);
      };
    };

    ;
  }
}

function reinitStroke(proto, cnchar) {
  var _stroke = cnchar.stroke;

  var _new = function _new() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var str = args[0];
    args = args.splice(1);

    _.checkArgs('stroke', args, true);

    var isArr = _.has(args, arg.array);

    var isOrder = _.has(args, arg.order);

    if (!isArr) {
      args.push(arg.array);
    } // 先使用array模式


    var res = _stroke.apply(void 0, [str].concat(_toConsumableArray(args))); // 没有繁体的结果


    if (!isOrder) {
      // stroke 方法
      if (_.has(args, arg.simple)) {
        // 启用简单模式则 直接返回
        return isArr ? res : _.sumStroke(res);
      }

      if (_.has(args, arg.trad)) {
        for (var j = 0; j < res.length; j++) {
          if (res[j] !== 0) {
            res[j] = -1;
          }
        }
      }

      for (var _i2 in countDict) {
        _i2 = parseInt(_i2);

        for (var j = 0; j < res.length; j++) {
          if (res[j] === 0 && countDict[_i2].indexOf(str[j]) !== -1) {
            res[j] = _i2;
          }
        }
      }

      if (_.has(args, arg.trad)) {
        for (var j = 0; j < res.length; j++) {
          if (res[j] === -1) {
            res[j] = 0;
          }
        }
      }

      return isArr ? res : _.sumStroke(res);
    } else {
      // strokeOrder 方法
      if (_.has(args, arg.simple)) {
        // 启用简单模式则 直接返回
        return res;
      }

      if (_.has(args, arg.trad)) {} // 只使用繁体字
      // 将其中的繁体字获取 strokeOrder


      var igList = [];

      for (var i = 0; i < res.length; i++) {
        if (typeof res[i] === 'undefined') {
          res[i] = orderDict[str[i]]; // 字母版笔画表
        } else {
          igList.push(i);
        }
      }

      return _.orderWithLetters(res, str, args, igList);
    }
  };

  proto.stroke = function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _new.apply(void 0, [this].concat(args));
  };

  cnchar.stroke = function () {
    return _new.apply(void 0, arguments);
  };

  if (!cnchar._.order) {
    cnchar._reinitStrokeOrder = function () {
      _stroke = cnchar.stroke;

      proto.stroke = function () {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        return _new.apply(void 0, [this].concat(args));
      };

      cnchar.stroke = function () {
        return _new.apply(void 0, arguments);
      };
    };

    ;
  }
}

init();
module.exports = init;