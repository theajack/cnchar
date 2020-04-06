var Draw = require('./draw.js');

function main (cnchar) {
    if (cnchar.plugins.indexOf('draw') !== -1) {
        return;
    }
    cnchar.plugins.push('draw');
    cnchar.draw = draw;
    String.prototype.draw = function (opt) {
        return draw(this, opt);
    };
}


function init () {
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
    } else {
        throw new Error('cnchar-draw 仅在浏览器环境中生效');
    }
}

/*
    opt:
    size: 每一个字的大小 单位px
    width: 线条宽度
    color: 颜色
    font: 字体
    ele: 附加在哪个元素上 可以时id值或dom元素 默认为body
    animation: 是否使用动画
    time: 画一个笔的时间 默认500ms
    return ele
*/
function draw (text, opt) {
    return (new Draw(text, opt)).canvas;
}

init();

module.exports = init;