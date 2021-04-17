<p align="center">
    <img src='https://cdn.jsdelivr.net/gh/theajack/cnchar/dist/rm-logo.png' width='200px'/>
</p> 

<p align="center">
    <a href="https://www.github.com/theajack/cnchar/stargazers" target="_black">
        <img src="https://img.shields.io/github/stars/theajack/cnchar?logo=github" alt="stars" />
    </a>
    <a href="https://www.github.com/theajack/cnchar/network/members" target="_black">
        <img src="https://img.shields.io/github/forks/theajack/cnchar?logo=github" alt="forks" />
    </a>
    <a href="https://www.npmjs.com/package/cnchar" target="_black">
        <img src="https://img.shields.io/npm/v/cnchar?logo=npm" alt="version" />
    </a>
    <a href="https://www.npmjs.com/package/cnchar" target="_black">
        <img src="https://img.shields.io/npm/dm/cnchar?color=%23ffca28&logo=npm" alt="downloads" />
    </a>
    <a href="https://www.jsdelivr.com/package/npm/cnchar" target="_black">
        <img src="https://data.jsdelivr.com/v1/package/npm/cnchar/badge" alt="jsdelivr" />
    </a>
</p>
<p align="center">
    <a href="https://github.com/theajack" target="_black">
        <img src="https://img.shields.io/badge/Author-%20theajack%20-7289da.svg?&logo=github" alt="author" />
    </a>
    <a href="https://www.github.com/theajack/cnchar/blob/master/LICENSE" target="_black">
        <img src="https://img.shields.io/github/license/theajack/cnchar?color=%232DCE89&logo=github" alt="license" />
    </a>
    <a href="https://cdn.jsdelivr.net/gh/theajack/cnchar/dist/cnchar.latest.min.js"><img src="https://img.shields.io/bundlephobia/minzip/cnchar.svg" alt="Size"></a>
    <a href="https://github.com/theajack/cnchar/search?l=javascript"><img src="https://img.shields.io/github/languages/top/theajack/cnchar.svg" alt="TopLang"></a>
    <a href="https://github.com/theajack/cnchar/issues"><img src="https://img.shields.io/github/issues-closed/theajack/cnchar.svg" alt="issue"></a>
    <a href="https://www.github.com/theajack/cnchar"><img src="https://img.shields.io/librariesio/dependent-repos/npm/cnchar.svg" alt="Dependent"></a>
</p>

<h3>🚀 Full-featured, multi-end support for hanyu pinyin strokes js library</h3>

