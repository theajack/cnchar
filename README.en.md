
<p align="center">
    <img src='https://shiyix.cn/cnchar3.png' width='300px'/>
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
    <a href="https://fastly.jsdelivr.net/gh/theajack/cnchar/dist/cnchar.latest.min.js"><img src="https://img.shields.io/bundlephobia/minzip/cnchar.svg" alt="Size"></a>
    <a href="https://github.com/theajack/cnchar/search?l=javascript"><img src="https://img.shields.io/github/languages/top/theajack/cnchar.svg" alt="TopLang"></a>
    <a href="https://github.com/theajack/cnchar/issues"><img src="https://img.shields.io/github/issues-closed/theajack/cnchar.svg" alt="issue"></a>
    <a href="https://www.github.com/theajack/cnchar"><img src="https://img.shields.io/librariesio/dependent-repos/npm/cnchar.svg" alt="Dependent"></a>
</p>

<h3>🚀 Full-featured, multi-end support for hanyu pinyin strokes js library</h3>

**[中文](https://github.com/theajack/cnchar) | [Online trial / documentation](https://theajack.github.io/cnchar) | [Update log](https://theajack.github.io/cnchar/guide/version.html) | [Feedback error / missing](https://github.com/theajack/cnchar/issues/new) | [Gitee](https://gitee.com/theajack/cnchar) | QQ Group: 958278438 | [Message Board](https://theajack.github.io/message-board/?app=cnchar)**

### Application example

Before starting the documentation, let's take a look at some use cases to see what cnchar can do

[Chinese character typing game](https://theajack.github.io/type/) | [Typing and playing the piano](https://theajack.github.io/piano/) | [Idiom Solitaire](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/idiom.js) | [Address Book Sort](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/sort.js) | [name](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/name.js) | [input method](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/input.js) | [Xie Houyu](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/xhy.js) | [Speech Recognition and Synthesis](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/voice.js) | [Simplified and Traditional Conversion](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/trad.js)

---

<details>
    <summary>Expand directory</summary>

<!-- toc -->

- [Application example](#application-example)
- [Foreword](#foreword)
- [0. Quick use](#0-quick-use)
- [1. Features](#1-features)
- [2. Overview of functions and plugins](#2-overview-of-functions-and-plugins)
- [3. Installation](#3-installation)
  - [3.1 Install with npm](#31-install-with-npm)
  - [3.2 Introduce using cdn](#32-introduce-using-cdn)
- [4. Use](#4-use)
  - [4.1 webpack browser environment(with window object)](#41-webpack-browser-environmentwith-window-object)
  - [4.2 Nodejs and other non-browser environments](#42-nodejs-and-other-non-browser-environments)
  - [4.3 Native browser environment](#43-native-browser-environment)
- [5. API](#5-api)
  - [5.1 Basic Pinyin Stroke API: spell & stroke](#51-basic-pinyin-stroke-api-spell--stroke)
  - [5.2 Draw Chinese characters visually: draw](#52-draw-chinese-characters-visually-draw)
    - [5.2.1 Use](#521-use)
    - [5.2.2 Parameters](#522-parameters)
    - [5.2.3 Drawing control api](#523-drawing-control-api)
      - [5.2.3.1 startAnimation](#5231-startanimation)
      - [5.2.3.2 pauseAnimation & resumeAnimation](#5232-pauseanimation--resumeanimation)
      - [5.2.3.3 drawNextStroke](#5233-drawnextstroke)
    - [5.2.4 Use in WeChat Mini Program](#524-use-in-wechat-mini-program)
    - [5.2.5 其他api](#525-其他api)
  - [5.3 Traditional, Simplified and Martian conversion: convert](#53-traditional-simplified-and-martian-conversion-convert)
  - [5.4 Stroke sequence launches original Chinese characters: orderToWord](#54-stroke-sequence-launches-original-chinese-characters-ordertoword)
  - [5.5 Query original Chinese characters by pinyin: spellToWord](#55-query-original-chinese-characters-by-pinyin-spelltoword)
  - [5.6 Query original Chinese characters by stroke count: strokeToWord](#56-query-original-chinese-characters-by-stroke-count-stroketoword)
  - [5.7 Idiom Function](#57-idiom-function)
  - [5.8 Xiehouyu function](#58-xiehouyu-function)
  - [5.9 Radical radical function](#59-radical-radical-function)
  - [5.10 Word group function](#510-word-group-function)
    - [5.13.2 Pinyin tone operation: transformTone](#5132-pinyin-tone-operation-transformtone)
    - [5.13.3 Is it Chinese characters: isCnChar](#5133-is-it-chinese-characters-iscnchar)
    - [5.13.4 Is it a polyphonic word: isPolyWord](#5134-is-it-a-polyphonic-word-ispolyword)
    - [5.13.5 Compare Pinyin (Chinese character) size: compareSpell](#5135-compare-pinyin-chinese-character-size-comparespell)
    - [5.13.6 Compare the number of strokes of Chinese characters: compareStroke](#5136-compare-the-number-of-strokes-of-chinese-characters-comparestroke)
    - [5.13.7 Sort by pinyin: sortSpell](#5137-sort-by-pinyin-sortspell)
    - [5.13.8 Sort by number of strokes: sortStroke](#5138-sort-by-number-of-strokes-sortstroke)
    - [5.13.9 Convert digital tones to pinyin tones: shapeSpell](#5139-convert-digital-tones-to-pinyin-tones-shapespell)
    - [5.13.10 Determine if pinyin has tones: hasTone](#51310-determine-if-pinyin-has-tones-hastone)
    - [5.14.2 setSpellDefault](#5142-setspelldefault)
    - [5.14.3 setStrokeCount](#5143-setstrokecount)
    - [5.14.4 setPolyPhrase](#5144-setpolyphrase)
    - [5.14.5 setOrder](#5145-setorder)
    - [5.14.6 setRadical](#5146-setradical)
    - [5.14.7 addXhy](#5147-addxhy)
    - [5.14.8 addWords](#5148-addwords)
    - [5.15.2 .type](#5152-type)
    - [5.15.3 .check](#5153-check)
    - [5.15.4 .version & env](#5154-version--env)
    - [5.15.5 .plugins](#5155-plugins)
  - [5.16 Offline use](#516-offline-use)
  - [5.17 Custom plugins](#517-custom-plugins)
    - [5.17.1 pluginName property](#5171-pluginname-property)
    - [5.17.2 install properties](#5172-install-properties)
    - [5.17.3 getCnChar](#5173-getcnchar)
    - [5.17.4 js definition plugin](#5174-js-definition-plugin)
    - [5.17.5 ts definition plugin](#5175-ts-definition-plugin)
- [6 spell stroke parameters](#6-spell-stroke-parameters)
  - [6.1 spell parameters](#61-spell-parameters)
  - [6.2 stroke parameters](#62-stroke-parameters)
  - [6.3 orderToWord parameters](#63-ordertoword-parameters)
  - [6.4 spellToWord parameters](#64-spelltoword-parameters)
  - [6.5 strokeToWord parameters](#65-stroketoword-parameters)
  - [6.6 idiom parameters](#66-idiom-parameters)
  - [6.7 xhy parameters](#67-xhy-parameters)
  - [6.8 radical parameters](#68-radical-parameters)
  - [6.9 words with explain parameter](#69-words-with-explain-parameter)
  - [6.10 Usage Examples:](#610-usage-examples)
    - [6.10.0 Installation and use](#6100-installation-and-use)
    - [6.10.1 cnchar basic library function](#6101-cnchar-basic-library-function)
    - [6.10.2 cnchar-poly library function](#6102-cnchar-poly-library-function)
    - [6.10.3 cnchar-order library function](#6103-cnchar-order-library-function)
    - [6.10.4 cnchar-trad library function](#6104-cnchar-trad-library-function)
      - [6.10.4.1 convert font conversion](#61041-convert-font-conversion)
      - [6.10.4.2 spell and stroke methods](#61042-spell-and-stroke-methods)
    - [6.10.5 cnchar-idiom library function](#6105-cnchar-idiom-library-function)
    - [6.10.6 cnchar-xhy library function](#6106-cnchar-xhy-library-function)
    - [6.10.7 cnchar-radical library function](#6107-cnchar-radical-library-function)
    - [6.10.8 cnchar-words](#6108-cnchar-words)
    - [6.10.8 cnchar-explain](#6108-cnchar-explain)
    - [6.10.10 cnchar-voice](#61010-cnchar-voice)
    - [6.10.11 Tools and methods](#61011-tools-and-methods)
      - [6.10.11.1 spellInfo](#610111-spellinfo)
      - [6.10.11.2 isCnChar](#610112-iscnchar)
      - [6.10.11.3 transformTone](#610113-transformtone)
      - [6.10.11.4 compareSpell](#610114-comparespell)
      - [6.10.11.5 compareStroke](#610115-comparestroke)
      - [6.10.11.6 sortSpell](#610116-sortspell)
      - [6.10.11.7 sortStroke](#610117-sortstroke)
      - [6.10.11.8 isPolyWord](#610118-ispolyword)
      - [6.10.11.9 shapeSpell](#610119-shapespell)
      - [6.10.11.10 setSpell](#6101110-setspell)
      - [6.10.11.11 setSpellDefault](#6101111-setspelldefault)
      - [6.10.11.12 setStrokeCount](#6101112-setstrokecount)
      - [6.10.11.13 setOrder](#6101113-setorder)
      - [6.10.11.14 setPolyPhrase](#6101114-setpolyphrase)
      - [6.10.11.14 setRadical](#6101114-setradical)
      - [6.10.11.15 addXhy](#6101115-addxhy)

<!-- tocstop -->

</details>

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

In addition, due to the large number of plug-ins, the workload of writing documents is huge. If there are any omissions, please refer to the definition of [cnchar-types](https://github.com/theajack/cnchar/tree/master/src/cnchar-types). You are also welcome to help improve the documentation

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
<script src="https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
<script>
    '汉字'.spell();
    '汉字'.stroke();
</script>
```

<a href="#610-usage-examples"> More detailed usage examples </a> | <a href="#6-spell-stroke-parameters"> Detailed introduction of parameters </a>

### 1. Features
1. Get **Chinese Pinyin**, support initial letter, capitalization, array division, optional **polyphonic word** and other functions
2. Support **polyphonic words**, **pinyin tone**
3. Obtain Chinese characters **stroke number** , **stroke order** , and detailed stroke names
4. Support visualization **drawing Chinese strokes**, a variety of drawing modes are optional
5. Support **speech synthesis** and **speech recognition**
6. Support **Chinese character grouping** and **Chinese character interpretation**
7. Support **Simplified characters** , **Traditional characters** , **Mars script** mutual conversion
8. Support **find** all **Chinese characters** of a certain pinyin, traditional characters, polyphonic characters
9. Support **find** all **Chinese characters** with the specified number of strokes, traditional Chinese characters
10. Support **Search by stroke order** Chinese characters
11. Support **search pinyin information**, including initials, finals, tones, tonal positions, etc.
12. Support **traditional characters** pinyin, number of strokes and all the above functions, to achieve the same functions as simplified characters
13. Support **idiom** query function, you can query idioms according to Chinese characters, pinyin (tone), and the number of strokes
14. Support **Xiehouyu** query function, support fuzzy query
15. Support **Radicals** query function
16. Support **randomly generated** Pinyin, Chinese characters, words, idioms, Xiehouyu, Chinese names
17. Support **Chinese character code query**, **Chinese character information query**
18. Support **Pinyin input method**, **Wubi input method**, support associative input
19. Support **custom plug-in**, independent and simple access method, fully use all functions of cnchar
20. Support **custom** pinyin strokes and other data, more flexible to use
21. For some large dictionaries, support **offline use**, **custom deployment**
22. Provide Chinese character tools to facilitate developers to operate Pinyin and Chinese characters more conveniently and efficiently.
23. **Small size**, min version is only 75 kb, zip version is 50 kb (contains a large number of Chinese pinyin dictionaries)
24. **Multi-terminal available**, can be used for **browser, nodejs, applet/minigame, ReactNative/Weex/Uniapp/Electron, webpack**..., supports all environments where js can run
25. **typescript**, the main library and all plug-in libraries are developed using typescript
26. Rich configuration, divided into plug-ins according to functions, available on demand
27. Support **IE9** and above

### 2. Overview of functions and plugins

Taking into account different needs, the functions of cnchar are split into the following multiple plug-in libraries, which are convenient for developers to use on demand:

| Name | Description | Features | Supported Versions | Node Support | Mini Programs |
| :------------: | :--------------------------------------------: | :--------------------: | :--------------------------------: | :--------------------: | :--------------------------------: |
| cnchar | The main js library, the other three libraries depend on this library | Contains functions such as simplified Chinese pinyin, polyphonic characters, pitch, number of strokes, etc. | -- | Yes | Yes |
| cnchar-poly | Polysyllabic Thesaurus | Contains the function of identifying polysyllabic words | -- | Yes | Yes |
| cnchar-order | Stroke Order Library | Contains functions to identify stroke order, stroke name, stroke shape, etc. | -- | Yes | Yes |
| cnchar-trad | Traditional font library | Support traditional, Mars, Simplified conversion, support traditional Pinyin strokes and polyphonic characters full function | -- | Yes | Yes |
| cnchar-draw | Drawing stroke library | Supports visual drawing of Chinese characters, this library can be used without cnchar, this library is only available in browser environment | 2.1+ | No | Partial |
| cnchar-idiom | Idiom library | Support idiom query and other functions | 2.2+ | Yes | Yes |
| cnchar-xhy | Xie Houyu Library | Support Xie Houyu query and other functions | 2.2+ | Yes | Yes |
| cnchar-radical | Radical Library | Supports querying Chinese radicals | 2.2.5+ | Yes | Yes |
| cnchar-words | Chinese character group thesaurus | Supports querying phrases based on single or multiple Chinese characters | 3.1.0+ | Yes | Yes |
| cnchar-explain | Chinese character interpretation library | Support to query the meaning of Chinese characters | 3.1.0+ | Yes | Yes |
| cnchar-voice | Speech Recognition and Speech Synthesis | Supports Chinese Pronunciation and Synthesis | 3.1.0+ | No | Partial |
| cnchar-data | Offline dictionary library | To support offline use and custom deployment of some plug-in libraries | 3.1.0+ | Yes | Yes || cnchar-random | Random library | Randomly generate pinyin, Chinese characters, words, idioms, Xiehouyu | 3.2.0+ | Yes | Yes |
| cnchar-input | Input Method Support | Support Pinyin and Wubi Input Method Results | 3.2.0+ | Yes | Yes |
| cnchar-code | Chinese character encoding library | Chinese character encoding query | 3.2.0+ | Yes | Yes |
| cnchar-info | Chinese character information query | Used to query Chinese character information | 3.2.0+ | Yes | Yes |
| cnchar-name | Chinese name information | Used to generate names randomly | 3.2.0+ | Yes | Yes |

The following plugin library documentation is not maintained in this readme, please refer to the following address or go to [Online Documentation](https://theajack.github.io/cnchar/doc/cnchar.html):

1. [cnchar-random](https://github.com/theajack/cnchar/blob/master/vuepress/doc/random.md)
2. [cnchar-input](https://github.com/theajack/cnchar/blob/master/vuepress/doc/input.md)
3. [cnchar-code](https://github.com/theajack/cnchar/blob/master/vuepress/doc/code.md)
4. [cnchar-info](https://github.com/theajack/cnchar/blob/master/vuepress/doc/info.md)
5. [cnchar-name](https://github.com/theajack/cnchar/blob/master/vuepress/doc/name.md)

### 3. Installation

#### 3.1 Install with npm

Install the basic library:

```
npm i cnchar
```

Install additional function library:

```
npm i cnchar-poly cnchar-order cnchar-trad cnchar-draw cnchar-idiom cnchar-xhy cnchar-radical cnchar-words cnchar-explain cnchar-voice cnchar-random cnchar-code cnchar-input cnchar-info cnchar-name
```

Of course, you can also install several of them on demand, and the plug-in library can also be installed and used independently from cnchar, but some warehouse functions strongly depend on cnchar, such as cnchar-poly cnchar-order cnchar-trad

Or you can use the full functionality by installing `cnchar-all`, this library references all the above plugin libraries

```
npm i cnchar-all
```

#### 3.2 Introduce using cdn

**If jsdelivr is down, you can use unpkg (https://unpkg.com/cnchar/cnchar.min.js)**

```html
<script src="https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-order/cnchar.order.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-trad/cnchar.trad.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-draw/cnchar.draw.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-idiom/cnchar.idiom.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-xhy/cnchar.xhy.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-radical/cnchar.radical.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-words/cnchar.words.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-explain/cnchar.explain.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-voice/cnchar.voice.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-random/cnchar.random.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-code/cnchar.code.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-input/cnchar.input.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-info/cnchar.info.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-name/cnchar.name.min.js"></script>
```

Or use the following cdn, which contains the above eleven libraries

```html
<script src="https://fastly.jsdelivr.net/npm/cnchar-all/cnchar.all.min.js"></script>
```

### 4. Use

#### 4.1 webpack browser environment(with window object)

After npm installs several libraries:

```js
// Please ensure that the cnchar base library is introduced first, and the order of the other libraries does not matter
import cnchar from 'cnchar';
import 'cnchar-poly';
// ... For other plugins, please refer to Chapter 2 2. Overview of functions and plugins
// Please use the plugin as needed

console.log('汉字'.spell()); // Called by prototype
console.log(cnchar.spell('汉字')); // cnchar api call
```

In the browser environment, a cnchar object will be defined on the window object

#### 4.2 Nodejs and other non-browser environments

In the non-browser environment, you need to use the `cnchar.use()` method to load the function library:

```js
// Please ensure that the cnchar base library is introduced first, and the order of the other libraries does not matter
var cnchar = require('cnchar');
var poly = require('cnchar-poly');
// ... For other plugins, please refer to Chapter 2 2. Overview of functions and plugins
// Please use the plugin as needed
// Note: cnchar-draw, cnchar-voice are not available in non-browser environments
cnchar.use(poly);

console.log('汉字'.spell()); // Called by prototype
console.log(cnchar.spell('汉字')); // cnchar api call
```

Other usage methods are consistent with the browser environment

#### 4.3 Native browser environment

The native browser environment requires the use of script tags to import js files:

```html
<script src="https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js"></script>
<!--... For other plugins, please refer to Chapter 2 2. Overview of functions and plugins-->
<script>
    console.log('汉字'.spell()); // Called by prototype
    console.log(cnchar.spell('汉字')); // cnchar api call
</script>
```

### 5. API

Type declaration: [cnchar-types](https://github.com/theajack/cnchar/tree/master/src/cnchar-types)

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

Type declaration: [cnchar.draw.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar/plugin/draw/index.d.ts)

The `cnchar-draw` library is used to support the visual drawing of Chinese characters in a browser environment, so this library is only available in a browser environment. There are four drawing modes: normal, animation, stroke, and test.

##### 5.2.1 Use

The usage is as follows:

```js
cnchar.draw('你好', options); // options are optional parameters, detailed in 5.2.2
```

The results are as follows:

![draw.jpg](https://fastly.jsdelivr.net/gh/theajack/cnchar@gh-pages/assets/readme/draw.jpg)

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

The following are all optional parameters and descriptions of options, please refer to [online documentation](https://theajack.github.io/cnchar) for usage details:

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

##### 5.2.3 Drawing control api

The cnchar.draw method returns a writer object

```ts
declare interface IWriter {
    option: IDrawOption;
    el: HTMLElement;
    type: TDrawType;
    text: Array<string>;
    writers: Array<HanziWriter>;
    startAnimation(): boolean;
    pauseAnimation(): void;
    resumeAnimation(): void;
    drawNextStroke(onComplete?: ()=>void): boolean;
}
```

When `drawType = animation`, the following APIs can be used by the user to control the animation

The drawing mode is divided into `continuous drawing` and `single-stroke drawing`, the default is continuous drawing mode

Single stroke drawing mode requires `option.animation.autoAnimate = false` and call the `drawNextStroke` method

###### 5.2.3.1 startAnimation

When `option.animation.autoAnimate = false`, call this api to start drawing, and enable `motion continuous drawing mode`

```js
const writer = cnchar.draw('你好', {
    type: cnchar.draw.TYPE.ANIMATION,
    animation: {
        autoAnimate: false,
    }
});

writer.startAnimation();
```

###### 5.2.3.2 pauseAnimation & resumeAnimation

When in `continuous drawing mode`, call these two apis to pause drawing and resume drawing

```js
const writer = cnchar.draw('你好', {
    type: cnchar.draw.TYPE.ANIMATION
});

writer.pauseAnimation();
writer.resumeAnimation();
```

###### 5.2.3.3 drawNextStroke

This api is used to enable **single-stroke drawing mode**

First, you need to use the parameter `option.animation.autoAnimate = false`

```js
const writer = cnchar.draw('你好', {
    type: cnchar.draw.TYPE.ANIMATION,
    animation: {
        autoAnimate: false,
    }
});

writer.drawNextStroke(()=>{
    // Callback when the current stroke is drawn
});
```

##### 5.2.4 Use in WeChat Mini Program

The library is driven by HanziWriter, and currently only supports use in the web environment. If you need to use WeChat Mini Programs, please refer to [hanzi-writer-miniprogram](https://github.com/chanind/hanzi-writer-miniprogram)

##### 5.2.5 其他api

1. 绘制汉字绘制库中不存在的回调

```js
cnchar.draw.onWordNotFound(word=>{
    console.log(word);
});
```

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
    撇: {shape: "丿", letter: "s"}
    撇折: {shape: "𠃋", letter: "n"}
    撇点: {shape: "𡿨", letter: "m"}
    斜钩: {shape: "㇂", letter: "y", sameLetterTo: "卧钩"}
    横: {shape: "一", letter: "j"}
    横折: {shape: "𠃍", letter: "c"}
    横折弯: {shape: "㇍", letter: "v", sameLetterTo: "横折折"}
    横折折: {shape: "㇅", letter: "v", sameLetterTo: "横折弯"}
    横折折折: {shape: "㇎", letter: "q"}
    横折折折钩: {shape: "𠄎", letter: "w", sameLetterTo: "横撇弯钩"}
    横折折撇: {shape: "㇋", letter: "a"}
    横折提: {shape: "㇊", letter: "p"}
    横折钩: {shape: "𠃌", letter: "r"}
    横撇: {shape: "㇇", letter: "e", sameLetterTo: "横钩"}
    横撇弯钩: {shape: "㇌", letter: "w", sameLetterTo: "横折折折钩"}
    横斜钩: {shape: "⺄", letter: "o"}
    横钩: {shape: "乛", letter: "e", sameLetterTo: "横撇"}
    点: {shape: "丶", letter: "k"}
    点2: {shape: "㇀", letter: "d"}
    竖: {shape: "丨", letter: "f"}
    竖弯: {shape: "㇄", letter: "b"}
    竖弯钩: {shape: "乚", letter: "u"}
    竖折折: {shape: "𠃑", letter: "x", sameLetterTo: "竖折撇"}
    竖折折钩: {shape: "㇉", letter: "z"}
    竖折撇: {shape: "ㄣ", letter: "x", sameLetterTo: "竖折折"}
    竖提: {shape: "𠄌", letter: "h"}
    竖钩: {shape: "亅", letter: "g"}
}
```

<details>
    <summary>Stroke Details</summary>

| name | letter | shape |
|---|---|---|
| 横折折撇 | `a` | ㇋ |
| 竖弯 | `b` | ㇄ |
| 横折 | `c` | 𠃍 |
| 点2 | `d` | ㇀ |
| 横斜钩 | `o` | ⺄ |
| 横 | `j` | 一 |
| 捺 | `l` | ㇏ |
| 横折钩 | `r` | 𠃌 |
| 竖 | `f` | 丨 |
| 竖钩 | `g` | 亅 |
| 点 | `k` | 丶 |
| 撇 | `s` | 丿 |
| 撇折 | `n` | 𠃋 |
| 竖折撇/竖折折 | `x` | ㄣ|𠃑 |
| 横折折折钩/横撇弯钩 | `w` | 𠄎|㇌ |
| 竖折折钩 | `z` | ㇉ |
| 提 | `i` | ㇀ |
| 弯钩 | `t` | ㇁ |
| 斜钩/卧钩 | `y` | ㇂|㇃ |
| 横折折/横折弯 | `v` | ㇅|㇍ |
| 横撇/横钩 | `e` | ㇇|乛 |
| 横折提 | `p` | ㇊ |
| 横折折折 | `q` | ㇎ |
| 竖提 | `h` | 𠄌 |
| 撇点 | `m` | 𡿨 |
| 竖弯钩 | `u` | 乚 |

</details>

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
// returns "丈大太*夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横','撇','捺'],'start','simple');
// returns "丈大太*夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
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
cnchar.idiom(text: string | number | Array<string|number>):Array<string>;
```

See a specific example

```js
// According to Chinese characters query idiom, the space at the end can be omitted
cnchar.idiom(['五', '', '十', '']); // ['五风十雨', '五光十色']
// Query the idiom according to the number of strokes, 0 means match any stroke, and 0 at the end can be omitted
cnchar.idiom([4, 6, 2, 0]); // ["不当人子", ... ]
// Query idioms based on pinyin
cnchar.idiom('shang'); // ["伤风败化", "伤风败俗", ...]
// with tone
cnchar.idiom('shang4'); // ["上兵伐谋", "上不着天，下不着地", ... ]
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

And it has been upgraded in version 3.2.0, which supports querying the structure of Chinese characters and the number of radical strokes

Thanks to `kewell-tsao` for the pr

It is used as follows:

```ts
cnchar.radical(text:string | Array<string>): Array<{
    radical: string;
    struct: TStruct;
    radicalCount: number;
}>
```

When using cdn references, the `CncharRadical` object will be exposed upwards in the window

#### 5.10 Word group function

cnchar added word grouping function in 3.1.0, you need to install `cnchar-words`, the specific usage is as follows

args passed in trad can query traditional characters, but it depends on the installation of cnchar-trad

```ts
cnchar.words(words: string, ...args: string[]): string[];
````

see a specific example

````js
cnchar.words('you');
cnchar.words.addWords('Hello'); // Add a phrase
````

For specific parameters, please refer to [words.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/words/index.d.ts)

#### 5.11 Query interpretation function

cnchar added the query explanation function in 3.1.0, you need to install `cnchar-explain`, the specific usage is as follows

args passed in trad can query traditional characters, but it depends on the installation of cnchar-trad

```ts
cnchar.explain(words: string, ...args: string[]): string[];
````

see a specific example

````js
cnchar.explain('Hello');
cnchar.explain.addExplain('Hello', 'Hello'); // Add explanation
cnchar.explain.addExplain({
    'hello': 'hello'
});
````

For specific parameters, please refer to [explain.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/explain/index.d.ts)

#### 5.12 Pronunciation, Speech Synthesis and Speech Recognition

cnchar has added pronunciation, speech synthesis and speech recognition functions in 3.1.0, you need to install `cnchar-voice`,

##### 5.12.1 voice api

The voice api is used to pronounce single and multiple Chinese characters. It is not good for the continuous pronunciation of sentences, but it has good compatibility and supports the use of small programs.

```ts
cnchar.voice(words: string, options: IVoiceOptions): IVoicePlayer;
````

For specific parameters, please refer to [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

##### 5.12.2 speak api

voice.speak is used for Chinese character speech synthesis. It relies on the browser's speechSynthesis api. [Incompatibility](https://caniuse.com/?search=speechSynthesis) But the experience is better

The api needs to be called after the user clicks and other events to take effect, and only works in https or localhost

```ts
cnchar.voice.speak(text: string, options?: ISpeakOptions): SpeechSynthesisUtterance;
````

For specific parameters, please refer to [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

##### 5.12.2 regonize api

voice.regonize is used for Chinese character speech recognition, it is based on the browser's SpeechRecognition api, [poor compatibility](https://caniuse.com/?search=SpeechRecognition) but the experience is better

The api needs to be called after the user clicks and other events to take effect, and only works in https or localhost

```ts
cnchar.voice.regonize(options?: IRecognizeOptions): any;
````

For specific parameters, please refer to [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

#### 5.13 Chinese Characters and Pinyin Tools

cnchar organizes and exposes some methods of operating pinyin and Chinese characters used inside the library, which is convenient for developers to operate pinyin and Chinese characters conveniently and efficiently

##### 5.13.1 Query pinyin details: spellInfo

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

##### 5.13.2 Pinyin tone operation: transformTone

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

##### 5.13.3 Is it Chinese characters: isCnChar

`isCnChar` The method is used to determine whether the string is all Chinese characters

```ts
cnchar.isCnChar(word: string): boolean;
```

##### 5.13.4 Is it a polyphonic word: isPolyWord

The `isPolyWord` method is used to determine whether a character is a Chinese character

```ts
cnchar.isPolyWord(word: string): boolean;
```

##### 5.13.5 Compare Pinyin (Chinese character) size: compareSpell

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

##### 5.13.6 Compare the number of strokes of Chinese characters: compareStroke

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

##### 5.13.7 Sort by pinyin: sortSpell

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

##### 5.13.8 Sort by number of strokes: sortStroke

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

##### 5.13.9 Convert digital tones to pinyin tones: shapeSpell

`shapeSpell` converts tones represented by numbers to pinyin tones

For example, `lv2` will be converted to `lǘ`, and `ta1` will be converted to `tā` for user input

The reverse parameter indicates that the reverse conversion is enabled `lǘ` => `lv2`

```ts
cnchar.shapeSpell(spell: string, reverse?: boolean): string;
```

##### 5.13.10 Determine if pinyin has tones: hasTone

```ts
cnchar.hasTone(spell: string): boolean;
````

#### 5.14 Custom data

Since the cnchar data comes from the Internet, although it has undergone a lot of modifications, it is still inevitable that there will be errors and omissions

So cnchar provides an api to modify the default data to facilitate developers to modify and add data

##### 5.14.1 setSpell

Set Pinyin data

```ts
cnchar.setSpell(word: string, spell: string): void;
cnchar.setSpell(json: {[key: string]: string}): void;
```

##### 5.14.2 setSpellDefault

Set the default pronunciation of polyphones

```ts
cnchar.setSpellDefault(word: string, spell: string): void;
cnchar.setSpellDefault(json: {[key: string]: string}): void;
```

##### 5.14.3 setStrokeCount

Set the number of strokes of Chinese characters

```ts
cnchar.setStrokeCount(word: string, count: number): void;
cnchar.setStrokeCount(json: {[key: string]: number}): void;
```

##### 5.14.4 setPolyPhrase

Set the pronunciation of polysyllabic words, rely on `cnchar-poly` library

```ts
cnchar.setPolyPhrase(word: string, spell: string): void;
cnchar.setPolyPhrase(json: {[key: string]: string}): void;
```

##### 5.14.5 setOrder

Set the stroke order of Chinese characters, rely on the `cnchar-order` library

The stroke order added must be a letter, please refer to the corresponding relationship for details [stroke-table](https://github.com/theajack/cnchar/blob/master/src/cnchar/plugin/order/dict/stroke-table.json)

```ts
cnchar.setOrder(word: string, order: string): void;
cnchar.setOrder(json: {[key: string]: string}): void;
```

##### 5.14.6 setRadical

Set the radicals of Chinese characters, rely on the `cnchar-radical` library

```ts
cnchar.radical.setRadical(word: string, radical: IRadicalResult): void;
cnchar.radical.setRadical(json: {[key: string]: IRadicalResult}): void;
```

##### 5.14.7 addXhy

Add allegorical words, rely on `cnchar-xhy` library

```ts
cnchar.xhy.addXhy(args: Array<Array<string> | string>): void;
cnchar.xhy.addXhy(xhyHead: string, xhyTail: string): void;
```

##### 5.14.8 addWords

Add phrases, depends on the `cnchar-words` library

```ts
cnchar.words.addWords(words: string | string[]): void;
````

##### 5.14.9 addExplain

Add explanation, depends on `cnchar-explain` library

```ts
cnchar.explain.addExplain(json: Json<string>): void;
cnchar.explain.addExplain(words: string, explain: string): void;
````

##### 5.14.10 addVoice

Add pronunciation, depends on `cnchar-voice` library

```ts
cnchar.voice.addVoice(json: Json<string>): void;
cnchar.voice.addVoice(words: string, url: string): void;
````

[Other custom data api](https://github.com/theajack/cnchar/blob/master/vuepress/doc/custom.md)

#### 5.15 Other APIs

##### 5.15.1 .use()

The function of this API is to explicitly enable the three function libraries `poly`,`order`, and `trad`

```js
cnchar.use(...libs);
```

This enablement is necessary in non-browser environments(such as nodejs, etc.), and is used as follows:

```js
// Please ensure that the cnchar base library is introduced first, and the order of other plug-in libraries does not matter
var cnchar = require('cnchar');
var xxx = require('cnchar-xxx');
cnchar.use(xxx);
```

In the browser environment, there is no need to call:

```js
// Please ensure that the cnchar basic library is introduced first, the order of several other libraries does not matter
import cnchar from 'cnchar';
import 'cnchar-xxx';
```

##### 5.15.2 .type

The type object user gets the currently available `spell`,` stroke`, `orderToWord`,` spellToWord`, `strokeToWord`, `idiom`, `xhy`, `radical`, `words`, `explain` parameter types:

```js
var spellArg = cnchar.type.spell;
var strokeArg = cnchar.type.stroke;
var orderToWordArg = cnchar.type.orderToWord;
var spellToWordArg = cnchar.type.spellToWord;
var strokeToWordArg = cnchar.type.strokeToWord;
var xhyArg = cnchar.type.xhy;
var radicalArg = cnchar.type.radical;
var wordsArg = cnchar.type.words;
var explainArg = cnchar.type.explain;
```

spellArg Maximum available values: `['array','low','up','first','poly','tone','simple', 'flat']`

strokeArg Maximum available values: `['letter','shape','count','name','detail','array','order','simple']`

orderToWordArg Maximum available values: `['match','matchorder','contain','start','array','simple']`

spellToWordArg Maximum available values: `['simple','trad','poly','alltone','array']`

strokeToWordArg Maximum available values: `['simple','trad','array']`

xhyArg Maximum available values: `['fuzzy','answer','second']`

radicalArg Maximum available values: `['array', 'trad']`

wordsArg Maximum available values: `['trad']`

explainArg Maximum available values: `['trad']`

The above values are all json

Specific usage <a href="#user-content-6-spell-stroke-parameters"> Chapter 6 </a>

##### 5.15.3 .check

This value is a Boolean type, used to control whether to enable parameter verification, the default value is true

Parameter verification can check the incoming parameters of `spell` and` stroke` and display the parameters of `invalid`,` ignore` and `redundant` on the console

```js
cnchar.check = false; // Turn off parameter check
```

##### 5.15.4 .version & env

Get the current version:

```js
var version = cnchar.version;
var env = cnchar.env;
```

##### 5.15.5 .plugins

List of currently used function libraries

```js
var plugins = cnchar.plugins; // array type
```

You can use the hasPlugin api to determine whether a plugin has been introduced

````js
cnchar.hasPlugin('draw')
````

#### 5.16 Offline use

cnchar-voice, cnchar-draw, cnchar-explain due to the use of a large number of online dictionaries and resources

So instead of downloading it locally with the npm package, it is dynamically loaded using cdn

cnchar has added [cnchar-data](https://github.com/cn-char/cnchar-data) in version 3.1.0 to help download the data warehouse separately to support offline use and custom deployment.

For specific usage, please refer to [cnchar-data](https://github.com/cn-char/cnchar-data/blob/master/README.md)

In addition, the three repositories of voice, draw, and explain also support independent setResourceBase

For details, please refer to [cnchar-types](https://github.com/theajack/cnchar/tree/master/src/cnchar-types)

#### 5.17 Custom plugins

cnchar is in the form of an independent plug-in. Defining a cnchar plug-in is very simple and does not depend on any third-party package, and through cnchar injection, you can access any cnchar and other plug-in methods

All existing cnchar plugins will carry the dict attribute to expose the internal dictionary so that other plugins can use them directly. For details, please refer to [Plugin Declaration](https://github.com/theajack/cnchar/tree/master/src/cnchar-types/plugin)

##### 5.17.1 pluginName property

A cnchar plugin has only one required attribute pluginName

Indicates the plugin name. After cnchar.use plugin, it will be injected into cnchar.plugins, and the plugin object will be mounted on cnchar

##### 5.17.2 install properties

install is a method. After cnchar.use the plugin, the cnchar object will call the install method and bring the cnchar object into the plugin as a callback. **Cnchar and other plugin methods can be accessed through the cnchar object**

##### 5.17.3 getCnChar

After the plug-in is successfully installed, a getCnChar will be injected into the plug-in, and the cnchar object can be obtained

For other plugin properties, please refer to [common.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/main/common.d.ts)

##### 5.17.4 js definition plugin

````js
export default {
    pluginName: 'custom',
    install (cnchar) {
        console.log(cnchar);
    },
    version: '0.0.1',
    log: () => console.log('hello cnchar-plugin!');
}
````

##### 5.17.5 ts definition plugin

If you use ts, you can install `cnchar-types` to add cnchar declarations, of course this is not required

It is recommended to use cnchar-types, first need to install `cnchar-types`

```
npm i cnchar-types
```

```ts
import ICnChar, {IPlugin} from 'cnchar-types';

const plugin: IPlugin = {
    pluginName: 'custom',
    install (cnchar: ICnChar) {
        console.log(cnchar);
    },
    version: '0.0.1',
    log: () => console.log('hello cnchar-plugin!');
};

declare module 'cnchar-types/main/index' {
    interface ICnChar {
        custom: {
            pluginName: 'custom';
            version: string;
            log: () => void;
        };
    }
}

export default plugin;
```

Do not use cnchar-types

```ts
const plugin: {
    pluginName: string;
    install: (cnchar: any) => any;
} = {
    pluginName: 'custom',
    install (cnchar: any) {
        console.log(cnchar);
    },
    version: '0.0.1',
    log: () => console.log('hello cnchar-plugin!');
};
export default plugin;
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
| flat | Whether to flatten Pinyin | No | -- | Flatten the return value of Pinyin, lǘ => lv2 |

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

Note: If both `simple` and `trad` parameters do not exist, then when"cnchar-trad"is introduced, it will match both Simplified and Simplified Chinese; when"cnchar-trad"is not introduced, it will only match Simplified


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

Note: If both `simple` and`trad` parameters do not exist, then when"cnchar-trad"is introduced, it will match both Simplified and Simplified Chinese; when"cnchar-trad"is not introduced, it will only match Simplified

#### 6.6 idiom parameters

The parameters are called as follows, value indicates the query object, you can try Pinyin Chinese character strokes

```js
cnchar.idiom(value);
```

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

The parameter call is as follows, the value indicates the Chinese character that needs to be queried, which can be a string or an array

Traditional Chinese characters are automatically recognized if cnchar-trad is quoted

```js
cnchar.radical(value,arg1,arg2,...);
```

#### 6.9 words with explain parameter

````js
cnchar.words(value,arg1,arg2,...);
cnchar.explain(value,arg1,arg2,...);
````

| Parameter | Function | Is it default | Dependent library | Remarks |
| :-----: | :----: | :------: | :---: | :---: |
| trad | Enable Traditional Chinese Character Recognition | No | cnchar-trad | Enable Traditional Chinese Character Recognition |

#### 6.10 Usage Examples:

##### 6.10.0 Installation and use

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
<script src="https://fastly.jsdelivr.net/gh/theajack/cnchar/dist/cnchar.latest.min.js"></script>
<script>
    // do something
</script>
```

##### 6.10.1 cnchar basic library function

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

##### 6.10.2 cnchar-poly library function

This library is used to accurately identify polyphonic words and also supports other parameter functions in 6.3.1

```js
'长大了'.spell(); // returns'ZhangDaLe'
'长大了'.spell('array'); // returns ["Zhang","Da","Le"]
'长大了'.spell('poly'); // returns'(Zhang|Chang)(Da|Dai)(Le|Liao)'
```

##### 6.10.3 cnchar-order library function

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
// Back to"丈大太*夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横','撇','捺'],'start','simple');
// back to"丈大太*夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
cnchar.orderToWord(['横','撇','捺'],'match');
// Back to"丈大仄兮友天太夫夭尺攵文木犬长丛仗仝叭..."// Omit the following
cnchar.orderToWord(['横','撇','捺'],'matchorder');
// Back to"丈大仄友天太夫夭尺攵文木犬仗叭史央夯失..."// Omit the following
cnchar.orderToWord(['横','撇','捺'],'contain');
// Back to"丈大天太夫夭尺攵文犬仗叭史央夯失疋矢乔..."// Omit the following
```

##### 6.10.4 cnchar-trad library function

This library is used to support the conversion of traditional Chinese characters to Mars and provide traditional Chinese characters for basic functions such as pinyin

###### 6.10.4.1 convert font conversion

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

###### 6.10.4.2 spell and stroke methods

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

##### 6.10.5 cnchar-idiom library function

This library extends the idiom function for cnchar

```js
cnchar.idiom(['五', '', '十', '']) // ['五风十雨', '五光十色']
cnchar.idiom([4, 6, 2, 6]) // ['五光十色']
cnchar.idiom('shang') // ['伤风败化', '伤风败俗', ... ]
cnchar.idiom('shang4') // ['伤风败化', '伤风败俗', ... ]
```

##### 6.10.6 cnchar-xhy library function

This library extends the function of Xiehouyu for cnchar

```js
cnchar.xhy('大水冲了龙王庙') // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人']
cnchar.xhy('大水', 'fuzzy') // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
cnchar.xhy('大水', 'fuzzy', 'answer') // ['泥沙俱下', '后浪推前浪', ... ]
cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second') // ['醉汉过铁索桥', '扶着醉汉过破桥']
```

##### 6.10.7 cnchar-radical library function

The library extends the radical function for cnchar

```js
cnchar.radical('你'); // [{radicalCount: 2, radical: '亻', struct: '左右结构'}],
cnchar.radical('你好呀'); // ...
cnchar.radical(["你", "好", "呀"]); // ...
```

##### 6.10.8 cnchar-words

````js
cnchar.words('香蕉');
cnchar.words.addWords('香蕉牛奶');
cnchar.words('香蕉');
````

##### 6.10.8 cnchar-explain

````js
cnchar.explain('你好');
cnchar.explain.addExplain('你好', '打招呼');
cnchar.explain('你好');
````

##### 6.10.10 cnchar-voice

````js
cnchar.voice('你好');
window.addEventListener('click', ()=>{
    cnchar.voice.speak('你好');
    cnchar.voice.regonize();
});
````

##### 6.10.11 Tools and methods

cnchar provides some Chinese character tool methods to facilitate developers to operate pinyin and Chinese characters more conveniently and efficiently

###### 6.10.11.1 spellInfo

```js
cnchar.spellInfo('shàng');
// Returns {spell: "shang", tone: 4, index: 3, initial: "sh", final: "ang"}
```

###### 6.10.11.2 isCnChar

```js
cnchar.isCnChar('a') // false
cnchar.isCnChar('1') // false
cnchar.isCnChar('？') // false
cnchar.isCnChar('国') // true
cnchar.isCnChar('國') // true
```

###### 6.10.11.3 transformTone

```js
cnchar.transformTone('lv2') // {spell: 'lü', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lv2', true) // {spell: 'lǘ', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lv2', true, 'up') // {spell: 'LǗ', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lǘ') // {spell: 'lü', tone: 2, index: 2, isTrans: false}
```

###### 6.10.11.4 compareSpell

```js
cnchar.compareSpell('ao', 'ai') // 'more'
cnchar.compareSpell('ai', 'ai') // 'even'
cnchar.compareSpell('pín', 'pǐn', true) // 'less'
cnchar.compareSpell('pin2', 'pǐn', true) // 'less'
cnchar.compareSpell('频', 'pǐn', true) // 'less'
cnchar.compareSpell('品', '频', true) // 'more'
cnchar.compareSpell('贫', '频', true) // 'even'
```

###### 6.10.11.5 compareStroke

```js
cnchar.compareStroke('你', '好') // 'more'
cnchar.compareStroke('你', '苏') // 'even'
cnchar.compareStroke('好', '苏') // 'less'
cnchar.compareStroke('一个', '好') // 'less'
cnchar.compareStroke('你', 14) // 'less'
```

###### 6.10.11.6 sortSpell

Pinyin supports tonal digital mode (lv2=>lǘ)

```js
cnchar.sortSpell(['你', '好', '吗']) // ['好', '吗', '你']
cnchar.sortSpell('你好吗') // '好吗你'
cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone') // ['爱', '拼', '频', '品']
cnchar.sortSpell(['拼', '品', 'pin2', 'ai'], 'tone') // ['ai', '拼', 'pin2', '品']
cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone', 'desc') // ['品', '频', '拼', '爱']
cnchar.sortSpell('拼品频爱', 'tone', 'desc') // '品频拼爱'
```

###### 6.10.11.7 sortStroke

```js
cnchar.sortStroke(['一', '三', '二']) // ['一', '二', '三']
cnchar.sortStroke('一三二') // '一二三'
cnchar.sortStroke(['一', '三', 2]) // ['一', 2, '三']
cnchar.sortStroke(['一', '三', '二'], 'desc') // ['三', '二', '一']
```

###### 6.10.11.8 isPolyWord

```js
cnchar.isPolyWord('中') // true
cnchar.isPolyWord('国') // false
```

###### 6.10.11.9 shapeSpell

```js
cnchar.shapeSpell('lv2') // lǘ
cnchar.shapeSpell('shang4') // shàng
cnchar.shapeSpell('lǘ', true) // 
```

###### 6.10.11.10 setSpell

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

###### 6.10.11.11 setSpellDefault

Pinyin supports tonal digital mode (lv2=>lǘ)

```js
// Used to set or modify the default pronunciation of polyphonic characters in cnchar
cnchar.setSpellDefault('长', 'zhǎng');
cnchar.setSpellDefault({ // Multiple Chinese characters
    '长': 'zhǎng',
    '中': 'zhòng'
});
```

###### 6.10.11.12 setStrokeCount

```js
// Used to add Chinese characters that are not included in cnchar or modify incorrect Chinese characters in cnchar
cnchar.setStrokeCount('大', 3);
cnchar.setStrokeCount({ // Multiple Chinese characters
    '大': 3,
    '子': 3
});
```

###### 6.10.11.13 setOrder

Depend on `cnchar-order`

The stroke order added must be a letter, please refer to the corresponding relationship for details [stroke-table](https://github.com/theajack/cnchar/blob/master/src/cnchar/plugin/order/stroke-table.json)

```js
// Used to add Chinese characters that are not included in cnchar or modify incorrect Chinese characters in cnchar
cnchar.setOrder('大', 'jsl');
cnchar.setOrder({ // Multiple Chinese characters
    '大': 'jsl',
    '子': 'egj'
});
```

###### 6.10.11.14 setPolyPhrase

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

###### 6.10.11.14 setRadical

Depend on `cnchar-radical`

```js
// Used to add Chinese characters that are not included in cnchar or modify incorrect Chinese characters in cnchar
cnchar.radical.setRadical('x', {radical:'', struct: '', radicalCount: 0});
cnchar.radical.setRadical({ // Multiple Chinese characters
    'x': {radical:'', struct: '', radicalCount: 0},
    'y': {radical:'', struct: '', radicalCount: 0}
});
```

###### 6.10.11.15 addXhy

Depend on `cnchar-xhy`

```js
cnchar.xhy.addXhy('歇后语第一句', '歇后语第二句');
cnchar.xhy.addXhy([ // Multiple
    ['歇后语第一句', '歇后语第二句'],
    ['歇后语第一句2', '歇后语第二句2'],
]);
```

[Other custom data api](https://github.com/theajack/cnchar/blob/master/vuepress/doc/custom.md)

**Acknowledgements**

The `cnchar-draw` library function is based on [hanzi-writer](https://github.com/chanind/hanzi-writer), thanks very much!

**Contributors**

[![](https://contrib.rocks/image?repo=theajack/cnchar)](https://github.com/theajack/cnchar/graphs/contributors)