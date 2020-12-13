
export const TYPE = {
    NORMAL: 'normal',
    ANIMATION: 'animation',
    STROKE: 'stroke',
    TEST: 'test'
};

export const TEST_STATUS = {
    MISTAKE: 'mistake',
    CORRECT: 'correct',
    COMPLETE: 'complete'
};

const DrawOption = {
    showOutline: true,
    showCharacter: true,
    currentColor: '#b44',
    clear: true,
    length: 60,
    padding: 5, // 数值, 默认 20。 画布的汉字和边缘之间的填充
    outlineColor: '#ddd', // 十六进制字符, 默认 '#DDD'。
    backgroundColor: '#fff',
    strokeColor: '#555', // 十六进制字符, 默认 '#555'。绘制每个笔划的颜色。
    radicalColor: null, // 十六进制字符, 默认 null。 如果存在偏旁部首数据，则在笔划中绘制偏旁部首的颜色。 如果没有设置，激光将绘制与其他笔划相同的颜色。
    
    strokeFadeDuration: 400, // 数值, 默认 400。 调用 writer.show() 和 writer.hide() 时在显示和隐藏笔划之间转换的时间（以毫秒为单位）
    
    // 背景line
    lineStraight: true,
    lineCross: true,
    lineWidth: 1,
    lineColor: '#ddd',
    lineDash: true,
    border: true,
    borderWidth: 1,
    borderColor: '#ccc',
    borderDash: false,

    // animation
    strokeAnimationSpeed: 1, // 数值, 默认 1。 绘制每个笔划的速度必须大于0。增加此数字可以更快地绘制笔划，减少绘制笔划的速度更慢。
    delayBetweenStrokes: 1000, // 数值, 默认 1000。 动画进行中每个笔画之间的间隔时间（以毫秒为单位）。
    delayBetweenLoops: 200, // 数值, 默认 2000。 循环动画时每个动画循环之间的时间（以毫秒为单位）。
    autoAnimate: true,
    animateComplete: () => {},
    stepByStep: true,
    loopAnimate: false,

    // charDataLoader: (a) => {console.log(a);}, // 函数。 自定义函数 加载字符数据 。 有关使用的更多信息，请参阅加载字符数据部分。
    // onLoadCharDataSuccess: null, // 函数。 成功加载字符数据时的回调。 使用已加载的数据调用此函数。 这可以用于实现加载微调器。
    // onLoadCharDataError: null, // 函数。 字符数据加载失败时的回调。
    // test
    strokeHighlightSpeed: 20, // 数值, 默认 20。 在测验中给出提示时突出显示每个笔划的速度必须大于0。增加此数字以突出显示更快，减少以突出显示更慢。
    highlightColor: '#aaf', // 十六进制字符, 默认 '#AAF'。 用于在测验中突出显示的颜色。
    drawingColor: '#333', // 十六进制字符, 默认 '#333'。 测验期间绘制的线条颜色。
    drawingWidth: 4, // 数值, 默认 4。 进行测验时绘制的线条宽度。
    showHintAfterMisses: 3, // 整数, 默认 3 中风高亮提示之前的未命中数被给予用户。 设置为 false 以禁用。 创建测验时也可以设置此项。
    highlightOnComplete: true, // 布尔值, 默认 true。 控制当用户完成绘制整个字符时，测验是否会短暂突出显示字符。 创建测验时也可以设置此项。
    highlightCompleteColor: null, // 十六进制字符, 默认 null。 在测验中突出显示字符时使用的颜色。 如果未设置，则将使用highlightColor。 仅当highlightOnComplete为true时才相关。
    onTestStatus: null, // {index, status, data}
};

function isUd (v: any): boolean {
    return typeof v === 'undefined';
}

// 使用npm link配置本地开发目录
export function merge (type, args) {
    const json = {};
    for (const key in args) {
        const arg = args[key];
        for (const k in arg) {
            if (!isUd(arg[k])) {
                json[k] = arg[k];
            }
        }
    }
    check(json);

    json.width = json.length;
    json.height = json.length;
    checkTypeDefault(type, args, json);
    return json;
}

function checkTypeDefault (type, args, json) {
    if (type === TYPE.ANIMATION) {
        if (!args.animation || isUd(args.animation.showCharacter)) {
            json.showCharacter = false;
        }
    } else if (type === TYPE.STROKE) {
        json.showCharacter = false;
    }
}

function check (json, attrs) {
    attrs = attrs || Object.keys(DrawOption);
    attrs.forEach(attr => {
        if (isUd(json[attr])) {
            json[attr] = DrawOption[attr];
        }
    });
    return json;
}