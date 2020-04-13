"use strict";

var HanziWriter = require('./hanzi-writer');

function stroke(writer, cloneSvg) {
  writer.text.forEach(function (s) {
    var target = document.createElement('div');
    writer.el.appendChild(target);
    HanziWriter.loadCharacterData(s).then(function (charData) {
      for (var i = 0; i < charData.strokes.length; i++) {
        renderFanningStrokes({
          option: writer.option,
          target: target,
          strokes: charData.strokes,
          radStrokes: charData.radStrokes || [],
          current: i,
          cloneSvg: cloneSvg,
          width: writer.option.width
        });
      }
    });
  });
}

function renderFanningStrokes(_ref) {
  var option = _ref.option,
      target = _ref.target,
      strokes = _ref.strokes,
      radStrokes = _ref.radStrokes,
      cloneSvg = _ref.cloneSvg,
      current = _ref.current,
      width = _ref.width;
  var radicalColor = radStrokes.length > 0 && option.radicalColor ? option.radicalColor : null;
  var svg = cloneSvg(option);
  target.appendChild(svg);
  var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  var transformData = HanziWriter.getScalingTransform(width, width, option.padding);
  group.setAttributeNS(null, 'transform', transformData.transform);
  svg.appendChild(group);

  for (var i = 0; i <= current; i++) {
    var color = option.strokeColor;

    if (i === current && option.currentColor) {
      color = option.currentColor;
    } else if (radicalColor && radStrokes.indexOf(i) !== -1) {
      color = radicalColor;
    }

    renderPath(strokes[i], group, color);
  }

  if (option.showOutline && current + 1 <= strokes.length) {
    for (var _i = current + 1; _i < strokes.length; _i++) {
      renderPath(strokes[_i], group, option.outlineColor);
    }
  }
}

function renderPath(strokePath, group, color) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttributeNS(null, 'd', strokePath); // style the character paths

  path.style.fill = color;
  group.appendChild(path);
}

module.exports = {
  stroke: stroke
};