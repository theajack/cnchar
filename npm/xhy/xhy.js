"use strict";

var dict = require('./xhy.json');

var arg = {
  'fuzzy': 'fuzzy',
  'answer': 'answer',
  'second': 'second'
};

function xhy() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var str = args.shift();
  var isFuzzy = args.indexOf(arg.fuzzy) !== -1;
  var onlyAnswer = args.indexOf(arg.answer) !== -1;
  var second = args.indexOf(arg.second) !== -1;
  var quesIndex = second ? 1 : 0;
  var answerIndex = 1 - quesIndex;

  if (isFuzzy) {
    var res = [];

    for (var i = 0; i < dict.length; i++) {
      if (dict[i][quesIndex].indexOf(str) !== -1) {
        var answer = shapeAnswer(dict[i], onlyAnswer, answerIndex);
        res = res.concat(answer);
      }
    }

    return res;
  } else {
    for (var _i = 0; _i < dict.length; _i++) {
      if (dict[_i][quesIndex] === str) {
        return shapeAnswer(dict[_i], onlyAnswer, answerIndex);
      }
    }
  }
}

function shapeAnswer(item, onlyAnswer, answerIndex) {
  var answer = null;

  if (item[answerIndex].indexOf('；') !== -1) {
    answer = item[answerIndex].split('；');
  } else {
    answer = [item[answerIndex]];
  }

  if (!onlyAnswer) {
    var fn = answerIndex === 1 ? function (a, index) {
      answer[index] = "".concat(item[1 - answerIndex], "-").concat(a);
    } : function (a, index) {
      answer[index] = "".concat(a, "-").concat(item[1 - answerIndex]);
    };
    answer.forEach(fn);
  }

  return answer;
}

module.exports = {
  xhy: xhy,
  arg: arg
};
;