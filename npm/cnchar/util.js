"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var infoDict = require('./info-dict.json');

function mapJson(key, value, cb) {
  if (_typeof(key) === 'object') {
    for (var k in key) {
      cb(k, key[k]);
    }

    return;
  }

  cb(key, value);
}

function isCnChar(word) {
  var unicode = word.charCodeAt(0);
  return unicode >= 19968 && unicode <= 40869;
}

function has(args, name) {
  return args.indexOf(name) !== -1;
}

function isPolyWord(word) {
  if (!word) {
    return false;
  }

  if (word.length > 1) {
    word = word[0];
  }

  if (!isCnChar(word)) {
    return false;
  }

  return infoDict.polyWord.indexOf(word) !== -1;
}

function _throw(err) {
  throw new Error('CnChar Error:' + err);
}

function _warn(err) {
  console.warn('CnChar Warning:' + err);
}

module.exports = {
  mapJson: mapJson,
  isCnChar: isCnChar,
  has: has,
  isPolyWord: isPolyWord,
  _throw: _throw,
  _warn: _warn
};