var dict = require('./stroke-pos-jian.json');
var standSize = 800;

var animation = true;

function Draw (text, opt) {
    opt = opt || {};
    opt.ele = opt.ele || window.document.body;
    opt.size = opt.size || 40;
    opt.size = 80;
    opt.animation = opt.animation || false;
    opt.time = opt.time || 500;
    opt.width = opt.width || 2;
    opt.color = opt.color || '#000';
    opt.font = opt.font || 'Microsoft Yahei';
    if (typeof opt.ele === 'string') {
        opt.ele = window.document.getElementById(opt.ele);
    }
    var canvas = document.createElement('canvas');
    canvas.width = opt.size * text.length;
    canvas.height = opt.size;
    opt.ele.appendChild(canvas);
    this.opt = opt;
    this.canvas = canvas;
    this.text = text;
    this.ctx = canvas.getContext('2d');
    this.queue = [];
    this.timer = null;
    this.draw(text, opt);
};
// 一个定时周期内绘制的长度
var length = 0;
Draw.prototype.draw = function (text, opt) {
    var rate = opt.size / standSize;
    this.ctx.font = opt.size + 'px sans-serif';
    this.ctx.fillStyle = opt.color;
    length = opt.size / 10;
    for (var i = 0; i < text.length; i++) {
        let x = i * opt.size;
        let y = 0;
        let arr = dict[text[i]];
        if (typeof arr === 'string') {
            arr = arr.split(';').map((item) => {return item.split(' ');});
            this.drawWord(this.ctx, x, y, arr, opt.color, opt.width, rate);
        } else {
            this.ctx.fillText(text[i], x, y + opt.size);
        }
    }
    this.drawProcess();
};
Draw.prototype.drawWord = function (ctx, x, y, arr, color, width, rate) {
    ctx.strokeWidth = width;
    ctx.strokeColor = color;
    arr.forEach((stroke, strokeindex) => {
        // 绘制一笔
        console.log(strokeindex);
        stroke.forEach((pos, index) => {
            // 每一个直笔
            pos = pos.split(',');
            var dx = parseInt(pos[0]) * rate + x;
            var dy = parseInt(pos[1]) * rate + y;
            if (animation) {
                this.pushStrokeQueue(dx, dy, index);
            } else {
                if (index === 0) {
                    ctx.moveTo(dx, dy);
                } else {
                    ctx.lineTo(dx, dy);
                }
                if (index === stroke.length - 1) {
                    ctx.stroke();
                }
            }
        });
    });
};

Draw.prototype.pushStrokeQueue = function (x, y, index) {
    if (index === 0) {
        this.queue.push([x, y, 1]);
        return;
    }
    let last = this.queue[this.queue.length - 1];
    let lx = last[0];
    let ly = last[1];
    let arr = this.countDeg(lx, ly, x, y);
    let n = Math.ceil(
        (x - lx === 0) ?
            ((arr[1] === 0) ? 0 : Math.abs((y - ly) / arr[1])) :
            ((arr[0] === 0) ? 0 : Math.abs((x - lx) / arr[0]))
    );
    for (var i = 0; i < n; i++) {
        if (i === n - 1) {
            this.queue.push([x, y]);
        } else {
            lx += arr[0];
            ly += arr[1];
            this.queue.push([lx, ly]);
        }
    }
};

Draw.prototype.countDeg = function (x1, y1, x2, y2) {
    let deg = Math.atan((y2 - y1) / (x2 - x1));
    let singx = (x2 - x1 > 0) ? 1 : -1;
    let singy = (y2 - y1 > 0) ? 1 : -1;
    return [
        singx * Math.abs(length * Math.cos(deg)),
        singy * Math.abs(length * Math.sin(deg))
    ];
};

Draw.prototype.drawProcess = function () {
    this.ctx.beginPath();
    this.timer = setInterval(() => {
        if (this.queue.length > 0) {
            this.drawPath(this.ctx, this.queue.shift());
        } else {
            window.clearInterval(this.timer);
        }
    }, 100);
};

Draw.prototype.drawPath = function (ctx, path) {
    if (path.length === 3) {
        ctx.moveTo(path[0], path[1]);
    } else {
        ctx.lineTo(path[0], path[1]);
        ctx.stroke();
    }
};
/*
    opt:
    size: 每一个字的大小 单位px
    width: 线条宽度
    color: 颜色
    ele: 附加在哪个元素上 可以时id值或dom元素 默认为body
    animation: 是否使用动画
    time: 画一个笔的时间 默认500ms
*/
// arr 笔画序列
// '民和'.draw() 有bug


// "78,174 78,486;78,210 648,210 672,186 648,210 648,474;78,432 648,432;336,24 360,42 360,762",


module.exports = Draw;