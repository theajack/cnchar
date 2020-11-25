"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require('./radical'),
    radical = _require.radical,
    arg = _require.arg,
    setCnchar = _require.setCnchar,
    setRadical = _require.setRadical;

function main(cnchar) {
  if (cnchar.plugins.indexOf('radical') !== -1) {
    return;
  }

  cnchar.plugins.push('radical');
  cnchar.radical = radical;
  cnchar.type.radical = arg;
}

function init(cnchar) {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && !window.CncharRadical) {
    window.CncharRadical = radical;
  }

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.CnChar) {
    main(window.CnChar);
    setCnchar(window.CnChar);
  } else if (typeof cnchar !== 'undefined') {
    main(cnchar);
    setCnchar(cnchar);
  }
}

radical.init = init;
radical.setRadical = setRadical;
init();
module.exports = radical;