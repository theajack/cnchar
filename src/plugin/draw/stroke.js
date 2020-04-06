let HanziWriter = require('./hanzi-writer');

// option = {
//     currentColor: '#f44',
//     showOutline: true,
//     outlineColor
//     padding: true,
//     line: true,
//     lineCross: true,
//     radicalColor: null,
//     strokeColor: '#555',
// }
function stroke (writer, cloneSvg) {
    let w = writer.option.width;
    writer.text.forEach((s) => {
        let div = document.createElement('div');
        writer.el.appendChild(div);
        HanziWriter.loadCharacterData(s).then(function (charData) {
            for (var i = 0; i < charData.strokes.length; i++) {
                var strokesPortion = charData.strokes.slice(0, i + 1);
                renderFanningStrokes(div, strokesPortion, cloneSvg, w);
            }
        });
    });
}


function renderFanningStrokes (target, strokes, cloneSvg, width) {
    var svg = cloneSvg();
    target.appendChild(svg);
    var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  
    // set the transform property on the g element so the character renders at 75x75
    var transformData = HanziWriter.getScalingTransform(width, width);
    group.setAttributeNS(null, 'transform', transformData.transform);
    svg.appendChild(group);
  
    strokes.forEach(function (strokePath) {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttributeNS(null, 'd', strokePath);
        // style the character paths
        path.style.fill = '#555';
        group.appendChild(path);
    });
}

module.exports = {stroke};