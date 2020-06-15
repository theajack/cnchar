// all库的声明文件
import './extend';

// draw
declare type DrawType = 'normal' | 'animation' | 'stroke' | 'test';
declare type TestStatusType = 'mistake' | 'correct' | 'complete';
declare class Writer {
    constructor();
    option: object;
    el: HTMLElement;
    type: DrawType;
    text: Array<string>;
    writer: Array<object>;
    animateStart():void;
}

declare interface TestStatus {
    index: number,
    status: TestStatusType,
    data: {
        character: string;
        totalMistakes: number;// 到目前为止在测验期间犯的总错误。
        strokeNum?: number;// 当前笔画数。
        mistakesOnStroke?: number;// 到目前为止用户绘制此笔划所犯的错误数。
        strokesRemaining?: number;// 测验完成前剩余的笔画数。
        drawnPath?: {
            pathString: string;
            points: Array<{x:number;y:number}>
        };// 对象包含用户绘制的 pathString ，用于评分的分数。
    }
}

declare interface DrawOption {
    el?: string | HTMLElement; // 绘制的容器，支持选择器或dom，若是不填，会在body后append一个dom作为容器
    type?: DrawType; // 绘制模式，默认为normal
    clear?: boolean; // 绘制前是否清空容器 默认为true
    style?: { // 样式类
        backgroundColor?: string, // 默认为#fff
        showOutline?: boolean;//: true,
        showCharacter?: boolean;//: true,
        currentColor?: string;//: '#b44', // 仅在stroke模式下有效
        length?: number;//: 60,
        padding?: number;//: 5, // 数值, 默认 20。 画布的汉字和边缘之间的填充
        outlineColor?: string;//: '#ddd', // 十六进制字符, 默认 '#DDD'。
        strokeColor?: string;//: '#555', // 十六进制字符, 默认 '#555'。绘制每个笔划的颜色。
        radicalColor?: string;//: null, // 十六进制字符, 默认 null。 如果存在偏旁部首数据，则在笔划中绘制偏旁部首的颜色。 如果没有设置，激光将绘制与其他笔划相同的颜色。
        strokeFadeDuration?: number; //400
    },
    line?: { // 背景线条类
        lineStraight?: boolean;// : true,
        lineCross?: boolean;// : true,
        lineWidth?: number;// : 1,
        lineColor?: string;// : '#ddd',
        lineDash?: boolean;// : true,
        border?: boolean;// : true,
        borderWidth?: number;// : 1,
        borderColor?: string;// : '#ccc',
        borderDash?: boolean;// : false,
    },
    animation?: {
        strokeAnimationSpeed?: number;// : 1, // 数值, 默认 1。 绘制每个笔划的速度必须大于0。增加此数字可以更快地绘制笔划，减少绘制笔划的速度更慢。
        delayBetweenStrokes?: number;// : 1000, // 数值, 默认 1000。 动画进行中每个笔画之间的间隔时间（以毫秒为单位）。
        delayBetweenLoops?: number;// : 200, // 数值, 默认 2000。 循环动画时每个动画循环之间的时间（以毫秒为单位）。
        autoAnimate?: boolean;// : true,
        animateComplete?: Function;// : () => {},
        stepByStep?: boolean;// : true,
        loopAnimate?: boolean;// : false,
    },
    test?: {
        strokeHighlightSpeed?: number;// : 20, // 数值, 默认 20。 在测验中给出提示时突出显示每个笔划的速度必须大于0。增加此数字以突出显示更快，减少以突出显示更慢。
        highlightColor?: number;// : '#aaf', // 十六进制字符, 默认 '#AAF'。 用于在测验中突出显示的颜色。
        drawingColor?: number;// : '#333', // 十六进制字符, 默认 '#333'。 测验期间绘制的线条颜色。
        drawingWidth?: number;// : 4, // 数值, 默认 4。 进行测验时绘制的线条宽度。
        showHintAfterMisses?: number;// : 3, // 整数, 默认 3 中风高亮提示之前的未命中数被给予用户。 设置为 false 以禁用。 创建测验时也可以设置此项。
        highlightOnComplete?: number;// : true, // 布尔值, 默认 true。 控制当用户完成绘制整个字符时，测验是否会短暂突出显示字符。 创建测验时也可以设置此项。
        highlightCompleteColor?: number;// : null, // 十六进制字符, 默认 null。 在测验中突出显示字符时使用的颜色。 如果未设置，则将使用highlightColor。 仅当highlightOnComplete为true时才相关。
        onTestStatus?(args: TestStatus):void;// : null, // ({index, status, data})=>{}
    }
}

