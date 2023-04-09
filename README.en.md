
<p align="center">
    <img src='https://shiyix.cn/images/cnchar3.png' width='300px'/>
</p> 

<p align="center">
    <a href="https://ko-fi.com/theajack">
        <img src="https://img.shields.io/badge/Donate-Ko Fi-ff5f5f" alt="test">
    </a>    
    <a href="https://paypal.me/tackchen">
        <img src="https://img.shields.io/badge/Donate-PayPal-142c8e" alt="test">
    </a>    
    <a href="https://shiyix.cn/images/wx-pay.png">
        <img src="https://img.shields.io/badge/Donate-Wechat Pay-00c250" alt="test">
    </a>
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

### Foreword

Thank you for your support for cnchar. Since the cnchar lexicon comes from the Internet, although it has been modified and expanded by myself, it is still inevitable that there are errors and gaps. I hope you can [feedback](https://github.com/theajack/cnchar/issues/new) the errors and gaps found in use I (or amend and submit it by myself, and it will be merged into cnchar after reviewing without error)

[I want to report errors or omissions](https://github.com/theajack/cnchar/issues/new)

### Quick use

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

**Detailed API documentation is not maintained in this readme from v3.2.4, go to [Online Documentation](https://theajack.github.io/cnchar/)**

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

**Acknowledgements**

The `cnchar-draw` library function is based on [hanzi-writer](https://github.com/chanind/hanzi-writer), thanks very much!

**Contributors**

[![](https://contrib.rocks/image?repo=theajack/cnchar)](https://github.com/theajack/cnchar/graphs/contributors)
