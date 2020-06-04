"use strict";

var _cnchar = null;
var toneCodes = [];
initToneCodes();

function initToneCodes(__cnchar) {
  _cnchar = __cnchar;
  'aoeiuvn'.split('').forEach(function (item) {
    var code = item.charCodeAt(0);

    for (var i = 1; i <= 4; i++) {
      toneCodes.push(code + i * 0.1);
    }
  });
}

function getToneCodes(_char) {
  var index = _cnchar._.tones.indexOf(_char);

  if (index === -1) {
    return -1;
  }

  return toneCodes[index];
}

function getCharCode(_char2) {
  var tone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!tone) {
    return _char2.charCodeAt(0);
  }

  var code = getToneCodes(_char2);

  if (code === -1) {
    return _char2.charCodeAt(0);
  }

  return code;
} // 比较拼音大小的方法考虑移到cnchar工具方法中


module.exports = {
  initToneCodes: initToneCodes,
  getCharCode: getCharCode
};