export declare interface Draw {
    (text:string, option?:DrawOption):Writer;
    TYPE: {
        ANIMATION: 'animation',
        NORMAL: 'normal',
        STROKE: 'stroke',
        TEST: 'test'
    },
    TEST_STATUS: {
        MISTAKE: 'mistake',
        CORRECT: 'correct',
        COMPLETE: 'complete'
    }
}

// idiom

declare type idiomArg = 'char' | 'stroke' | 'spell' | 'tone';

export declare interface Idiom {
    (text:string | Array<string|number>, ...idiomArgs: Array<idiomArg>):Array<string>;
}

// order

declare type orderToWordArg = 'match'  | 'matchorder' | 'contain' | 'start' | 'array' | 'simple' | 'trad';

declare type orderName = '横折折撇' | '竖弯' | '横折' | '撇点' | '横斜钩' | '横' | '捺' | '横折钩' | '竖' | '竖钩' | '点' | '撇' | '撇折' | '竖折撇' | '横折折折钩' | '竖折折钩' | '提' | '弯钩' | '斜钩' | '横折折' | '横撇' | '横折提' | '横折折折' | '竖提' | '竖弯钩'
    | '竖折折' | '横撇弯钩' | '卧钩' | '横折弯' | '横钩';

// xhy

declare type xhyArg = 'fuzzy' | 'answer' | 'second';

export declare interface XHY {
    (text:string, ...xhyArgs: Array<xhyArg>):Array<string>;
}


declare type spellArg = 'array' | 'low' | 'up' | 'first' | 'poly' | 'tone' | 'simple' | 'trad';
declare type strokeArg = 'letter' | 'shape' | 'count' | 'name' | 'detail' | 'array' | 'order' | 'simple' | 'trad';
declare type spellToWordArg = 'poly' | 'alltone' | 'array' | 'simple' | 'trad';
declare type strokeToWordArg = 'array' | 'simple' | 'trad';
declare type pluginArg = 'order' | 'trad' | 'poly' | 'draw' | 'idiom' | 'xhy';
declare type toneType = 0 | 1 | 2 | 3 | 4;
declare type compareType = 'more' | 'less' | 'even';

declare interface spellInfoReturnStatic {
    spell: string;
    initial: string;
    final: string;
    tone: number;
    index: number;
}
export declare interface CnCharStatic {
    spell(sentence: string, ...args: Array<spellArg>): string | Array<any>;
    stroke(sentence: string, ...args: Array<strokeArg>): number | Array<any>;
    use(...plugins: Array<Function>): void;
    spellToWord(spell: string, ...args: Array<spellToWordArg>): string | Array<string>;
    strokeToWord(stroke: number, ...args: Array<strokeToWordArg>): string | Array<string>;
    spellInfo: {
        (spell: string): spellInfoReturnStatic;
        tones: Array<string>;
        initials: Array<string>;
    };
    plugins: Array<pluginArg>;
    type: {
        spell: object;
        stroke: object;
        spellToWord: object;
        strokeToWord: object;
        orderToWord?: object;
        idiom?: object;
        xhy?: object;
    };
    check: boolean;
    readonly version: string;

    transformTone(spell: string, tone?: boolean, type?: 'low' | 'up'): {
        spell: string;
        tone: toneType;
        index: number; 
        isTrans: boolean;
    };
    isCnChar(word: string): boolean;
    compareSpell(spell1: string, spell2: string, tone?: boolean): compareType;
    compareStroke(stroke1: string | number, stroke2: string | number): compareType;
    sortSpell(spells:Array<string> | string, ...args: Array<'tone'|'desc'>): Array<string> | string;
    sortStroke(strokes:Array<string|number> | string, desc?: 'desc'): Array<string> | string;
    draw: Draw;
    idiom: Idiom;
    orderToWord: {
        (orders: string | Array<orderName>, ...args: Array<orderToWordArg>): string | Array<string>;
        orders: object;
    };
    convert: {
        simpleToSpark(sentence: string): string;
        simpleToTrad(sentence: string): string;
        sparkToSimple(sentence: string): string;
        sparkToTrad(sentence: string): string;
        tradToSimple(sentence: string): string;
        tradToSpark(sentence: string): string;
    };
    xhy: XHY;
}

declare const cnchar: CnCharStatic;

export default cnchar;