/*
 * @Author: chenzhongsheng
 * @Date: 2022-10-09 09:18:54
 * @Description: Coding something
 */
import {
    IDrawAnimationOption,
    IDrawLineOption,
    IDrawStyleOption,
    IDrawTestOption,
    IDrawStrokeOption,
    IDrawOption,
    TDrawType,
} from './common';
import HanziWriter from './hanzi-writer';

export interface IComplete {(end?: boolean): void;}
export interface IWriterOptionWithoutText {
    el?: string | HTMLElement;
    clear?: boolean;
    type?: TDrawType;
    style?: IDrawStyleOption,
    line?: IDrawLineOption,
    animation?: IDrawAnimationOption,
    stroke?: IDrawStrokeOption,
    test?: IDrawTestOption,
    onComplete?: () => void,
    // renderer?: 'svg'|'canvas',
}
export interface IWriterOption extends IWriterOptionWithoutText {
    text?: string;
}
export interface IWriter {
    option: IDrawOption;
    el: HTMLElement;
    type: TDrawType;
    text: Array<string>;
    writers: Array<HanziWriter>;
    _onComplete?: () => void;
    startAnimation(): boolean;
    drawNextStroke(onComplete?: ()=>void): boolean;
    pauseAnimation(): void;
    resumeAnimation(): void;
    restartAnimation(): void;
}