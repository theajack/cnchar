"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require('./xhy'),
    xhy = _require.xhy,
    arg = _require.arg;

function main(cnchar) {
  if (cnchar.plugins.indexOf('xhy') !== -1) {
    return;
  }

  cnchar.plugins.push('xhy');
  cnchar.xhy = xhy;
  cnchar.type.xhy = arg;
}

function init(cnchar) {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && !window.CncharXHY) {
    window.CncharXHY = xhy;
  }

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.CnChar) {
    main(window.CnChar);
  } else if (typeof cnchar !== 'undefined') {
    main(cnchar);
  }
}

xhy.init = init;
init();
module.exports = xhy;