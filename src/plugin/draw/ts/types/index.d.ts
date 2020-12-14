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

export declare interface IWriterOption {
    el?: string | HTMLElement;
    text?: string;
    clear?: boolean;
    type?: TDrawType;
    style?: IDrawStyleOption,
    line?: IDrawLineOption,
    animation?: IDrawAnimationOption,
    stroke?: IDrawStrokeOption,
    test?: IDrawTestOption,
}
export declare interface IWriter {
    option: IDrawOption;
    el: HTMLElement;
    type: TDrawType;
    text: Array<string>;
    writers: Array<HanziWriter>;
    init (): void;
    animate (complete: Function): void;
    animateStart(): void;
    loopAnimate(): void;
    _animateSingle (index: number, complete: Function): void;
    _animateStep (index: number, complete: Function): void;
}