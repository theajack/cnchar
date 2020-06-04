"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// powerd by hanzi-writer v2.2.2
require('./promise-polyfill');

var draw = require('./writer');

function main(cnchar) {
  if (cnchar.plugins.indexOf('draw') !== -1) {
    return;
  }

  cnchar.plugins.push('draw');
  cnchar.draw = draw;
}

function init(cnchar) {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
    window.CncharDraw = draw;
  }

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.CnChar) {
    main(window.CnChar);
  } else if (typeof cnchar !== 'undefined') {
    main(cnchar);
  }
}

draw.init = init;
init();
module.exports = draw;