**[中文](https://github.com/theajack/cnchar#cnchar--) | [Online trial / documentation](https://cnchar.js.org) | [Update log](https://theajack.gitee.io/cnchar/guide/version.html) | [Application: Typing game](https://theajack.gitee.io/type/) | [Feedback error / missing](https://github.com/theajack/cnchar/issues/new) | [Gitee](https://gitee.com/theajack/cnchar)**

---

<!--toc-->

---

### Foreword

Thank you for your support for cnchar. Since the cnchar lexicon comes from the Internet, although it has been modified and expanded by myself, it is still inevitable that there are errors and gaps. I hope you can [feedback](https://github.com/theajack/cnchar/issues/new) the errors and gaps found in use I (or amend and submit it by myself, and it will be merged into cnchar after reviewing without error)

[I want to report errors or omissions](https://github.com/theajack/cnchar/issues/new)

About this document

Since the document is long, please do a brief introduction, please read as needed

-Chapter zero can help developers quickly access cnchar
-Chapters 1 and 2 introduce the functions of cnchar and its function library
-Chapter 3 introduces the installation and use of cnchar
-Chapter 4 introduces the differences in the use of cnchar in various environments
-Chapter 5 introduces the API usage of cnchar and its function library in detail
-Chapter 6 lists the parameters of each method and a large number of cnchar use examples
-Chapter 7 introduces some cnchar use cases
  
### 0. Quick use

Use npm to install:

```
npm i cnchar
```

```js
import cnchar from 'cnchar';
'汉字'.spell();
'汉字'.stroke();
```

Use the script tag to use:

```html
<script src="https://cdn.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
<script>
    '汉字'.spell();
    '汉字'.stroke();
</script>
```

<a href="#66-usage-examples"> More detailed usage examples </a> | <a href="#6-spell-stroke-parameters"> Detailed introduction of parameters </a>

### 1. Features

1. Obtain**Chinese Pinyin**, support the first letter, uppercase and lowercase, array split, alternative**multi-syllable characters**and other functions
2. Support**Polyphones**
3. Support**Pinyin tone**
4. Get Chinese characters**stroke number**, support array split
5. Obtain Chinese characters**stroke order**, detailed stroke name
6. Support visualization**Drawing Chinese character strokes**, multiple drawing modes are optional
7. Support**Simplified Chinese characters**,**Traditional Chinese characters**,**Martian script**
8. Support**Find**all**Chinese characters**of a certain pinyin, traditional characters, and polyphonic characters
9. Support**Find**all the specified number of strokes**Chinese characters**, traditional characters
10. Support**Query by stroke order**Chinese characters
11. Support**Query pinyin information**, including initials, finals, tones, tone positions, etc.
12. Support**Traditional Chinese Characters**Pinyin, Stroke Count and all above functions to achieve the same functions as Simplified Chinese Characters
13. Support **Idiom** query function, you can query idioms according to Chinese characters, pinyin (tone), stroke number
14. Support **Xiehouyu** query function, support fuzzy query
15. Provide Chinese character tool method, which is convenient for developers to **operate pinyin and Chinese characters**
16. Support **Range radicals** query function
17. **Small size**, min version is only 46 kb, zip version is 34 kb(contains a large number of Chinese Pinyin dictionaries)
18. **Multi-end available**, can be used in**browser, nodejs, applet / mini-game, ReactNative / Weex / Uniapp / Electron, webpack**..., supports all environments where js can run
19. **typescript**, the main library and all plug-in libraries are developed using typescript
20. Rich configuration, split into 7 libraries according to function
21. Support **custom** pinyin strokes and other data, use more flexible
22. Support **IE9** and above

### 2. Overview

Taking into account different needs, the functions of cnchar have been split into the following seven libraries to facilitate developers to access them as needed:

| Name|Description|Function | Supported version |
|:----------: |:------------------------------------------: |:-------------------: |:-------------------: |
cnchar|The main js library, the other three libraries depend on this library|Contains simplified Chinese pinyin, polyphonic characters, tone, stroke number and other functions | -- |
| cnchar-poly|Polysyllabic dictionary|Contains the function of identifying polysyllabic words | -- |
| cnchar-order|Stroke order library|Contains functions for identifying stroke order, stroke name, stroke shape, etc. | -- |
| cnchar-trad|Traditional Chinese Character Library|Support Traditional Chinese, Mars, Simplified Chinese, Simplified Chinese Pinyin Stroke and Multi-phone Characters | -- |
| cnchar-draw|Drawing stroke library|Point out the visual drawing of Chinese characters, there are four modes of normal, animation, stroke, test optional, the library is only available in the browser environment | 2.1+ |
| cnchar-idiom | idiom library | support idiom query and other functions | 2.2+ |
| cnchar-xhy | Xiehou language library | Support Xiehouyu query and other functions | 2.2+ |
| cnchar-radical  |    Radical radical library    | Support querying radicals of Chinese characters | 2.2.5+ |

### 3. Installation

#### 3.1 Install with npm

Install the basic library:

```
npm i cnchar
```

Install additional function library:

```
npm i cnchar-poly cnchar-order cnchar-trad cnchar-draw cnchar-idiom cnchar-xhy cnchar-radical
```

Of course, you can also install a few of them on demand, but the basic library `cnchar` must be installed (draw, idiom, xhy, radical four libraries can be used independently)

Or you can use the full functionality by installing `cnchar-all`, this library references all the above plugin libraries

```
npm i cnchar-all
```

#### 3.2 Introduce using cdn

```html
<script src="https://cdn.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-order/cnchar.order.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-trad/cnchar.trad.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-draw/cnchar.draw.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-idiom/cnchar.idiom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-xhy/cnchar.xhy.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-radical/cnchar.radical.min.js"></script>
```

Or use the following cdn, which contains the above seven libraries

```html
<script src="https://cdn.jsdelivr.net/npm/cnchar-all/cnchar.all.min.js"></script>
```


### 4. Use

#### 4.1 webpack browser environment(with window object)

After npm installs several libraries:

```js
// Please ensure that the cnchar basic library is introduced first, the order of several other libraries does not matter
import cnchar from 'cnchar';
import 'cnchar-poly';
import 'cnchar-order';
import 'cnchar-trad';
import 'cnchar-draw';
import 'cnchar-idiom';
import 'cnchar-xhy';
import 'cnchar-radical';
// Please use the plug-in as needed

console.log('汉字'.spell()); // Called by prototype
console.log(cnchar.spell('汉字')); // cnchar api call
```

In the browser environment, a cnchar object will be defined on the window object

#### 4.2 Nodejs and other non-browser environments

In the non-browser environment, you need to use the `cnchar.use()` method to load the function library:

```js
// Please ensure that the cnchar basic library is introduced first, the order of several other libraries does not matter
var cnchar = require('cnchar');
var poly = require('cnchar-poly');
var order = require('cnchar-order');
var trad = require('cnchar-trad');
var idiom = require('cnchar-idiom');
var xhy = require('cnchar-xhy');
var radical = require('cnchar-radical');
// Please use the plug-in as needed
// cnchar-draw cannot be used in a non-browser environment
cnchar.use(poly, order, trad, idiom, xhy, radical);

console.log('汉字'.spell()); // Called by prototype
console.log(cnchar.spell('汉字')); // cnchar api call
```

Other usage methods are consistent with the browser environment

#### 4.3 Native browser environment

The native browser environment requires the use of script tags to import js files:

```html
<script src="https://cdn.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-order/cnchar.order.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-trad/cnchar.trad.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-draw/cnchar.draw.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-idiom/cnchar.idiom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-xhy/cnchar.xhy.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cnchar-radical/cnchar.radical.min.js"></script>
<script>
    console.log('汉字'.spell()); // Called by prototype
    console.log(cnchar.spell('汉字')); // cnchar api call
</script>
```

### 5. API

Type declaration: [cnchar.d.ts](https://github.com/theajack/cnchar/blob/master/src/main/index.d.ts) | [cnchar-order.d.ts](https://github.com/theajack/cnchar/blob/master/src/plugin/order/index.d.ts) | [cnchar-trad.d.ts](https://github.com/theajack/cnchar/blob/master/src/plugin/trad/index.d.ts)

Note: This chapter only introduces API usage, please refer to Chapter 6 for more usage examples

#### 5.1 Basic Pinyin Stroke API: spell & stroke

In order to make the API use as simple as possible, the library has designed two main and very simple APIs, and to ensure that the calling method is consistent:

```js
// Pinyin, polyphonic words, tones, etc. of Chinese characters are integrated in the following methods
cnchar.spell(string [,...args]);
// or
string.spell([... args])

// Get the strokes and stroke order of Chinese characters are integrated in the following methods
cnchar.stroke(string [,...args]);
// or
string.stroke([... args])
```

The API design is consistent, `string` represents the Chinese character string to be processed

The key lies in the configuration of optional parameters, which will be introduced separately in <a href="#user-content-6-spell-stroke-parameters"> Chapter 6 </a>

#### 5.2 Draw Chinese characters visually: draw

Type declaration: [cnchar.draw.d.ts](https://github.com/theajack/cnchar/blob/master/src/plugin/draw/index.d.ts)

The `cnchar-draw` library is used to support the visual drawing of Chinese characters in a browser environment, so this library is only available in a browser environment. There are four drawing modes: normal, animation, stroke, and test.

##### 5.2.1 Use

The usage is as follows:

```js
cnchar.draw('你好', options); // options are optional parameters, detailed in 5.2.2
```

The results are as follows:

![draw.jpg](https://cdn.jsdelivr.net/gh/theajack/cnchar/docs/assets/readme/draw.jpg)

The library supports independent use without cnchar

```js
import draw from 'cnchar-draw';
draw('你好')
```

When using cdn reference, the `CncharDraw` object will be exposed upwards in the window

##### 5.2.2 Parameters

There are many parameters of draw, the first thing to understand is that draw is divided into four drawing modes:

1. normal: normal drawing
2. animation: with drawing animation, support continuous drawing, simultaneous drawing, circular drawing
3. stroke: draw in a single step according to Chinese characters
4. test: Test mode, the user can draw Chinese characters in the container, cnchar-draw will detect whether it is drawn correctly

The following are all optional parameters and descriptions of options, please refer to [online documentation](https://cnchar.js.org) for usage details:

```ts
declare interface DrawOption {
    el?: string|HTMLElement; // The drawn container, support selector or dom, if not filled, a dom will be appended after the body as a container
    type?: DrawType; // Drawing mode, default is normal
    clear?: boolean; // Whether to clear the container before drawing The default is true
    style?: {// style class
        backgroundColor?: string, // The default is #fff
        showOutline?: boolean; //: true,
        showCharacter?: boolean; //: true,
        currentColor?: string; //:'# b44', // Only valid in stroke mode
        length?: number; //: 60,
        padding?: number; //: 5, // numeric value, default 20. Canvas padding between Chinese characters and edges
        outlineColor?: string; //:'#ddd', // hexadecimal character, default'#DDD'.
        strokeColor?: string; //:'# 555', // Hexadecimal character, default'# 555'. Draw the color of each stroke.
        radicalColor?: string; //: null, // Hexadecimal character, default null. If there is radical data, the color of the radical is drawn in the stroke. If not set, the laser will draw the same color as other strokes.
        strokeFadeDuration?: number; // 400
    },
    line?: {// background line
        lineStraight?: boolean; //: true,
        lineCross?: boolean; //: true,
        lineWidth?: number; //: 1,
        lineColor?: string; //:'#ddd',
        lineDash?: boolean; //: true,
        border?: boolean; //: true,
        borderWidth?: number; //: 1,
        borderColor?: string; //:'#ccc',
        borderDash?: boolean; //: false,
    },
    animation?: {
        strokeAnimationSpeed ​​?: number; //: 1, // value, default 1. The speed of drawing each stroke must be greater than 0. Increasing this number can draw strokes faster, and decreasing strokes draws more slowly.
        delayBetweenStrokes?: number; //: 1000, // value, default 1000. The interval time(in milliseconds) between each stroke in the animation.
        delayBetweenLoops?: number; //: 200, // value, default 2000. The time(in milliseconds) between each animation loop when looping animations.
        autoAnimate?: boolean; //: true,
        animateComplete?: Function; //:() => {},
        stepByStep?: boolean; //: true,
        loopAnimate?: boolean; //: false,
    },
    test?: {
        strokeHighlightSpeed ​​?: number; //: 20, // Numeric value, default 20. The speed of highlighting each stroke must be greater than 0 when giving hints in the quiz. Increase this number to highlight faster, and decrease to highlight slower.
        highlightColor?: number; //:'#aaf', // Hexadecimal characters, default'#AAF'. The color used to highlight in the quiz.
        drawingColor?: number; //:'# 333', // Hexadecimal characters, default'# 333'. The color of the lines drawn during the quiz.
        drawingWidth?: number; //: 4, // numeric value, default 4. The width of the line drawn during the test.
        showHintAfterMisses?: number; //: 3, // Integer, default 3 The number of misses before the stroke highlighting prompt is given to the user. Set to false to disable. You can also set this when creating a quiz.
        highlightOnComplete?: number; //: true, // Boolean, default true. Controls whether the quiz will highlight the character briefly when the user finishes drawing the entire character. You can also set this when creating a quiz.
        highlightCompleteColor?: number; //: null, // Hexadecimal character, default null. The color used when highlighting characters in the quiz. If not set, highlightColor will be used. Only relevant if highlightOnComplete is true.
        onTestStatus?(args: TestStatus): void; //: null, //({index, status, data}) => {}
    }
};
```

##### 5.2.3 Use in WeChat Mini Program

The library is driven by HanziWriter, and currently only supports use in the web environment. If you need to use WeChat Mini Programs, please refer to [HanziWriter API](https://hanziwriter.org/docs.html#wechat-miniprograms)

#### 5.3 Traditional, Simplified and Martian conversion: convert

After the introduction of `cnchar-trad`, cnchar has the traditional, simplified, and Martian text conversion function. You can use this function by using the method on the` cnchar.convert` object.

Since v2.0.4, cnchar reserves the following methods for use:

```js
cnchar.convert.simpleToTrad(string); // Simplified => Traditional
cnchar.convert.simpleToSpark(string); // Simplified => Martian
cnchar.convert.tradToSimple(string); // Traditional => Simplified
cnchar.convert.tradToSpark(string); // Traditional => Martian
cnchar.convert.sparkToSimple(string); // Martian => Simplified
cnchar.convert.sparkToTrad(string); // Martian => Traditional

string.convertSimpleToTrad();
string.convertSimpleToSpark();
string.convertTradToSimple();
string.convertTradToSpark();
string.convertSparkToSimple();
string.convertSparkToTrad();
```

#### 5.4 Stroke sequence launches original Chinese characters: orderToWord

After the introduction of the `cnchar-order` function library(version 2.0.2 and above), cnchar supports the function of launching original Chinese characters according to the sequence of stroke names. The usage is as follows:

```js
cnchar.orderToWord(orderNames [,...args]);
```

`orderNames` is a sequence of stroke names

`args` is the parameter list, and the optional values ​​are` ['match','matchorder','contain','start','array','simple'] `, use` cnchar.type.orderToWord` to view Choose value. For detailed usage of parameters, please refer to <a href="#63-ordertoword-parameters"> Chapter 6 orderToWord Parameters </a>

`orderNames` can be space-separated stroke name string or stroke name array, available stroke names can be viewed through the following api

```js
var dict = cnchar.orderToWord.orders; // dict is a json data containing detailed information about the number of strokes
```

The stroke details are as follows, orderNames only need to pass in the stroke name, which is the key value of the following json data

```js
{
    卧钩: {shape: "㇃", letter: "y", sameLetterTo: "斜钩"}
    弯钩: {shape: "㇁", letter: "t"}
    捺: {shape: "㇏", letter: "l"}
    提: {shape: "㇀", letter: "i"}
    撇: {shape: "㇓", letter: "s"}
    撇折: {shape: "㇜", letter: "n"}
    撇点: {shape: "㇛", letter: "m"}
    斜钩: {shape: "㇂", letter: "y", sameLetterTo: "卧钩"}
    横: {shape: "㇐", letter: "j"}
    横折: {shape: "㇕", letter: "c"}
    横折弯: {shape: "㇍", letter: "v", sameLetterTo: "横折折"}
    横折折: {shape: "㇅", letter: "v", sameLetterTo: "横折弯"}
    横折折折: {shape: "㇎", letter: "q"}
    横折折折钩: {shape: "㇡", letter: "w", sameLetterTo: "横撇弯钩"}
    横折折撇: {shape: "㇋", letter: "a"}
    横折提: {shape: "㇊", letter: "p"}
    横折钩: {shape: "㇆", letter: "r"}
    横撇: {shape: "㇇", letter: "e", sameLetterTo: "横钩"}
    横撇弯钩: {shape: "㇌", letter: "w", sameLetterTo: "横折折折钩"}
    横斜钩: {shape: "⺄", letter: "o"}
    横钩: {shape: "㇖", letter: "e", sameLetterTo: "横撇"}
    点: {shape: "㇔", letter: "k"}
    竖: {shape: "㇑", letter: "f"}
    竖弯: {shape: "㇄", letter: "b"}
    竖弯钩: {shape: "㇟", letter: "u"}
    竖折折: {shape: "㇞", letter: "x", sameLetterTo: "竖折撇"}
    竖折折钩: {shape: "㇉", letter: "z"}
    竖折撇: {shape: "ㄣ", letter: "x", sameLetterTo: "竖折折"}
    竖提: {shape: "㇙", letter: "h"}
    竖钩: {shape: "㇚", letter: "g"}
}
```

Note: The following five pairs of strokes are not distinguished, and the same letters are used:
**卧钩 = 斜钩**、**横折弯 = 横折折**、**横折折折钩 = 横撇弯钩**、**横撇 = 横钩**、**竖折折 = 竖折撇**

Here is an example:

```js
cnchar.orderToWord(['横','撇','捺']);
// Equivalent to 
cnchar.orderToWord('横 撇 捺');
// returns "丈大"
cnchar.orderToWord(['横','撇','捺'],'array');
// returns ["丈","大"]
cnchar.orderToWord(['横','撇','捺'],'start');
// returns "丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横','撇','捺'],'start','simple');
// returns "丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
```

If the entered stroke is not in `cnchar.orderToWord.orders`, the method will print an error indicating which stroke is wrong, and return an empty array.

#### 5.5 Query original Chinese characters by pinyin: spellToWord

The `spellToWord` method is used to query the Chinese characters that meet the requirements based on pinyin. The usage is as follows:

```js
cnchar.spellToWord(spell [,...args]);
```

example:

```js
cnchar.spellToWord('shàng'); // returns'上尚绱鞝'
cnchar.spellToWord('shàng','alltone'); // returns'上伤汤尚垧殇晌商绱觞赏墒熵裳傷湯殤鞝觴賞'
cnchar.spellToWord('shang4','alltone','trad'); // returns'傷湯殤鞝觴賞'
cnchar.spellToWord('lv2','simple'); // returns'驴闾榈'
```

Note:

spell means Pinyin, you can use tone letters or tone number scale:
Example: `shàng is equivalent to shang4`

ü can use v to express, for example: `lü is equivalent to lv`

#### 5.6 Query original Chinese characters by stroke count: strokeToWord

The `strokeToWord` method is used to query Chinese characters that meet the requirements based on the number of strokes. The usage is as follows:

```js
cnchar.strokeToWord(strokeCount [,...args]);
```

example:

```js
cnchar.strokeToWord(25); // returns'鬣馕囔戆攮纛饞躥顱籮蠻廳灣鑲鑰'
cnchar.strokeToWord(25,'simple'); // returns'鬣馕囔戆攮纛'
cnchar.strokeToWord(1,'array'); // returns ['一','乙']
```

#### 5.7 Idiom Function

cnchar added the idiom function in 2.2.0. To enable this function, you need to install the `cnchar-idiom` function library, which can run independently of the main cnchar library.

The usage is as follows:

```ts
cnchar.idiom(text:string, ...idiomArgs: Array<idiomArg>):Array<string>;
```

See a specific example

```js
// According to Chinese characters query idiom, the space at the end can be omitted
cnchar.idiom(['五', '', '十', '']); // ['五风十雨', '五光十色']
// Query the idiom according to the number of strokes, 0 means match any stroke, and 0 at the end can be omitted
cnchar.idiom([4, 6, 2, 0], 'stroke'); // ["不当人子", ... ]
// Query idioms based on pinyin
cnchar.idiom('shang', 'spell'); // ["伤风败化", "伤风败俗", ...]
// with tone
cnchar.idiom('shang4', 'spell', 'tone'); // ["上兵伐谋", "上不着天，下不着地", ... ]
```

When using cdn references, the `CncharIdiom` object will be exposed upward in the window

#### 5.8 Xiehouyu function

cnchar added the Xiehouyu function in 2.2.0. To enable this function, you need to install the `cnchar-xhy` function library, which can be run independently of the main cnchar library.

The usage is as follows:

```ts
cnchar.xhy(text:string, ...xhyArgs: Array<xhyArg>):Array<string>;
```

See a specific example

```js
// Exact query
cnchar.xhy('大水冲了龙王庙'); // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人'],
// fuzzy query
cnchar.xhy('大水', 'fuzzy'); // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
// Only return the answer result
cnchar.xhy('大水', 'fuzzy', 'answer');  // ['泥沙俱下', '后浪推前浪', ... ]
// According to the second sentence of Xiehouyu
cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second'); // ['醉汉过铁索桥', '扶着醉汉过破桥']
```

When using cdn references, the `CncharXHY` object will be exposed upwards in the window

#### 5.9 Radical radical function

Cnchar added the radical radical function in 2.2.5. To enable this function, you need to install the `cnchar-radical` function library, which can run independently of the cnchar main library

Thanks to pr provided by `kewell-tsao`

The usage is as follows:

```ts
cnchar.radical(text:string | Array<string>, ...radicalArgs: Array<radicalArg>): string | Array<string>;
```

See a specific example

```js
cnchar.radical('你'); // "亻",
cnchar.radical('你好呀'); // "亻女口"
// Return array
cnchar.radical('你好呀', 'array'); // ["亻", "女", "口"]
// The incoming array will return the array by default
cnchar.radical(["你", "好", "呀"]); // ["亻", "女", "口"]
```

When using cdn references, the `CncharRadical` object will be exposed upwards in the window

#### 5.10 Chinese Characters and Pinyin Tools

cnchar organizes and exposes some methods of operating pinyin and Chinese characters used inside the library, which is convenient for developers to operate pinyin and Chinese characters conveniently and efficiently

##### 5.10.1 Query pinyin details: spellInfo

The `spellInfo` method is used to query the detailed information of Pinyin, the usage is as follows:

```js
cnchar.spellInfo(spell);
```

example:

```js
cnchar.spellInfo('Shàng');
/*
// The return value and meaning are as follows
{
     spell: 'shang', // Pinyin without tone
     initial: 'sh', // initials
     final: 'ang', // finals
     tone: 4, // tone
     index: 3 // pitch position
},
*/
```

In addition, `spellInfo` contains two properties,`initials` and `tones`, which represent all available initials and tones respectively:

```js
cnchar.spellInfo.initials;
// ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j' , 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w']
cnchar.spellInfo.tones;
// ['ā', 'á', 'ǎ', 'à', 'ō', 'ó', 'ǒ', 'ò', 'ē', 'é', 'ě', 'è' , 'ī', 'í', 'ǐ', 'ì', 'ū', 'ú', 'ǔ', 'ù', 'ǖ', 'ǘ', 'ǚ', 'ǜ', ' * ',' ń ',' ň ',' ǹ ']
// Use * instead of n
```

##### 5.10.2 Pinyin tone operation: transformTone

The `transformTone` method is used to convert toned pinyin to toneless pinyin, and the tone position and tone

The usage is as follows:

```ts
cnchar.transformTone(spell: string, tone?: boolean, type?: 'low' | 'up');
/* return value
{
     spell: string; // converted pinyin
     tone: toneType; // tone
     index: number; // tone position
     isTrans: boolean; // Whether it is converted such as lv2 -> lǘ
}
*/
```

tone is an optional parameter, indicating whether the return value spell needs to bring a tone, the default is false

type is an optional parameter, indicating that the return value spell sets the case, the default is'low'

The transformTone spell parameter supports the use of v instead of ü, and the use of numbers at the end to represent the tone, for example, `lv is equivalent to lü`shang4 is equivalent to shàng`

##### 5.10.3 Is it Chinese characters: isCnChar

The `isCnChar` method is used to determine whether a character is a Chinese character

```ts
cnchar.isCnChar(word: string): boolean;
```

##### 5.10.4 Is it a polyphonic word: isPolyWord

The `isPolyWord` method is used to determine whether a character is a Chinese character

```ts
cnchar.isPolyWord(word: string): boolean;
```

##### 5.10.5 Compare Pinyin (Chinese character) size: compareSpell

`CompareSpell` method is used to compare the size of Pinyin or Chinese characters according to Pinyin

This method supports comparison according to Pinyin and tones. For sorting, please refer to the `sortSpell` method

```ts
cnchar.compareSpell(spell1: string, spell2: string, tone?: boolean);
```

The tone parameter indicates whether to compare according to the tone, the default is false

This method returns a string,'more','less','even' means that spell1 is greater than, less than, equal to spell2

example:

```js
cnchar.compareSpell('ao', 'ai') // Returns 'more' because o comes after i
cnchar.compareSpell('奥', 'ai') // Returns 'more'
```

##### 5.10.6 Compare the number of strokes of Chinese characters: compareStroke

The `compareStroke` method is used to compare the size of Chinese characters according to the number of strokes. It can be used to sort the first Chinese character strokes according to the name. For sorting, please refer to the `sortStroke` method

```ts
cnchar.compareStroke(stroke1: string, stroke2: string);
```

This method supports the input of Chinese characters or numbers, Chinese characters can be input multiple

This method returns a string,'more','less','even' means stroke1 is greater than, less than, equal to stroke2

example:

```js
cnchar.compareStroke('你', '好') // Returns 'more'
cnchar.compareStroke(20, '好') // Returns 'more'
cnchar.compareStroke('一个', '好') // Returns 'less'
```

##### 5.10.7 Sort by pinyin: sortSpell

The `sortSpell` method is used to sort Chinese characters or Pinyin according to Pinyin, supports input arrays or strings, supports sorting by tone, and supports reverse order

```ts
cnchar.sortSpell(spells:Array<string> | string, ...args?: Array<'tone'|'desc'>): Array<string> | string;
```

The spells parameter can be an array or a string

When it is an array, the array elements can be Chinese characters or Pinyin, and the returned array is

When it is a string, the string must be all Chinese characters, and the returned string

There are two optional parameters for this method,'tone' means sorting by tone, and'desc' means reverse order, by default, no distinction is made between tone and ascending order. Please see some examples

```js
cnchar.sortSpell(['你', '好', '吗']) // ['好', '吗', '你']
cnchar.sortSpell('你好吗') // '好吗你'
cnchar.sortSpell('拼品频爱', 'tone', 'desc') // '品频拼爱'
```

##### 5.10.8 Sort by number of strokes: sortStroke

The `sortStroke` method is used to sort Chinese characters according to the number of strokes

```ts
cnchar.sortStroke(strokes:Array<string|number> | string, desc?:'desc'): Array<string> | string;
```

The strokes parameter can be an array or a string

When it is an array, the array elements can be Chinese characters or numbers, and the returned array

When it is a string, the string must be all Chinese characters, and the returned string

This method has an optional parameter,'desc' means reverse order, default ascending order. Please see some examples

```js
cnchar.sortStroke(['一', '三', '二']) // ['一', '二', '三']
cnchar.sortStroke(['一', '三', 2]) // ['一', 2, '三'],
cnchar.sortStroke('一三二', 'desc') // '三二一'
```

##### 5.10.9 Convert digital tones to pinyin tones: shapeSpell

`shapeSpell` converts tones represented by numbers to pinyin tones

For example, `lv2` will be converted to `lǘ`, and `ta1` will be converted to `tā` for user input

```ts
cnchar.shapeSpell(spell: string): string;
```

#### 5.11 Custom data

Since the cnchar data comes from the Internet, although it has undergone a lot of modifications, it is still inevitable that there will be errors and omissions

So cnchar provides an api to modify the default data to facilitate developers to modify and add data

##### 5.11.1 setSpell

Set Pinyin data

```ts
cnchar.setSpell(word: string, spell: string): void;
cnchar.setSpell(json: {[key: string]: string}): void;
```

##### 5.11.2 setSpellDefault

Set the default pronunciation of polyphones

```ts
cnchar.setSpellDefault(word: string, spell: string): void;
cnchar.setSpellDefault(json: {[key: string]: string}): void;
```

##### 5.11.3 setStrokeCount

Set the number of strokes of Chinese characters

```ts
cnchar.setStrokeCount(word: string, count: number): void;
cnchar.setStrokeCount(json: {[key: string]: number}): void;
```

##### 5.11.4 setPolyPhrase

Set the pronunciation of polysyllabic words, rely on `cnchar-poly` library

```ts
cnchar.setPolyPhrase(word: string, spell: string): void;
cnchar.setPolyPhrase(json: {[key: string]: string}): void;
```

##### 5.11.5 setOrder

Set the stroke order of Chinese characters, rely on the `cnchar-order` library

The stroke order added must be a letter, please refer to the corresponding relationship for details [stroke-table](https://github.com/theajack/cnchar/blob/master/src/plugin/order/stroke-table.json)

```ts
cnchar.setOrder(word: string, order: string): void;
cnchar.setOrder(json: {[key: string]: string}): void;
```

##### 5.11.6 setRadical

Set the radicals of Chinese characters, rely on the `cnchar-radical` library

```ts
cnchar.radical.setRadical(word: string, radical: string): void;
cnchar.radical.setRadical(json: {[key: string]: string}): void;
```

##### 5.11.7 addXhy

Add allegorical words, rely on `cnchar-xhy` library

```ts
cnchar.xhy.addXhy(args: Array<Array<string> | string>): void;
cnchar.xhy.addXhy(xhyHead: string, xhyTail: string): void;
```

#### 5.12 Other api

##### 5.12.1 .use()

#### 5.12 Other APIs

##### 5.12.1 .use()

The function of this API is to explicitly enable the three function libraries `poly`,`order`, and `trad`

```js
cnchar.use(... libs);
```

This enablement is necessary in non-browser environments(such as nodejs, etc.), and is used as follows:

```js
// Please ensure that the cnchar basic library is introduced first, the order of several other libraries does not matter
var cnchar = require('cnchar');
var poly = require('cnchar-poly');
var order = require('cnchar-order');
var trad = require('cnchar-trad');
cnchar.use(poly, order, trad); // parameter order is irrelevant, the three parameters can be arbitrarily selected
```

In the browser environment, there is no need to call:

```js
// Please ensure that the cnchar basic library is introduced first, the order of several other libraries does not matter
import cnchar from 'cnchar';
import 'cnchar-poly';
import 'cnchar-order';
import 'cnchar-trad';
```

##### 5.12.2 .type

The type object user gets the currently available `spell`,` stroke`, `orderToWord`,` spellToWord`, `strokeToWord`, `idiom`, `xhy`, `radical` parameter types:

```js
var spellArg = cnchar.type.spell;
var strokeArg = cnchar.type.stroke;
var orderToWordArg = cnchar.type.orderToWord;
var spellToWordArg = cnchar.type.spellToWord;
var strokeToWordArg = cnchar.type.strokeToWord;
var idiomArg = cnchar.type.idiom;
var xhyArg = cnchar.type.xhy;
var radicalArg = cnchar.type.radical;
```

spellArg Maximum available values: `['array','low','up','first','poly','tone','simple']`

strokeArg Maximum available values: `['letter','shape','count','name','detail','array','order','simple']`

orderToWordArg Maximum available values: `['match','matchorder','contain','start','array','simple']`

spellToWordArg Maximum available values: `['simple','trad','poly','alltone','array']`

strokeToWordArg Maximum available values: `['simple','trad','array']`

idiomArg Maximum available values: `['char','stroke','spell','tone']`

xhyArg Maximum available values: `['fuzzy','answer','second']`

radicalArg Maximum available values: `['array']`

The above values are all json

Specific usage <a href="#user-content-6-spell-stroke-parameters"> Chapter 6 </a>

##### 5.12.3 .check

This value is a Boolean type, used to control whether to enable parameter verification, the default value is true

Parameter verification can check the incoming parameters of `spell` and` stroke` and display the parameters of `invalid`,` ignore` and `redundant` on the console

```js
cnchar.check = false; // Turn off parameter check
```

##### 5.12.4 .version

Get the current version:

```js
var version = cnchar.version; // string type
```

##### 5.12.5 .plugins

List of currently used function libraries, the most common case is `["order","trad","poly"]`

```js
var plugins = cnchar.plugins; // array type
```

### 6 spell stroke parameters

#### 6.1 spell parameters

The parameters are called as follows, all arg parameters are optional

```js
cnchar.spell(string, arg1, arg2, ...);
string.spell(arg1, arg2, ...)
```

The arg parameter information is as follows:

| Parameter|Function|Whether Default|Dependency Library|Remarks |
|:----: |:----------------------: |:------: |:--------: |:-------: |
| array|return array|no |--|--|
first|Back to the first letter of Pinyin|No |--|--|
| up|Capitalize all results|No |--|--|
| low|lowercase all results|no |--| will be overwritten by up parameter |
| poly|Use candidate polyphonic characters|No |--|--|
| tone|Enable tone|No |--|--|
simple|Whether to disable pinyin of traditional characters|No|cnchar-trad|After using cnchar-trad, the traditional pinyin is converted by default. This parameter is used to disable traditional pinyin |

#### 6.2 stroke parameters

The parameters are called as follows, all arg parameters are optional

```js
cnchar.stroke(string, arg1, arg2, ...);
string.stroke(arg1, arg2, ...);
```

The arg parameter information is as follows:

| Parameter|Function|Whether Default|Dependency Library|Remarks |
|:----: |:---------------: |:------: |:----------: |:-----------: |
| array|return array|No |--| This parameter is ignored after using cnchar-order and the order parameter is enabled |
order|Enable stroke order|No|cnchar-order |--|
letter|Use stroke order alphabet sequence|Yes|cnchar-order|When order is enabled, this value is the default value |
detail|Use stroke order details as the return value, each Chinese character corresponds to a json|No|cnchar-order|Priority is less than letter |
shape|Use stroke shape as return value|No|cnchar-order|Priority is less than detail |
| name|Use stroke name as return value|No|cnchar-order|Priority is less than shape |
| count|Use the number of strokes as the return value|No|cnchar-poly|Priority is less than name |
simple|Whether to disable the stroke function of traditional characters|No|cnchar-trad|After using cnchar-trad, the stroke function is enabled for traditional characters by default.

#### 6.3 orderToWord parameters

The parameters are called as follows, all arg parameters are optional

```js
cnchar.orderToWord(orders, arg1, arg2, ...);
```

The arg parameter information is as follows:

| Parameter|Function|Whether Default|Dependency Library|Remarks |
|:---------: |:--------: |:------: |:---------: |:---: |
| match|Match Chinese characters with all strokes in the stroke order|No |--|--|
| matchorder|Match Chinese characters containing all strokes in the stroke order in the same order|No |--|--|
| contain|Match the Chinese characters containing the stroke order|No |--|--|
| start|matches all Chinese characters starting with this stroke order|No |--|--|
| array|Returns an array that meets the conditions, the default is to return a string|No |--|--|
simple|Disable Traditional Chinese|No|cnchar-trad|This parameter is only valid after the introduction of `cnchar-trad` |

Regarding the matching parameters, the priority is**match> matchorder> contain> start> default**

When there is no matching parameter, it means using full match, that is, the number of strokes of Chinese characters is exactly the same as the orders

#### 6.4 spellToWord parameters

The parameters are called as follows, all arg parameters are optional

```js
cnchar.spellToWord(spell, arg1, arg2, ...);
```

spell means Pinyin, you can use tone letters or tone number scale:
Example: `shàng is equivalent to shang4`

ü can use v to express, for example: `lü is equivalent to lv`

The arg parameter information is as follows:

| Parameter|Function|Whether Default|Dependency Library|Remarks |
|:-----: |:----: |:------: |:---: |:---: |
| simple|Only match simplified Chinese characters|No |--|--|
| trad|Only match traditional characters|No|cnchar-trad|This parameter is only valid after the introduction of `cnchar-trad` |
| poly|Only match polyphones|No |--|--|
| alltone|Chinese characters that match all the tones of the pinyin|No |--| Pinyin without tones means soft |
| array|Returns an array that meets the conditions, the default is to return a string|No |--|--|

Note: If both `simple` and` trad` parameters do not exist, then when"cnchar-trad"is introduced, it will match both Simplified and Simplified Chinese; when"cnchar-trad"is not introduced, it will only match Simplified


#### 6.5 strokeToWord parameters

The parameters are called as follows, count represents the number of strokes, all arg parameters are optional

```js
cnchar.strokeToWord(count, arg1, arg2, ...);
```

| Parameter|Function|Whether Default|Dependency Library|Remarks |
|:-----: |:----: |:------: |:---: |:---:|
| simple|Only match simplified Chinese characters|No |--|--|
| trad|Only match traditional characters|No|cnchar-trad|This parameter is only valid after the introduction of `cnchar-trad` |
| array|Returns an array that meets the conditions, the default is to return a string|No |--|--|

Note: If both `simple` and` trad` parameters do not exist, then when"cnchar-trad"is introduced, it will match both Simplified and Simplified Chinese; when"cnchar-trad"is not introduced, it will only match Simplified

#### 6.6 idiom parameters

The parameters are called as follows, value indicates the query object, you can try Pinyin Chinese character strokes, all arg parameters are optional

```js
cnchar.idiom(value,arg1,arg2,...);
```

| Parameter | Function | Whether Default | Dependency Library | Remarks |
| :-----: | :----: | :------: | :---: | :---: |
| char | query idioms based on Chinese characters | yes | - | default value without calling |
| stroke | query idioms based on the number of strokes | No | - | priority over char |
| spell | Query idioms based on Pinyin | No | - | Priority over stroke |
| tone | Enable Pinyin tone query | No | - | Only effective in spell mode |

Note: Priority `spell`> `stroke`> `char`

#### 6.7 xhy parameters

The parameters are called as follows. value represents the query object of Xiehouyu, which can be the first sentence or the second sentence of Xiehouyu. All arg parameters are optional

```js
cnchar.xhy(value,arg1,arg2,...);
```

| Parameter | Function | Whether Default | Dependency Library | Remarks |
| :-----: | :----: | :------: | :---: | :---: |
| fuzzy | Whether to support fuzzy query | No | - | Whether to include the input string |
| answer | Whether to output only the answer | No | - | The default is to output the entire sentence of the rest of the sentence |
| second | Is the query based on the last sentence of Xiehouyu | No | - | - |

#### 6.8 radical parameters

The parameter call is as follows, value indicates the Chinese character to be queried for the radical, which can be a string or an array

```js
cnchar.radical(value,arg1,arg2,...);
```

| Parameter | Function | Whether Default | Dependency Library | Remarks |
| :-----: | :----: | :------: | :---: | :---: |
|  array   | Whether to return an array |    No    | -- |  When passed in as an array, the array is returned by default  |

#### 6.9 Usage Examples:

##### 6.9.0 Installation and use

npm way

```
npm i cnchar
```

```js
import cnchar from 'cnchar';
// do something
```

script tag reference

```html
<script src="https://cdn.jsdelivr.net/gh/theajack/cnchar/dist/cnchar.latest.min.js"></script>
<script>
    // do something
</script>
```

##### 6.9.1 cnchar basic library function

```js
// spell function
'测试'.spell(); // returns'CeShi'
'测试'.spell('up'); // returns'CESHI'
'测试'.spell('low'); // returns'ceshi'
'测试'.spell('first'); // returns'CS'
'测试'.spell('first','low'); // returns'cs'
'测试'.spell('array'); // returns ['Ce','Shi']
'测试'.spell('array','first','low'); // returns ['c','s']
'测试'.spell('tone'); // returns'CèShì'
'长大了'.spell('poly'); // returns'(Zhang|Chang)(Da|Dai)(Le|Liao)'

// stroke function
'测'.stroke(); // returns 9
'测试'.stroke(); // returns 17
'测试'.stroke('array'); // returns [9,8]

// spellToWord function
cnchar.spellToWord('shàng'); // returns"上尚绱"
cnchar.spellToWord('lv2'); // returns"驴闾榈"

// strokeToWord function
cnchar.strokeToWord(2); // returns"丁七乃乜九了二人亻儿入八冂几凵刀刁力勹"
```

Remarks:

1. The string.spell(... arg) method is equivalent to `cnchar.spell(string,...args)`
2. The string.stroke(... arg) method is equivalent to `cnchar.stroke(string,...args)`
3. spell method Non-Chinese characters will return to the original character
4. Stroke method Non-Chinese characters will count as 0
5. Stroke method order mode Non-Chinese characters will return undefined

##### 6.9.2 cnchar-poly library function

This library is used to accurately identify polyphonic words and also supports other parameter functions in 6.3.1

```js
'长大了'.spell(); // returns'ZhangDaLe'
'长大了'.spell('array'); // returns ["Zhang","Da","Le"]
'长大了'.spell('poly'); // returns'(Zhang|Chang)(Da|Dai)(Le|Liao)'
```

##### 6.9.3 cnchar-order library function

This library is used to query the stroke order and stroke name of Chinese characters. The return value is an array.

```js
'一个'.stroke('order'); // return ["j","slf"] need to explicitly use the order parameter to return the sequence of stroke number letters by default
'一个'.stroke('order','detail'); //
/* Return detailed stroke information:
[
    [{
       "shape":"㇐", 
       "type":"平笔", 
       "foldCount":"0", 
       "name":"横"
    }],[{
       "shape":"㇓", 
       "type":"平笔", 
       "foldCount":"0", 
       "name":"撇"
    },{
       "shape":"㇏", 
       "type":"平笔", 
       "foldCount":"0", 
       "name":"捺"
    },{
       "shape":"㇑", 
       "type":"平笔", 
       "foldCount":"0", 
       "name":"竖"
    }]
]*/
'一个'.stroke('order','shape'); // returns [["㇐"], ["㇓","㇏","㇑"]]
'一个'.stroke('order','name'); // returns [["横"],["撇","捺","竖"]]
'一个'.stroke('order','count'); // returns [1, 3]
```

According to the sequence of stroke names, the original Chinese characters are introduced

```js
var orders = cnchar.orderToWord.orders; // View the supported stroke names
cnchar.orderToWord(['横','撇','捺']);
// returns"丈大"
cnchar.orderToWord(['横','撇','捺'],'array');
// returns ["丈","大"]
cnchar.orderToWord(['横','撇','捺'],'start');
// Back to"丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横','撇','捺'],'start','simple');
// back to"丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
cnchar.orderToWord(['横','撇','捺'],'match');
// Back to"丈大仄兮友天太夫夭尺攵文木犬长丛仗仝叭..."// Omit the following
cnchar.orderToWord(['横','撇','捺'],'matchorder');
// Back to"丈大仄友天太夫夭尺攵文木犬仗叭史央夯失..."// Omit the following
cnchar.orderToWord(['横','撇','捺'],'contain');
// Back to"丈大天太夫夭尺攵文犬仗叭史央夯失疋矢乔..."// Omit the following
```

##### 6.9.4 cnchar-trad library function

This library is used to support the conversion of traditional Chinese characters to Mars and provide traditional Chinese characters for basic functions such as pinyin

###### 6.9.4.1 convert font conversion

```js
'一个人'.convertSimpleToTrad(); // returns"壹個人"is equivalent to cnchar.convert.simpleToTrad
cnchar.convert.simpleToTrad('一个人');

'一个人'.convertSimpleToSpark(); // returns"①个亾"is equivalent to cnchar.convert.simpleToSpark
cnchar.convert.simpleToSpark('壹個人');

'壹個人'.convertTradToSimple(); // returns"一个人"is equivalent to cnchar.convert.tradToSimple
cnchar.convert.tradToSimple('壹個人');

'壹個人'.convertTradToSpark(); // returns"①个亾"is equivalent to cnchar.convert.tradToSpark
cnchar.convert.tradToSpark('壹個人');

'①个亾'.convertSparkToSimple(); // returns"一个人"is equivalent to cnchar.convert.sparkToSimple
cnchar.convert.sparkToSimple('①个亾');

'①个亾'.convertSparkToTrad(); // returns"壹個人"is equivalent to cnchar.convert.sparkToTrad
cnchar.convert.sparkToTrad('①个亾');
```

###### 6.9.4.2 spell and stroke methods

The library adds pinyin stroke function extension for traditional characters, and other basic usages are consistent with the basic library:

```js
// spell function
'長大'.spell(); // returns'ZhangDa'
'長大'.spell('simple'); // returns'長Da'// disable traditional Chinese pinyin function

// stroke function
'長大'.stroke('array'); // returns [8, 3]
'長大'.stroke('array','simple'); // returns [0, 3] // disable traditional Chinese stroke function
'長大'.stroke('order','shape'); // returns [["㇐","㇑","㇐","㇐","㇐","㇙","㇓","㇏"], ["㇐","㇓","㇏"]]
'長大'.stroke('order','shape','simple'); // returns [undefined, ["㇐","㇓","㇏"]]
```

##### 6.9.5 cnchar-idiom library function

This library extends the idiom function for cnchar

```js
cnchar.idiom(['五', '', '十', '']) // ['五风十雨', '五光十色']
cnchar.idiom([4, 6, 2, 6], 'stroke') // ['五光十色']
cnchar.idiom('shang', 'spell') // ['伤风败化', '伤风败俗', ... ]
cnchar.idiom('shang4', 'spell', 'tone') // ['伤风败化', '伤风败俗', ... ]
```

##### 6.9.6 cnchar-xhy library function

This library extends the function of Xiehouyu for cnchar

```js
cnchar.xhy('大水冲了龙王庙') // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人']
cnchar.xhy('大水', 'fuzzy') // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
cnchar.xhy('大水', 'fuzzy', 'answer') // ['泥沙俱下', '后浪推前浪', ... ]
cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second') // ['醉汉过铁索桥', '扶着醉汉过破桥']
```

##### 6.9.7 cnchar-radical library function

The library extends the radical function for cnchar

```js
cnchar.radical('你'); // "亻",
cnchar.radical('你好呀'); // "亻女口"
cnchar.radical('你好呀', 'array'); // ["亻", "女", "口"]
cnchar.radical(["你", "好", "呀"]); // ["亻", "女", "口"]
```

##### 6.9.8 Tools and methods

cnchar provides some Chinese character tool methods to facilitate developers to operate pinyin and Chinese characters more conveniently and efficiently

###### 6.9.8.1 spellInfo

```js
cnchar.spellInfo('shàng');
// Returns {spell: "shang", tone: 4, index: 3, initial: "sh", final: "ang"}
```

###### 6.9.8.2 isCnChar

```js
cnchar.isCnChar('a') // false
cnchar.isCnChar('1') // false
cnchar.isCnChar('？') // false
cnchar.isCnChar('国') // true
cnchar.isCnChar('國') // true
```

###### 6.9.8.3 transformTone

```js
cnchar.transformTone('lv2') // {spell: 'lü', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lv2', true) // {spell: 'lǘ', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lv2', true, 'up') // {spell: 'LǗ', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lǘ') // {spell: 'lü', tone: 2, index: 2, isTrans: false}
```

###### 6.9.8.4 compareSpell

```js
cnchar.compareSpell('ao', 'ai') // 'more'
cnchar.compareSpell('ai', 'ai') // 'even'
cnchar.compareSpell('pín', 'pǐn', true) // 'less'
cnchar.compareSpell('pin2', 'pǐn', true) // 'less'
cnchar.compareSpell('频', 'pǐn', true) // 'less'
cnchar.compareSpell('品', '频', true) // 'more'
cnchar.compareSpell('贫', '频', true) // 'even'
```

###### 6.9.8.5 compareStroke

```js
cnchar.compareStroke('你', '好') // 'more'
cnchar.compareStroke('你', '苏') // 'even'
cnchar.compareStroke('好', '苏') // 'less'
cnchar.compareStroke('一个', '好') // 'less'
cnchar.compareStroke('你', 14) // 'less'
```

###### 6.9.8.6 sortSpell

Pinyin supports tonal digital mode (lv2=>lǘ)

```js
cnchar.sortSpell(['你', '好', '吗']) // ['好', '吗', '你']
cnchar.sortSpell('你好吗') // '好吗你'
cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone') // ['爱', '拼', '频', '品']
cnchar.sortSpell(['拼', '品', 'pin2', 'ai'], 'tone') // ['ai', '拼', 'pin2', '品']
cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone', 'desc') // ['品', '频', '拼', '爱']
cnchar.sortSpell('拼品频爱', 'tone', 'desc') // '品频拼爱'
```

###### 6.9.8.7 sortStroke

```js
cnchar.sortStroke(['一', '三', '二']) // ['一', '二', '三']
cnchar.sortStroke('一三二') // '一二三'
cnchar.sortStroke(['一', '三', 2]) // ['一', 2, '三']
cnchar.sortStroke(['一', '三', '二'], 'desc') // ['三', '二', '一']
```

###### 6.9.8.8 isPolyWord

```js
cnchar.isPolyWord('中') // true
cnchar.isPolyWord('国') // false
```

###### 6.9.8.9 shapeSpell

```js
cnchar.shapeSpell('lv2') // lǘ
cnchar.shapeSpell('shang4') // shàng
```

###### 6.9.8.10 setSpell

Pinyin supports tonal digital mode (lv2=>lǘ)

```js
// Used to add Chinese characters that are not included in cnchar or modify incorrect Chinese characters in cnchar
cnchar.setSpell('x', 'x');
cnchar.setSpell('x', ['x1', 'x2']); // Multiple pronunciations
cnchar.setSpell({ // Multiple Chinese characters
    'x': 'x',
    'y': ['y1', 'y2']
});
```

###### 6.9.8.11 setSpellDefault

Pinyin supports tonal digital mode (lv2=>lǘ)

```js
// Used to set or modify the default pronunciation of polyphonic characters in cnchar
cnchar.setSpellDefault('长', 'zhǎng');
cnchar.setSpellDefault({ // Multiple Chinese characters
    '长': 'zhǎng',
    '中': 'zhòng'
});
```

###### 6.9.8.12 setStrokeCount

```js
// Used to add Chinese characters that are not included in cnchar or modify incorrect Chinese characters in cnchar
cnchar.setStrokeCount('大', 3);
cnchar.setStrokeCount({ // Multiple Chinese characters
    '大': 3,
    '子': 3
});
```

###### 6.9.8.13 setOrder

Depend on `cnchar-order`

The stroke order added must be a letter, please refer to the corresponding relationship for details [stroke-table](https://github.com/theajack/cnchar/blob/master/src/plugin/order/stroke-table.json)

```js
// Used to add Chinese characters that are not included in cnchar or modify incorrect Chinese characters in cnchar
cnchar.setOrder('大', 'jsl');
cnchar.setOrder({ // Multiple Chinese characters
    '大': 'jsl',
    '子': 'egj'
});
```

###### 6.9.8.14 setPolyPhrase

Pinyin supports tonal digital mode (lv2=>lǘ)

Depend on `cnchar-poly`

```js
// Used to add phrases that are not contained in cnchar or modify incorrect phrases in cnchar
cnchar.setPolyPhrase('测试', 'cè shi4');
cnchar.setPolyPhrase({ // Multiple Chinese characters
    '测试': 'cè shì',
    '体验': 'tǐ yàn'
});
```

###### 6.9.8.14 setRadical

Depend on `cnchar-radical`

```js
// Used to add Chinese characters that are not included in cnchar or modify incorrect Chinese characters in cnchar
cnchar.radical.setRadical('x', 'x');
cnchar.radical.setRadical({ // Multiple Chinese characters
    'x': 'x',
    'y': 'y'
});
```

###### 6.9.8.15 addXhy

Depend on `cnchar-xhy`

```js
cnchar.xhy.addXhy('歇后语第一句', '歇后语第二句');
cnchar.xhy.addXhy([ // Multiple
    ['歇后语第一句', '歇后语第二句'],
    ['歇后语第一句2', '歇后语第二句2'],
]);
```

### 7 Application examples

[Chinese Character Typing Game](https://www.theajack.com/type/)

**Acknowledgements**

The `cnchar-draw` library function is based on [hanzi-writer](https://github.com/chanind/hanzi-writer), thank you very much!