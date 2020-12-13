const HanziWriter = require('./hanzi-writer');
const {TYPE, merge, TEST_STATUS} = require('./default-option');
const {pickCnChar} = require('./util');
const {buildLinesStr} = require('./line');
const {stroke} = require('./stroke');

const document = (typeof window === 'object') ? (window.document || null) : null;

const svg = (() => {
    if (!document) {
        return null;
    }
    return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
})();

class Writer {
    constructor ({
        el = 'cnchar-draw',
        text = '',
        clear = true,
        type = TYPE.NORMAL,
        style = {},
        line = {},
        animation = {},
        stroke = {},
        test = {},
    }) {
        this.type = type;
        this.writers = [];
        this.text = text.split('');
        const opts = {style, line};
        switch (type) {
            case TYPE.ANIMATION: opts.animation = animation; break;
            case TYPE.STROKE: opts.stroke = stroke; break;
            case TYPE.TEST: opts.test = test; break;
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
    init () {
        const {lineHTML, border} = buildLinesStr(this.option);
        const cloneSvg = (option) => {
            const node = svg.cloneNode();
            node.setAttribute('width', this.option.width);
            node.setAttribute('height', this.option.height);
            if (border) {
                node.style.border = border;
            }
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
            this.text.forEach((v) => {
                const node = cloneSvg(this.option);
                this.writers.push(HanziWriter.create(node, v, this.option));
                this.el.appendChild(node);
            });
            if (this.type === TYPE.ANIMATION) {
                let isStart = false;
                this.animateStart = () => {
                    if (isStart) {
                        return;
                    }
                    isStart = true;
                    if (this.option.loopAnimate) {
                        this.loopAnimate();
                    } else {
                        this.animate(this.option.animateComplete);
                    }
                };
                if (this.option.autoAnimate) {
                    this.animateStart();
                } else {
                    const start = () => {
                        this.animateStart();
                        this.el.removeEventListener('click', start, false);
                    };
                    this.el.addEventListener('click', start, false);
                }
            } else if (this.type === TYPE.TEST) {
                let opt = () => {return {};};
                const fn = this.option.onTestStatus;
                if (typeof fn === 'function') {
                    opt = (index) => {
                        return {
                            onMistake (strokeData) {
                                fn({index, status: TEST_STATUS.MISTAKE, data: strokeData});
                            },
                            onCorrectStroke (strokeData) {
                                fn({index, status: TEST_STATUS.CORRECT, data: strokeData});
                            },
                            onComplete (summaryData) {
                                fn({index, status: TEST_STATUS.COMPLETE, data: summaryData});
                            }
                        };
                    };
                }
                this.writers.forEach((writer, index) => {
                    writer.quiz(opt(index));
                });
            }
        }
    }
    animate (complete) {
        const opt = this.option;
        if (opt.stepByStep) { // 汉字之间连续绘制
            if (opt.showCharacter === false) {
                this.writers.forEach(writer => {
                    writer.hideCharacter();
                });
            }
            this._animateStep(0, complete);
        } else { // 汉字一起绘制，笔画最多的绘制完成才算全部绘制完成
            let index = 0;
            for (let i = 0; i < this.writers.length; i++) {
                this._animateSingle(i, () => {
                    index++;
                    if (index === this.writers.length) {
                        complete();
                    }
                });
            }
        }
    }
    loopAnimate () {
        const opt = this.option;
        this.animate(() => {
            opt.animateComplete();
            setTimeout(() => {
                this.loopAnimate();
            }, opt.delayBetweenStrokes);
        });
    }
    // animate单个汉字
    _animateSingle (i, complete) {
        if (i >= this.writers.length) {
            complete(true);
            return;
        }
        this.writers[i].animateCharacter({
            onComplete: () => {
                complete(false);
            }
        });
    }
    _animateStep (index, complete) {
        this._animateSingle(index, (end) => {
            if (!end) {
                setTimeout(() => {
                    this._animateStep(index + 1, complete);
                }, this.option.delayBetweenStrokes);
            } else {
                complete();
            }
        });
    }
}

// eslint-disable-next-line no-unused-vars
function draw (text = '', options = {}) {
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
};
draw.TYPE = TYPE;
draw.TEST_STATUS = TEST_STATUS;

module.exports = draw;