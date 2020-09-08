"use strict";

var radicals = require('./radicals.json');

var arg = {
  array: 'array'
};
var _cnchar = null;

function radical() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    console.warn('idiom: 请输入搜索项');
    return;
  }

  var input = args[0];
  args = args.slice(1);

  if (_cnchar) {
    _cnchar._.checkArgs('radical', args);
  }

  var res = '';

  for (var i = 0; i < input.length; i++) {
    var _char = radicals[input[i]];

    if (_char) {
      res += _char;
    } else {
      res += input[i];
    }
  }

  if (args.indexOf(arg.array) !== -1 || input instanceof Array) {
    return res.split('');
  }

  return res;
}

function setCnchar(cnchar) {
  _cnchar = cnchar; // initToneCodes(cnchar);
}

module.exports = {
  radical: radical,
  arg: arg,
  setCnchar: setCnchar
};