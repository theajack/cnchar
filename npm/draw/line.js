"use strict";

/* eslint-disable no-unused-vars */
function buildLinesStr(_ref) {
  var width = _ref.width,
      lineStraight = _ref.lineStraight,
      lineCross = _ref.lineCross,
      lineWidth = _ref.lineWidth,
      lineColor = _ref.lineColor,
      lineDash = _ref.lineDash,
      border = _ref.border,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      borderDash = _ref.borderDash;
  var str = '';
  var attr = '';

  if (lineDash) {
    attr += 'stroke-dasharray="8"';
  }

  if (lineWidth > 1) {
    attr += "stroke-width=\"".concat(lineWidth, "\"");
  }

  if (lineStraight) {
    var half = width / 2;
    str += "<line x1=\"".concat(half, "\" y1=\"0\" x2=\"").concat(half, "\" y2=\"").concat(width, "\" ").concat(attr, " stroke=\"").concat(lineColor, "\" />\n        <line x1=\"0\" y1=\"").concat(half, "\" x2=\"").concat(width, "\" y2=\"").concat(half, "\" ").concat(attr, " stroke=\"").concat(lineColor, "\" />");
  }

  if (lineCross) {
    str += "<line x1=\"0\" y1=\"0\" x2=\"".concat(width, "\" y2=\"").concat(width, "\" ").concat(attr, " stroke=\"").concat(lineColor, "\" />\n        <line x1=\"").concat(width, "\" y1=\"0\" x2=\"0\" y2=\"").concat(width, "\" ").concat(attr, " stroke=\"").concat(lineColor, "\" />");
  }

  var _border = '';

  if (border) {
    _border = "".concat(borderWidth, "px ").concat(borderDash ? 'dashed' : 'solid', " ").concat(borderColor);
  }

  return {
    lineHTML: str,
    border: _border
  };
}

module.exports = {
  buildLinesStr: buildLinesStr
};