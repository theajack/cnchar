/*
 * @Author: theajack
 * @Date: 2021-08-05 23:05:21
 * @LastEditor: theajack
 * @LastEditTime: 2024-03-23 10:19:46
 * @Description: Coding something
 * @FilePath: \cnchar\src\cnchar\plugin\draw\animation-stroke.ts
 */

import {IComplete, IWriter} from 'cnchar-types/plugin/draw';
import {IDrawOption} from 'cnchar-types/plugin/draw/common';
import HanziWriter from 'cnchar-types/plugin/draw/hanzi-writer';

const DRAW_MODE = {
    INITIAL: 0,
    ANIMATION: 1,
    STROKE: 2,
};

export class AnimationWriter {
    writer: IWriter;

    currentCharIndex: number;
    currentStrokeIndex: number;

    drawMode: number;
    isPaused: boolean;
    option: IDrawOption;
    writers: Array<HanziWriter>;
    strokeDrawLocked: boolean;

    constructor (writer: IWriter) {
        this.writer = writer;
        this.option = writer.option;
        this.writers = writer.writers;
        this.isPaused = false;
        this.drawMode = DRAW_MODE.INITIAL;
        this.currentCharIndex = 0;
        this.currentStrokeIndex = 0;
        this.strokeDrawLocked = false;
    }

    private _getCurrentCharStrokeNumber () {
        return this.curWriter.V.strokes.length;
    }

    private _isStepMode () {
        return this.option.stepByStep;
    }
    
    private _animate (complete: IComplete = () => {}) {
        if (this._isStepMode()) { // 汉字之间连续绘制{
            if (this.option.showCharacter === false) {
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

    drawNextStroke (onComplete: ()=>void) {
        if (this.drawMode === DRAW_MODE.ANIMATION) {
            console.warn('当前为自动绘制模式');
            return false;
        } else if (this.drawMode === DRAW_MODE.INITIAL) {
            this.drawMode = DRAW_MODE.STROKE;
        }
        if (this.strokeDrawLocked) {
            console.warn('请等待上一步绘制完成');
            return false;
        }
        this.strokeDrawLocked = true;
        if (this.currentCharIndex === 0 && this.currentStrokeIndex === 0) {
            this.writers.forEach(writer => {
                writer.hideCharacter();
            });
        }
        this.curWriter.animateStroke(this.currentStrokeIndex, {
            onComplete: () => {
                onComplete();
                this.strokeDrawLocked = false;
            }
        });
        const thisCharStrokeNumber = this._getCurrentCharStrokeNumber();
        if (this.currentStrokeIndex >= thisCharStrokeNumber - 1) {
            this.currentStrokeIndex = 0;
            this.currentCharIndex ++;
            if (this.currentCharIndex === this.writer.text.length) {
                this.currentCharIndex = 0;
            }
        } else {
            this.currentStrokeIndex ++;
        }
        return true;
    }

    start () {
        if (this.drawMode !== DRAW_MODE.INITIAL) {
            console.warn('当前为手动绘制模式');
            return false;
        }
        this.drawMode = DRAW_MODE.ANIMATION;
        this._start();
        return true;
    }

    _start () {
        if (this.option.loopAnimate) {
            this._loop();
        } else {
            this._animate(this._onAnimateComplete.bind(this));
        }
    }

    _onAnimateComplete () {
        this.option.animateComplete?.();
        this.writer._onComplete?.();
    }

    pause () {
        if (this.isPaused) return;
        this.isPaused = true;
        
        if (this._isStepMode()) {
            this.curWriter.pauseAnimation();
        } else {
            this.writers.forEach(w => {w.pauseAnimation();});
        }
    }

    resume () {
        if (!this.isPaused) return;
        this.isPaused = false;

        if (this._isStepMode()) {
            this.curWriter.resumeAnimation();
        } else {
            this.writers.forEach(w => {w.resumeAnimation();});
        }
    }

    restart () {
        if (this._isStepMode()) {
            this.pause();
            clearTimeout(this._strokeTimer);
            const curWriter = this.curWriter;
            curWriter.setCharacter(curWriter.text);
            this._start();
            setTimeout(() => {
                this.isPaused = false;
            }, 10);
        } else {
            this.writers.forEach(w => {w.setCharacter(w.text);});
        }
    }


    get curWriter () {
        return this.writers[this.currentCharIndex];
    }

    private _loop () {
        const opt = this.option;
        this._animate(() => {
            this._onAnimateComplete();
            setTimeout(() => {
                this._loop();
            }, opt.delayBetweenStrokes);
        });
    }

    // animate单个汉字
    private _animateSingle (index: number, complete: IComplete): void {
        if (index >= this.writers.length) {
            complete(true);
            return;
        }
        this.writers[index].animateCharacter({
            onComplete: () => {
                complete(false);
            }
        });
    }

    private _strokeTimer: any = null;

    private _animateStep (index: number, complete: IComplete = () => {}): void {
        this.currentCharIndex = index;
        this._animateSingle(index, (end: boolean) => {
            if (this.isPaused) return;
            if (!end) {
                this._strokeTimer = setTimeout(() => {
                    if (this.isPaused) return;
                    this._animateStep(index + 1, complete);
                }, this.option.delayBetweenStrokes);
            } else {
                complete();
            }
        });
    }
}