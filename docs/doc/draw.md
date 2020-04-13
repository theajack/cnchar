## 1. 介绍

`cnchar-draw` 库的汉字绘制功能封装基于 [hanzi-writer](https://github.com/chanind/hanzi-writer), 特此表示感谢！

`cnchar-draw` 库是用于支持可视化绘制汉字，有 normal,animation,stroke,test 四种模式可选，该库仅在浏览器环境下可用，且该库支持脱离cnchar使用

另外，该库支持繁体字且不依赖 `cnahr-trad`库

draw 的参数比较繁多，首先需要理解的是，draw 分为四种绘制模式：

- normal: 常规绘制
- animation: 带有绘制动画，支持连续绘制、同时绘制、循环绘制
- stroke: 按汉字笔顺单步绘制
- test: 测试模式，用户可以在容器内绘制汉字，cnchar-draw会检测是否绘制正确

具体使用也可以参考`cnchar-draw`的类型声明文件：[cnchar.draw.d.ts](https://github.com/theajack/cnchar/blob/master/src/plugin/draw/index.d.ts)

npm安装

```
npm i cnchar-draw
```

cdn使用

<div>
  <highlight-code lang='html'>
&lt;script src="https://cdn.jsdelivr.net/npm/cnchar-draw/cnchar.draw.min.js">&lt;/script>
  </highlight-code>
</div>

使用

<div>
  <highlight-code lang='javascript'>
import cnchar from 'cnchar';
import draw from 'cnchar-draw';
cnchar.use(draw); // use 在浏览器环境中非必须
  </highlight-code>
</div>

脱离cnchar 独立使用

<div>
  <highlight-code lang='javascript'>
import draw from 'cnchar-draw';
draw('你好')
  </highlight-code>
</div>

## 2. 使用

引入cnchar-draw之后，cnchar上会新增一个draw方法，使用方式如下：

<div>
  <highlight-code lang='javascript'>
cnchar.draw('你好', options); // options 为可选参数
  </highlight-code>
</div>

以下是 options 的所有可选参数及描述，具体使用可以在 [JSBox](https://theajack.gitee.io/jsbox?theme=dark&config=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Ftheajack%2Fcnchar%2Fdocs%2Fconfig.js&id=normal-draw) 上自行在线尝试

<div>
  <highlight-code lang='typescript'>
declare interface DrawOption {
    el?: string | HTMLElement; // 绘制的容器，支持id和dom，若是不填，会在body后append一个dom作为容器
    type?: DrawType; // 绘制模式，默认为normal
    style?: { // 样式类
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
};
  </highlight-code>
</div>


## 3. 常规绘制实例

绘制模式默认为常规模式 `type=normal`

<codebox id='normal-draw'></codebox>

## 4. 笔顺绘制实例

当`type=stroke`时，笔顺模式启用，该模式会单笔绘制汉字的每一个笔划，并且为每一个笔划生成一个绘制块

<codebox id='stroke-draw'></codebox>

## 5. 动画绘制模式

当`type=animation`时，动画模式启用，该模式会按笔顺用动画绘制每一个笔划

<codebox id='animation-draw'></codebox>

## 6. 测验模式

当`type=test`时，测验模式启用，该模式用户可以在容器内绘制汉字，cnchar-draw会检测是否绘制正确

请用鼠标在绘制出的**测验**两个字上按顺序画上笔画

<codebox id='test-draw'></codebox>
