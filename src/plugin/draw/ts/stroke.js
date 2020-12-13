const HanziWriter = require('./hanzi-writer');

function stroke (writer, cloneSvg) {
    writer.text.forEach((s) => {
        const target = document.createElement('div');
        writer.el.appendChild(target);
        HanziWriter.loadCharacterData(s).then(function (charData) {
            for (var i = 0; i < charData.strokes.length; i++) {
                renderFanningStrokes({
                    option: writer.option,
                    target,
                    strokes: charData.strokes,
                    radStrokes: charData.radStrokes || [],
                    current: i,
                    cloneSvg,
                    width: writer.option.width
                });
            }
        });
    });
}


function renderFanningStrokes ({option, target, strokes, radStrokes, cloneSvg, current, width}) {
    const radicalColor = (radStrokes.length > 0 && option.radicalColor) ? option.radicalColor : null;
    var svg = cloneSvg(option);
    target.appendChild(svg);
    var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  
    var transformData = HanziWriter.getScalingTransform(width, width, option.padding);
    group.setAttributeNS(null, 'transform', transformData.transform);
    svg.appendChild(group);
    for (let i = 0; i <= current; i++) {
        let color = option.strokeColor;
        if (i === current && option.currentColor) {
            color = option.currentColor;
        } else if (radicalColor && radStrokes.indexOf(i) !== -1) {
            color = radicalColor;
        }
        renderPath(strokes[i], group, color);
    }
    if (option.showOutline && current + 1 <= strokes.length) {
        for (let i = current + 1; i < strokes.length; i++) {
            renderPath(strokes[i], group, option.outlineColor);
        }
    }
}

function renderPath (strokePath, group, color) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttributeNS(null, 'd', strokePath);
    // style the character paths
    path.style.fill = color;
    group.appendChild(path);
}

module.exports = {stroke};