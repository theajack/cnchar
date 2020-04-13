"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var HanziWriter = require('./hanzi-writer');

var _require = require('./default-option'),
    TYPE = _require.TYPE,
    merge = _require.merge,
    TEST_STATUS = _require.TEST_STATUS;

var _require2 = require('./util'),
    pickCnChar = _require2.pickCnChar;

var _require3 = require('./line'),
    buildLinesStr = _require3.buildLinesStr;

var _require4 = require('./stroke'),
    stroke = _require4.stroke;

var document = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? window.document || null : null;

var svg = function () {
  if (!document) {
    return null;
  }

  return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
}();

var Writer = /*#__PURE__*/function () {
  function Writer(_ref) {
    var _ref$el = _ref.el,
        el = _ref$el === void 0 ? 'cnchar-draw' : _ref$el,
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? '' : _ref$text,
        _ref$clear = _ref.clear,
        clear = _ref$clear === void 0 ? true : _ref$clear,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? TYPE.NORMAL : _ref$type,
        _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        _ref$line = _ref.line,
        line = _ref$line === void 0 ? {} : _ref$line,
        _ref$animation = _ref.animation,
        animation = _ref$animation === void 0 ? {} : _ref$animation,
        _ref$stroke = _ref.stroke,
        stroke = _ref$stroke === void 0 ? {} : _ref$stroke,
        _ref$test = _ref.test,
        test = _ref$test === void 0 ? {} : _ref$test;

    _classCallCheck(this, Writer);

    this.type = type;
    this.writers = [];
    this.text = text.split('');
    var opts = {
      style: style,
      line: line
    };

    switch (type) {
      case TYPE.ANIMATION:
        opts.animation = animation;
        break;

      case TYPE.STROKE:
        opts.stroke = stroke;
        break;

      case TYPE.TEST:
        opts.test = test;
        break;
    }

    this.option = merge(type, opts);
    this.el = typeof el === 'string' ? document.querySelector(el) : el;

    if (this.el && clear) {
      this.el.innerHTML = '';
    }

    if (!this.el) {
      this.el = document.createElement('div');
      document.body.appendChild(this.el);
    }

    this.init();
  }

  _createClass(Writer, [{
    key: "init",
    value: function init() {
      var _this = this;

      var _buildLinesStr = buildLinesStr(this.option),
          lineHTML = _buildLinesStr.lineHTML,
          border = _buildLinesStr.border;

      svg.setAttribute('width', this.option.width);
      svg.setAttribute('height', this.option.height);

      if (border) {
        svg.style.border = border;
      }

      var cloneSvg = function cloneSvg(option) {
        var node = svg.cloneNode();

        if (lineHTML) {
          node.innerHTML = lineHTML;
        }

        if (option.backgroundColor) {
          node.style.backgroundColor = option.backgroundColor;
        }

        return node;
      };

      if (this.type === TYPE.STROKE) {
        stroke(this, cloneSvg);
      } else {
        this.text.forEach(function (v) {
          var node = cloneSvg(_this.option);

          _this.writers.push(HanziWriter.create(node, v, _this.option));

          _this.el.appendChild(node);
        });

        if (this.type === TYPE.ANIMATION) {
          var isStart = false;

          this.animateStart = function () {
            if (isStart) {
              return;
            }

            isStart = true;

            if (_this.option.loopAnimate) {
              _this.loopAnimate();
            } else {
              _this.animate(_this.option.animateComplete);
            }
          };

          if (this.option.autoAnimate) {
            this.animateStart();
          } else {
            var start = function start() {
              _this.animateStart();

              _this.el.removeEventListener('click', start, false);
            };

            this.el.addEventListener('click', start, false);
          }
        } else if (this.type === TYPE.TEST) {
          var opt = function opt() {
            return {};
          };

          var fn = this.option.onTestStatus;

          if (typeof fn === 'function') {
            opt = function opt(index) {
              return {
                onMistake: function onMistake(strokeData) {
                  fn({
                    index: index,
                    status: TEST_STATUS.MISTAKE,
                    data: strokeData
                  });
                },
                onCorrectStroke: function onCorrectStroke(strokeData) {
                  fn({
                    index: index,
                    status: TEST_STATUS.CORRECT,
                    data: strokeData
                  });
                },
                onComplete: function onComplete(summaryData) {
                  fn({
                    index: index,
                    status: TEST_STATUS.COMPLETE,
                    data: summaryData
                  });
                }
              };
            };
          }

          this.writers.forEach(function (writer, index) {
            writer.quiz(opt(index));
          });
        }
      }
    }
  }, {
    key: "animate",
    value: function animate(complete) {
      var _this2 = this;

      var opt = this.option;

      if (opt.stepByStep) {
        // 汉字之间连续绘制
        if (opt.showCharacter === false) {
          this.writers.forEach(function (writer) {
            writer.hideCharacter();
          });
        }

        this._animateStep(0, complete);
      } else {
        (function () {
          // 汉字一起绘制，笔画最多的绘制完成才算全部绘制完成
          var index = 0;

          for (var i = 0; i < _this2.writers.length; i++) {
            _this2._animateSingle(i, function () {
              index++;

              if (index === _this2.writers.length) {
                complete();
              }
            });
          }
        })();
      }
    }
  }, {
    key: "loopAnimate",
    value: function loopAnimate() {
      var _this3 = this;

      var opt = this.option;
      this.animate(function () {
        opt.animateComplete();
        setTimeout(function () {
          _this3.loopAnimate();
        }, opt.delayBetweenStrokes);
      });
    } // animate单个汉字

  }, {
    key: "_animateSingle",
    value: function _animateSingle(i, complete) {
      if (i >= this.writers.length) {
        complete(true);
        return;
      }

      this.writers[i].animateCharacter({
        onComplete: function onComplete() {
          complete(false);
        }
      });
    }
  }, {
    key: "_animateStep",
    value: function _animateStep(index, complete) {
      var _this4 = this;

      this._animateSingle(index, function (end) {
        if (!end) {
          setTimeout(function () {
            _this4._animateStep(index + 1, complete);
          }, _this4.option.delayBetweenStrokes);
        } else {
          complete();
        }
      });
    }
  }]);

  return Writer;
}(); // eslint-disable-next-line no-unused-vars


function draw() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof window === 'undefined') {
    console.error('Draw 方法仅支持在浏览器环境下使用');
    return null;
  }

  text = pickCnChar(text);

  if (!text) {
    throw new Error('Draw 方法text必须含有中文');
  }

  options.text = text;
  return new Writer(options);
}

;
draw.TYPE = TYPE;
draw.TEST_STATUS = TEST_STATUS;
module.exports = draw;