"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require('./idiom'),
    idiom = _require.idiom,
    arg = _require.arg,
    setCnchar = _require.setCnchar;

function main(cnchar) {
  if (cnchar.plugins.indexOf('idiom') !== -1) {
    return;
  }

  cnchar.plugins.push('idiom');
  cnchar.idiom = idiom;
  cnchar.type.idiom = arg;
}

function init(cnchar) {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && !window.CncharIdiom) {
    window.CncharIdiom = idiom;
  }

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.CnChar) {
    main(window.CnChar);
    setCnchar(window.CnChar);
  } else if (typeof cnchar !== 'undefined') {
    main(cnchar);
    setCnchar(cnchar);
  }
}

idiom.init = init;
init();
module.exports = idiom;