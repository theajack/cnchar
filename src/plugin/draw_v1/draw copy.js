var dict = require('./stroke-pos-jian.json');
var standSize = 800;
// var queue = []; // 动画绘制队列
// var timer = null; // 绘制定时器
// var Ctx = null;
/*
    opt:
    size: 每一个字的大小 单位px
    width: 线条宽度
    color: 颜色
    ele: 附加在哪个元素上 可以时id值或dom元素 默认为body
    animation: 是否使用动画
    time: 画一个笔的时间 默认500ms
*/
function drawText (ctx, text, opt) {
    var rate = opt.size / standSize;
    ctx.font = opt.size + 'px sans-serif';
    ctx.fillStyle = opt.color;
    for (var i = 0; i < text.length; i++) {
        let x = i * opt.size;
        let y = 0;
        let arr = dict[text[i]];
        if (typeof arr === 'string') {
            arr = arr.split(';').map((item) => {return item.split(' ');});
            drawWord(ctx, x, y, arr, opt.color, opt.width, rate);
        } else {
            ctx.fillText(text[i], x, y + opt.size);
        }
    }
}
// arr 笔画序列
function drawWord (ctx, x, y, arr, color, width, rate) {
    ctx.strokeWidth = width;
    ctx.strokeColor = color;
    arr.forEach(stroke => {
        // 绘制一笔
        stroke.forEach((pos, index) => {
            pos = pos.split(',');
            var dx = parseInt(pos[0]) * rate + x;
            var dy = parseInt(pos[1]) * rate + y;
            if (index === 0) {
                ctx.moveTo(dx, dy);
            } else {
                ctx.lineTo(dx, dy);
            }
            if (index === stroke.length - 1) {
                ctx.stroke();
            }
        });
    });
}

// function countDis () {

// }


// function drawProcess () {
//     timer = setInterval(() => {
//         if (queue.length > 0) {
//             queue;
//         }
//     }, 200);
// }

module.exports = drawText;