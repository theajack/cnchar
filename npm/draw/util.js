"use strict";

function isCnChar(word) {
  var unicode = word.charCodeAt(0);
  return unicode >= 19968 && unicode <= 40869;
}

function pickCnChar(text) {
  var v = '';

  for (var i = 0; i < text.length; i++) {
    if (isCnChar(text[i])) {
      v += text[i];
    }
  }

  return v;
}

module.exports = {
  isCnChar: isCnChar,
  pickCnChar: pickCnChar
};