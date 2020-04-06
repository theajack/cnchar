/* eslint-disable no-unused-vars */

function buildLinesStr ({
    width,
    lineStraight,
    lineCross,
    lineWidth,
    lineColor,
    lineDash,
    border,
    borderWidth,
    borderColor,
    borderDash,
}) {
    let str = '';
    let attr = '';
    if (lineDash) {
        attr += 'stroke-dasharray="8"';
    }
    if (lineWidth > 1) {
        attr += `stroke-width="${lineWidth}"`;
    }
    if (lineStraight) {
        let half = width / 2;
        str += `<line x1="${half}" y1="0" x2="${half}" y2="${width}" ${attr} stroke="${lineColor}" />
        <line x1="0" y1="${half}" x2="${width}" y2="${half}" ${attr} stroke="${lineColor}" />`;
    }
    if (lineCross) {
        str += `<line x1="0" y1="0" x2="${width}" y2="${width}" ${attr} stroke="${lineColor}" />
        <line x1="${width}" y1="0" x2="0" y2="${width}" ${attr} stroke="${lineColor}" />`;
    }
    let _border = '';
    if (border) {
        _border = `${borderWidth}px ${borderDash ? 'dashed' : 'solid'} ${borderColor}`;
    }
    return {lineHTML: str, border: _border};
}

module.exports = {buildLinesStr};