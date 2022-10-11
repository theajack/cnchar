<!-- <p align="center">
    <img src='https://fastly.jsdelivr.net/gh/theajack/cnchar/dist/rm-logo.png' width='200px'/>
</p>  -->

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

<h3>🚀 功能全面、多端支持的汉字拼音笔画 js 库</h3>

**[English](https://github.com/theajack/cnchar/blob/master/README.en.md) | [在线试用/文档](https://theajack.github.io/cnchar) | [更新日志](https://github.com/theajack/cnchar/blob/master/helper/version.md) | [反馈错误/缺漏](https://github.com/theajack/cnchar/issues/new) | [Gitee](https://gitee.com/theajack/cnchar) | QQ Group: 958278438 | [留言板](https://theajack.github.io/message-board/?app=cnchar)**

### 应用例子

开始文档之前，先通过一些应用案例看看 cnchar 能够做些什么

[汉字打字游戏](https://theajack.github.io/type/) | [打字弹钢琴](https://theajack.github.io/piano/) | [成语接龙](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/idiom.js) | [通讯录排序](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/sort.js) | [取名字](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/name.js) | [输入法](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/input.js) | [歇后语](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/xhy.js) | [语音识别与合成](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/voice.js) | [简繁体转换](https://theajack.github.io/jsbox/?github=theajack.cnchar@master.helper/jsbox/trad.js)

### 赞助

开源维护不易。如果该项目对您有帮助且您有余力，可以微信扫码请作者喝一杯可乐或咖啡，非常感谢！

如捐赠，请备注留一下github个人地址，后续会展示在此页中。

<img src='https://shiyix.cn/wx-pay.png' width='200'/>

---

<details>
    <summary>展开目录</summary>

<!-- toc -->

- [应用例子](#应用例子)
- [赞助](#赞助)
- [前言](#前言)
- [0.快速使用](#0快速使用)
- [1.功能](#1功能)
- [2.功能及插件概览](#2功能及插件概览)
- [3.安装](#3安装)
  - [3.1 使用 npm 安装](#31-使用-npm-安装)
  - [3.2 cdn 引入](#32-cdn-引入)
- [4.使用](#4使用)
  - [4.1 webpack浏览器环境(有window对象)](#41-webpack浏览器环境有window对象)
  - [4.2 nodejs 等非浏览器环境](#42-nodejs-等非浏览器环境)
  - [4.3 原生浏览器环境](#43-原生浏览器环境)
- [5.API](#5api)
  - [5.1 拼音笔画基础 API: spell & stroke](#51-拼音笔画基础-api-spell--stroke)
  - [5.2 可视化绘制汉字: draw](#52-可视化绘制汉字-draw)
    - [5.2.1 使用](#521-使用)
    - [5.2.2 参数](#522-参数)
    - [5.2.3 绘制控制api](#523-绘制控制api)
      - [5.2.3.1 startAnimation](#5231-startanimation)
      - [5.2.3.2 pauseAnimation & resumeAnimation](#5232-pauseanimation--resumeanimation)
      - [5.2.3.3 drawNextStroke](#5233-drawnextstroke)
    - [5.2.4 微信小程序中使用](#524-微信小程序中使用)
    - [5.2.5 其他api](#525-其他api)
  - [5.3 繁体、简体、火星文互转: convert](#53-繁体简体火星文互转-convert)
  - [5.4 笔画序列推出原汉字: orderToWord](#54-笔画序列推出原汉字-ordertoword)
  - [5.5 通过拼音查询原汉字: spellToWord](#55-通过拼音查询原汉字-spelltoword)
  - [5.6 通过笔画数查询原汉字: strokeToWord](#56-通过笔画数查询原汉字-stroketoword)
  - [5.7 成语功能](#57-成语功能)
  - [5.8 歇后语功能](#58-歇后语功能)
  - [5.9 偏旁部首功能](#59-偏旁部首功能)
  - [5.10 组词功能](#510-组词功能)
  - [5.11 查询解释功能](#511-查询解释功能)
  - [5.12 发音、语音合成和语音识别](#512-发音语音合成和语音识别)
    - [5.12.1 voice api](#5121-voice-api)
    - [5.12.2 speak api](#5122-speak-api)
    - [5.12.2 regonize api](#5122-regonize-api)
  - [5.13 汉字、拼音工具方法](#513-汉字拼音工具方法)
    - [5.13.1 查询拼音详细信息: spellInfo](#5131-查询拼音详细信息-spellinfo)
    - [5.13.2 拼音音调操作: transformTone](#5132-拼音音调操作-transformtone)
    - [5.13.3 是否是汉字: isCnChar](#5133-是否是汉字-iscnchar)
    - [5.13.4 是否是多音字: isPolyWord](#5134-是否是多音字-ispolyword)
    - [5.13.5 比较拼音（汉字）大小: compareSpell](#5135-比较拼音汉字大小-comparespell)
    - [5.13.6 比较汉字笔画数大小: compareStroke](#5136-比较汉字笔画数大小-comparestroke)
    - [5.13.7 根据拼音排序: sortSpell](#5137-根据拼音排序-sortspell)
    - [5.13.8 根据笔画数排序: sortStroke](#5138-根据笔画数排序-sortstroke)
    - [5.13.9 将数字表示的声调转为拼音声调: shapeSpell](#5139-将数字表示的声调转为拼音声调-shapespell)
    - [5.13.10 判断拼音是否有音调: hasTone](#51310-判断拼音是否有音调-hastone)
  - [5.14 自定义数据](#514-自定义数据)
    - [5.14.1 setSpell](#5141-setspell)
    - [5.14.2 setSpellDefault](#5142-setspelldefault)
    - [5.14.3 setStrokeCount](#5143-setstrokecount)
    - [5.14.4 setPolyPhrase](#5144-setpolyphrase)
    - [5.14.5 setOrder](#5145-setorder)
    - [5.14.6 setRadical](#5146-setradical)
    - [5.14.7 addXhy](#5147-addxhy)
    - [5.14.8 addWords](#5148-addwords)
    - [5.14.9 addExplain](#5149-addexplain)
    - [5.14.10 addVoice](#51410-addvoice)
  - [5.15 其他 api](#515-其他-api)
    - [5.15.1 .use()](#5151-use)
    - [5.15.2 .type](#5152-type)
    - [5.15.3 .check](#5153-check)
    - [5.15.4 .version & env](#5154-version--env)
    - [5.15.5 .plugins](#5155-plugins)
  - [5.16 离线使用](#516-离线使用)
  - [5.17 自定义插件](#517-自定义插件)
    - [5.17.1 pluginName属性](#5171-pluginname属性)
    - [5.17.2 install属性](#5172-install属性)
    - [5.17.3 getCnChar](#5173-getcnchar)
    - [5.17.4 js定义插件](#5174-js定义插件)
    - [5.17.5 ts定义插件](#5175-ts定义插件)
- [6.参数介绍](#6参数介绍)
  - [6.1 spell 参数](#61-spell-参数)
  - [6.2 stroke 参数](#62-stroke-参数)
  - [6.3 orderToWord 参数](#63-ordertoword-参数)
  - [6.4 spellToWord 参数](#64-spelltoword-参数)
  - [6.5 strokeToWord 参数](#65-stroketoword-参数)
  - [6.6 idiom 参数](#66-idiom-参数)
  - [6.7 xhy 参数](#67-xhy-参数)
  - [6.8 radical 参数](#68-radical-参数)
  - [6.9 words 与 explain 参数](#69-words-与-explain-参数)
  - [6.10 使用实例大全：](#610-使用实例大全)
    - [6.10.0 安装使用](#6100-安装使用)
    - [6.10.1 cnchar 基础库功能](#6101-cnchar-基础库功能)
    - [6.10.2 cnchar-poly 库功能](#6102-cnchar-poly-库功能)
    - [6.10.3 cnchar-order 库功能](#6103-cnchar-order-库功能)
    - [6.10.4 cnchar-trad 库功能](#6104-cnchar-trad-库功能)
      - [6.10.4.1 convert 字体转换](#61041-convert-字体转换)
      - [6.10.4.2 spell 和 stroke 方法](#61042-spell-和-stroke-方法)
    - [6.10.5 cnchar-idiom 库功能](#6105-cnchar-idiom-库功能)
    - [6.10.6 cnchar-xhy 库功能](#6106-cnchar-xhy-库功能)
    - [6.10.7 cnchar-radical 库功能](#6107-cnchar-radical-库功能)
    - [6.10.8 cnchar-words](#6108-cnchar-words)
    - [6.10.8 cnchar-explain](#6108-cnchar-explain)
    - [6.10.10 cnchar-voice](#61010-cnchar-voice)
    - [6.10.11 工具方法](#61011-工具方法)
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
      - [6.10.11.15 setRadical](#6101115-setradical)
      - [6.10.11.16 addXhy](#6101116-addxhy)

<!-- tocstop -->

</details>

---

### 前言

感谢同学们对于 cnchar 的支持，由于 cnchar 词库来源于网络，虽然经过了本人的修改和扩充，但是还是难免有错误与缺漏之处，希望大家可以将使用中发现的错误与缺漏之处 [反馈](https://github.com/theajack/cnchar/issues/new) 给我（或自行修改提交，经过审查无误过后会合到 cnchar 中）

[我要反馈错误或缺漏](https://github.com/theajack/cnchar/issues/new)

关于该文档

由于文档较长，做一下简介，请按照需要阅读

- 第零章可以帮助开发者快速接入cnchar
- 第一、二章介绍了cnchar的功能及其功能库
- 第三章介绍了cnchar的安装和使用
- 第四章介绍了各种不同环境下cnchar的使用差异
- 第五章详细介绍了cnchar及其功能库的API使用
- 第六章列举了各个方法的参数和大量的cnchar使用实例

另外，由于插件较多，编写文档工作量巨大，如有遗漏请参考 [cnchar-types](https://github.com/theajack/cnchar/tree/master/src/cnchar-types) 定义。也欢迎大家一起帮忙完善文档

### 0.快速使用

使用 npm 安装：

```
npm i cnchar
```

```js
import cnchar from 'cnchar';
'汉字'.spell();
'汉字'.stroke();
```

使用 script 标签使用：

**如果 jsdelivr 挂了可以使用 unpkg (https://unpkg.com/cnchar/cnchar.min.js)**

```html
<script src="https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
<script>
    '汉字'.spell();
    '汉字'.stroke();
</script>
```

<a href="#610-使用实例大全">更多详细使用示例</a> | <a href="#6-spell-stroke-参数">参数详细介绍</a>

### 1.功能

1. 获取 **汉字拼音** ，支持首字母、大小写、数组分割、备选 **多音字** 等功能
2. 支持 **多音词**、**拼音音调**
3. 获取汉字 **笔画数** 、**笔画顺序** 、笔画详细名称
4. 支持可视化 **绘制汉字笔画** 、多种绘制模式可选
5. 支持 **语音合成** 和 **语音识别**
6. 支持 **汉字组词** 和 **汉字解释**
7. 支持 **简体字** 、 **繁体字** 、 **火星文** 互转
8. 支持 **查找** 某拼音的所有 **汉字** ，繁体字，多音字
9. 支持 **查找** 指定笔画数的所有 **汉字** ，繁体字
10. 支持 **根据笔画顺序查询** 汉字
11. 支持 **查询拼音的信息**，包含声母、韵母、音调、音调位置的等
12. 支持 **繁体字** 拼音、笔画数及以上所有功能，实现和简体字一样的功能
13. 支持 **成语** 查询功能，可以按照汉字、拼音（声调）、笔画数查询成语
14. 支持 **歇后语** 查询功能，支持模糊查询
15. 支持 **偏旁部首** 查询功能
16. 支持 **随机生成** 拼音、汉字、词语、成语、歇后语、中文名字
17. 支持 **汉字编码查询** 、 **汉字信息查询**
18. 支持 **拼音输入法**、**五笔输入法**、支持联想输入
19. 支持 **自定义插件**，独立简单的接入方式，完整使用cnchar所有功能
20. 支持 **自定义** 拼音笔画等数据，使用更灵活
21. 对于部分大词典，支持 **离线使用**、**自定义部署**
22. 提供汉字工具方法，方便开发者更便捷高效地 **操作拼音和汉字**
23. **体积小**，min 版本仅 75 kb，zip 版本 50 kb (含有大量汉字拼音字典)
24. **多端可用**，可用于 **浏览器、nodejs、小程序/小游戏、ReactNative/Weex/Uniapp/Electron、webpack**...，支持所有 js 能运行的环境
25. **typescript**，主库及所有插件库均使用typescript开发
26. 丰富的配置，按功能拆分成插件，按需取用
27. 支持 **IE9**及以上版本

### 2.功能及插件概览

考虑到不同的需求，cnchar 的功能被拆分到以下多个插件库中，方便开发者按需取用：

|     名称     | 描述 |   功能   | 支持版本 | node支持 | 小程序 |
| :----------: | :------------------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
|    cnchar    | 主 js 库，其他三个库依赖于这个库 |    含有简体字拼音、多音字、音调、笔画数等功能   | -- | 是 | 是 |
| cnchar-poly  |    多音词库    |     含有识别多音词功能     | -- | 是 | 是 |
| cnchar-order |   笔画顺序库   |    含有识别笔画顺序、笔画名称、笔画形状等功能       | -- | 是 | 是 |
| cnchar-trad  |    繁体字库    | 支持繁体、火星、简体互转，支持繁体拼音笔画多音字全功能 | -- | 是 | 是 |
| cnchar-draw  |    绘制笔画库    | 支持可视化绘制汉字，该库可脱离cnchar使用，该库仅在浏览器环境下可用 | 2.1+ | 否 | 部分 |
| cnchar-idiom  |    成语库    | 支持成语查询等功能 | 2.2+ | 是 | 是 |
| cnchar-xhy  |    歇后语库    | 支持歇后语查询等功能 | 2.2+ | 是 | 是 |
| cnchar-radical  |    偏旁部首库    | 支持查询汉字偏旁部首 | 2.2.5+ | 是 | 是 |
| cnchar-words  |    汉字组词库    | 支持根据单个或多个汉字查询词组 | 3.1.0+ | 是 | 是 |
| cnchar-explain  |    汉字解释库    | 支持查询汉字含义 | 3.1.0+ | 是 | 是 |
| cnchar-voice  |    语音识别和语音合成    | 支持对中文进行发音与合成 | 3.1.0+ | 否 | 部分 |
| cnchar-data  |    离线词典库    | 用以支持部分插件库的离线使用及自定义部署 | 3.1.0+ | 是 | 是 |
| cnchar-random  |    随机库    | 随机生成拼音、汉字、词语、成语、歇后语 | 3.2.0+ | 是 | 是 |
| cnchar-input  |    输入法支持    | 支持拼音和五笔输入法结果 | 3.2.0+ | 是 | 是 |
| cnchar-code  |    汉字编码库    | 汉字编码查询 | 3.2.0+ | 是 | 是 |
| cnchar-info  |    汉字信息查询    | 用于查询汉字信息 | 3.2.0+ | 是 | 是 |
| cnchar-name  |    中文名信息    | 用于随机生成名字等功能 | 3.2.0+ | 是 | 是 |

以下插件库文档不在本readme中维护，请参考以下地址 或前往 [在线文档](https://theajack.github.io/cnchar/doc/cnchar.html)：

1. [cnchar-random](https://github.com/theajack/cnchar/blob/master/vuepress/doc/random.md)
2. [cnchar-input](https://github.com/theajack/cnchar/blob/master/vuepress/doc/input.md)
3. [cnchar-code](https://github.com/theajack/cnchar/blob/master/vuepress/doc/code.md)
4. [cnchar-info](https://github.com/theajack/cnchar/blob/master/vuepress/doc/info.md)
5. [cnchar-name](https://github.com/theajack/cnchar/blob/master/vuepress/doc/name.md)

### 3.安装

#### 3.1 使用 npm 安装

安装基础库：

```
npm i cnchar
```

安装附加功能库：

```
npm i cnchar-poly cnchar-order cnchar-trad cnchar-draw cnchar-idiom cnchar-xhy cnchar-radical cnchar-words cnchar-explain cnchar-voice cnchar-random cnchar-code cnchar-input cnchar-info cnchar-name
```

当然您也可以按需安装其中的几个，插件库也都可以脱离cnchar独立安装使用，不过部分仓库功能强依赖于cnchar， 如 cnchar-poly cnchar-order cnchar-trad

或者您可以通过安装`cnchar-all`来使用完整功能，这个库引用了上面的所有插件库

```
npm i cnchar-all
```

#### 3.2 cdn 引入

**如果 jsdelivr 挂了可以使用 unpkg (https://unpkg.com/cnchar/cnchar.min.js)**

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

或使用以下cdn，包含了以上所有插件库

```html
<script src="https://fastly.jsdelivr.net/npm/cnchar-all/cnchar.all.min.js"></script>
```

### 4.使用

#### 4.1 webpack浏览器环境(有window对象)

npm 安装好几个库之后：

```js
// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
import cnchar from 'cnchar';
import 'cnchar-poly';
// ... 其他插件请参考第二章 2. 功能及插件概览
// 插件请按需取用

console.log('汉字'.spell()); // prototype 方式调用
console.log(cnchar.spell('汉字')); // cnchar api 调用
```

浏览器环境下会在 `window` 对象上定义 `cnchar` 对象

#### 4.2 nodejs 等非浏览器环境

非浏览器环境下需要使用 `cnchar.use()` 方法加载功能库：

```js
// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
var cnchar = require('cnchar');
var poly = require('cnchar-poly');
// ... 其他插件请参考第二章 2. 功能及插件概览
// 插件请按需取用
// 注：cnchar-draw，cnchar-voice 在非浏览器环境下不可使用
cnchar.use(poly);

console.log('汉字'.spell()); // prototype 方式调用
console.log(cnchar.spell('汉字')); // cnchar api 调用
```

其他使用方式与浏览器环境一致

#### 4.3 原生浏览器环境

原生浏览器环境就需要使用 script 标签引入 js 文件：

```html
<script src="https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
<script src="https://fastly.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js"></script>
<!--... 其他插件请参考第二章 2. 功能及插件概览-->
<script>
    console.log('汉字'.spell()); // prototype 方式调用
    console.log(cnchar.spell('汉字')); // cnchar api 调用
</script>
```

### 5.API

类型声明：[cnchar-types](https://github.com/theajack/cnchar/tree/master/src/cnchar-types)

注：该章节仅介绍API用法，更多使用实例请参考第六章

#### 5.1 拼音笔画基础 API: spell & stroke

为了尽可能使 api 使用简单，该库设计了两个主要的非常简洁的 api，并保证调用方式一致：

```js
// 获取汉字的拼音、多音词、音调等都集成在以下方法上
cnchar.spell(string[,...args]);
// 或
string.spell([...args])

// 获取汉字的笔画、笔画顺序等都集成在以下方法上
cnchar.stroke(string[,...args]);
// 或
string.stroke([...args])
```

该 api 设计一致，`string` 表示要处理的汉字字符串

关键在于可选参数的配置，参数配置将在<a href="#user-content-6-spell-stroke-参数">第六章</a>单独介绍

#### 5.2 可视化绘制汉字: draw

类型声明：[cnchar.draw.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar/plugin/draw/index.d.ts)

`cnchar-draw` 库用于支持在浏览器环境下可视化绘制汉字，所以该库仅在浏览器环境下可用。绘制模式有 normal,animation,stroke,test 四种模式可选。

##### 5.2.1 使用

使用方式如下：

```js
cnchar.draw('你好', options); // options 为可选参数， 在5.2.2 种会详细介绍
```

运行结果如下：

![draw.jpg](https://fastly.jsdelivr.net/gh/theajack/cnchar@gh-pages/assets/readme/draw.jpg)

该库支持脱离cnchar 独立使用

```js
import draw from 'cnchar-draw';
draw('你好')
```

使用cdn引用时，会在window对向上暴露 `CncharDraw` 对象

##### 5.2.2 参数

draw 的参数比较繁多，首先需要理解的是，draw 分为四种绘制模式：

1. normal: 常规绘制
2. animation: 带有绘制动画，支持连续绘制、同时绘制、循环绘制
3. stroke: 按汉字笔顺单步绘制
4. test: 测试模式，用户可以在容器内绘制汉字，cnchar-draw会检测是否绘制正确

以下是 options 的所有可选参数及描述，使用详情请参考[在线文档](https://theajack.github.io/cnchar)：

```ts
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
};

```

##### 5.2.3 绘制控制api

cnchar.draw 方法会返回一个 writer 对象

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

当 `drawType = animation` 时，以下几个api可以用户控制动画

绘制模式分为`连续绘制` 和 `单笔画绘制`，默认为连续绘制模式

单笔划绘制模式需要 `option.animation.autoAnimate = false` 且调用 `drawNextStroke` 方法

###### 5.2.3.1 startAnimation

当 `option.animation.autoAnimate = false` 时，调用该api可以开始绘制，且开启`动连续绘制模式`

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

当处于 `连续绘制模式` 时，调用这两个api可以暂停绘制和恢复绘制

```js
const writer = cnchar.draw('你好', {
    type: cnchar.draw.TYPE.ANIMATION
});

writer.pauseAnimation();
writer.resumeAnimation();
```

###### 5.2.3.3 drawNextStroke

该 api 用于开启 **单笔绘制模式**

首先需要使用参数 `option.animation.autoAnimate = false`

```js
const writer = cnchar.draw('你好', {
    type: cnchar.draw.TYPE.ANIMATION,
    animation: {
        autoAnimate: false,
    }
});

writer.drawNextStroke(()=>{
    // 当前笔画绘制完成的回调
});
```

##### 5.2.4 微信小程序中使用

该库由 HanziWriter 驱动，目前仅支持在web环境下使用，如需微信小程序使用请参考 [hanzi-writer-miniprogram](https://github.com/chanind/hanzi-writer-miniprogram)

##### 5.2.5 其他api

1. 绘制汉字绘制库中不存在的回调

```js
cnchar.draw.onWordNotFound(word=>{
    console.log(word);
});
```

#### 5.3 繁体、简体、火星文互转: convert

当引入 `cnchar-trad` 之后，cnchar 就具备了繁体、简体、火星文互转功能，使用 `cnchar.convert` 对象上的方法，你就可以使用这个功能

自从 v2.0.4 以后，cnchar 保留以下方法可供使用：

```js
cnchar.convert.simpleToTrad(string); // 简体 => 繁体
cnchar.convert.simpleToSpark(string); // 简体 => 火星文
cnchar.convert.tradToSimple(string); // 繁体 => 简体
cnchar.convert.tradToSpark(string); // 繁体 => 火星文
cnchar.convert.sparkToSimple(string); // 火星文 => 简体
cnchar.convert.sparkToTrad(string); // 火星文 => 繁体

string.convertSimpleToTrad();
string.convertSimpleToSpark();
string.convertTradToSimple();
string.convertTradToSpark();
string.convertSparkToSimple();
string.convertSparkToTrad();
```

#### 5.4 笔画序列推出原汉字: orderToWord

当引入 `cnchar-order` 功能库(版本 2.0.2 及以上)之后，cnchar 就支持了根据笔画名称序列推出原汉字的功能，使用方式如下：

```js
cnchar.orderToWord(orderNames[,...args]);
```

`orderNames` 是笔画名称序列

`args` 是参数列表，可选值有 `['match','matchorder','contain','start','array','simple']`, 使用 `cnchar.type.orderToWord` 可以查看可选值。 参数详细使用方法请参见<a href="#63-ordertoword-参数">第六章 orderToWord 参数</a>

`orderNames` 可以是空格分隔的笔画名称字符串或笔画名称数组，可用的笔画名称可以通过以下 api 查看

```js
var dict = cnchar.orderToWord.orders; // dict 是一个包含所有笔画数的详细信息的json数据
```

笔画详细信息的如下，orderNames 只需要传入笔画名称即可，也就是下面 json 数据的 key 值

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
    <summary>展开笔画详情</summary>

| 名称 | 定义 | 形状 |
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

注：其中以下五对笔画没有进行区分，使用的是同样的字母表示：
**卧钩 = 斜钩**、**横折弯 = 横折折**、**横折折折钩 = 横撇弯钩**、**横撇 = 横钩**、**竖折折 = 竖折撇**

以下是一个例子：

```js
cnchar.orderToWord(['横', '撇', '捺']);
// 等价于 
cnchar.orderToWord('横 撇 捺');
// 返回 "丈大"
cnchar.orderToWord(['横', '撇', '捺'], 'array');
// 返回 ["丈","大"]
cnchar.orderToWord(['横', '撇', '捺'], 'start');
// 返回 "丈大太*夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横', '撇', '捺'], 'start', 'simple');
// 返回 "丈大太*夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
```

如果输入的笔画不在 `cnchar.orderToWord.orders` 内，则该方法会打印一个错误提示哪些笔画有误，并返回一个空数组。

#### 5.5 通过拼音查询原汉字: spellToWord

`spellToWord` 方法用于根据拼音查询符合要求的汉字，用法如下：

```js
cnchar.spellToWord(spell[,...args]);
```

例子：

```js
cnchar.spellToWord('shàng'); // 返回 '上尚绱鞝'
cnchar.spellToWord('shàng', 'alltone'); // 返回 '上伤汤尚垧殇晌商绱觞赏墒熵裳傷湯殤鞝觴賞'
cnchar.spellToWord('shang4', 'alltone', 'trad'); // 返回 '傷湯殤鞝觴賞'
cnchar.spellToWord('lv2', 'simple'); // 返回 '驴闾榈'
```

注：

spell 表示拼音，可以使用音调字母或音调数标方式：
例：`shàng 等价于 shang4`

ü 可以使用 v 表示，例：`lü 等价于 lv`

#### 5.6 通过笔画数查询原汉字: strokeToWord

`strokeToWord` 方法用于根据笔画数查询符合要求的汉字，用法如下：

```js
cnchar.strokeToWord(strokeCount[,...args]);
```

例子：

```js
cnchar.strokeToWord(25); // 返回 '鬣馕囔戆攮纛饞躥顱籮蠻廳灣鑲鑰'
cnchar.strokeToWord(25, 'simple'); // 返回 '鬣馕囔戆攮纛'
cnchar.strokeToWord(1, 'array'); // 返回 ['一', '乙']
```

#### 5.7 成语功能

cnchar在2.2.0加入了成语功能，启用该功能需要安装 `cnchar-idiom` 功能库，该库可以独立于cnchar主库运行

使用方式如下：

```ts
cnchar.idiom(text: string | number | Array<string|number>):Array<string>;
```

看一个具体例子

```js
// 根据汉字查询成语，末尾的空格可以省略
cnchar.idiom(['五', '', '十', '']); // ['五风十雨', '五光十色']
// 根据笔画数查询成语，0表示匹配任意笔画，末尾的0可以省略
cnchar.idiom([4, 6, 2, 0]); // ["不当人子", ... ]
// 根据拼音查询成语
cnchar.idiom('shang'); // ["伤风败化", "伤风败俗", ...]
// 带音调
cnchar.idiom('shang4'); // ["上兵伐谋", "上不着天，下不着地", ... ]
```

使用cdn引用时，会在window对向上暴露 `CncharIdiom` 对象

#### 5.8 歇后语功能

cnchar在2.2.0加入了歇后语功能，启用该功能需要安装 `cnchar-xhy` 功能库，该库可以独立于cnchar主库运行

使用方式如下：

```ts
cnchar.xhy(text:string, ...xhyArgs: Array<xhyArg>):Array<string>;
```

看一个具体例子

```js
// 精确查询
cnchar.xhy('大水冲了龙王庙'); // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人'],
// 模糊查询
cnchar.xhy('大水', 'fuzzy'); // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
// 只返回答案结果
cnchar.xhy('大水', 'fuzzy', 'answer');  // ['泥沙俱下', '后浪推前浪', ... ]
// 根据歇后语后一句查询
cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second'); // ['醉汉过铁索桥', '扶着醉汉过破桥']
```

使用cdn引用时，会在window对向上暴露 `CncharXHY` 对象

#### 5.9 偏旁部首功能

cnchar在 2.2.5 加入了偏旁部首功能，启用该功能需要安装 `cnchar-radical` 功能库，该库可以独立于cnchar主库运行

且于 3.2.0 版本进行了升级，支持了查询汉字结构和偏旁笔画数

感谢 `kewell-tsao` 提供的 pr

使用方式如下：

```ts
cnchar.radical(text:string | Array<string>): Array<{
    radical: string;
    struct: TStruct;
    radicalCount: number;
}>
```

使用cdn引用时，会在window对向上暴露 `CncharRadical` 对象

#### 5.10 组词功能

cnchar 在 3.1.0 加入了组词功能，需要安装 `cnchar-words`, 具体使用如下

args 传入 trad 可以查询繁体字，但是依赖于安装了 cnchar-trad

```ts
cnchar.words(words: string, ...args: string[]): string[];
```

看一个具体例子

```js
cnchar.words('你');
cnchar.words.addWords('你们好'); // 添加一个词组
```

具体参数请参考 [words.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/words/index.d.ts)

#### 5.11 查询解释功能

cnchar 在 3.1.0 加入了查询解释功能，需要安装 `cnchar-explain`, 具体使用如下

args 传入 trad 可以查询繁体字，但是依赖于安装了 cnchar-trad

```ts
cnchar.explain(words: string, ...args: string[]): string[];
```

看一个具体例子

```js
cnchar.explain('你好');
cnchar.explain.addExplain('你好', '打招呼'); // 添加解释
cnchar.explain.addExplain({
    '你好': '打招呼'
});
```

具体参数请参考 [explain.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/explain/index.d.ts)

#### 5.12 发音、语音合成和语音识别

cnchar 在 3.1.0 加入了发音、语音合成和语音识别功能, 需要安装 `cnchar-voice`, 

##### 5.12.1 voice api

voice api用于发音单个和多个汉字发音，对于句子发音连续效果不佳，但是兼容性好，支持小程序使用

```ts
cnchar.voice(words: string, options: IVoiceOptions): IVoicePlayer;
```

具体参数请参考 [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

##### 5.12.2 speak api

voice.speak 用于汉字语音合成，是借助于浏览器的 speechSynthesis api，[兼容性不佳](https://caniuse.com/?search=speechSynthesis)但是体验较好

该api需要在用户点击等事件后调用才会生效，且仅在https 或 localhost 中起作用

```ts
cnchar.voice.speak(text: string, options?: ISpeakOptions): SpeechSynthesisUtterance;
```

具体参数请参考 [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

##### 5.12.2 regonize api

voice.regonize 用于汉字语音识别，是借助于浏览器的 SpeechRecognition api，[兼容性不佳](https://caniuse.com/?search=SpeechRecognition)但是体验较好

该api需要在用户点击等事件后调用才会生效，且仅在https 或 localhost 中起作用

```ts
cnchar.voice.regonize(options?: IRecognizeOptions): any;
```

具体参数请参考 [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

#### 5.13 汉字、拼音工具方法

cnchar 将库内部使用的一些操作拼音和汉字的方法整理暴露出来，方便开发者便捷高效的操作拼音和汉字

##### 5.13.1 查询拼音详细信息: spellInfo

`spellInfo` 方法用于查询拼音的详细信息，用法如下：

```js
cnchar.spellInfo(spell);
```

例子：

```js
cnchar.spellInfo('Shàng');
/*
// 返回值与含义如下
{
    spell: 'shang', // 无音调拼音 
    initial: 'sh', // 声母
    final: 'ang', // 韵母
    tone: 4, // 音调
    index: 3 // 音调位置
},
*/
```

除此之外，`spellInfo` 上含有 `initials` 和 `tones` 两个属性，分别表示，所有可用的声母和音调：

```js
cnchar.spellInfo.initials;
// ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w']
cnchar.spellInfo.tones;
// ['ā', 'á', 'ǎ', 'à', 'ō', 'ó', 'ǒ', 'ò', 'ē', 'é', 'ě', 'è', 'ī', 'í', 'ǐ', 'ì', 'ū', 'ú', 'ǔ', 'ù', 'ǖ', 'ǘ', 'ǚ', 'ǜ', '*', 'ń', 'ň', 'ǹ']
// n 的一声使用 * 代替
```

##### 5.13.2 拼音音调操作: transformTone

`transformTone` 方法用于将有音调拼音转换为无音调拼音，且可以获取音调位置和声调

使用方式如下：

```ts
cnchar.transformTone(spell: string, tone?: boolean, type?: 'low' | 'up');
/* 返回值
{
    spell: string; // 转换后的拼音
    tone: toneType; // 声调
    index: number; // 音调位置
    isTrans: boolean; // 是否是经过转换的比如 lv2 -> lǘ
}
*/
```

tone 为可选参数，表示返回值spell是否需要带上声调，默认为 false

type 为可选参数，表示返回值spell设置大小写，默认为 'low'

transformTone spell参数 支持使用 v 代替 ü，支持使用末尾带数字表示声调，比如 `lv 等价于 lü` `shang4 等价于 shàng`

##### 5.13.3 是否是汉字: isCnChar

`isCnChar` 方法用于判断字符串是否全部是汉字

```ts
cnchar.isCnChar(word: string): boolean;
```

##### 5.13.4 是否是多音字: isPolyWord

`isPolyWord` 方法用于判断一个字符是否是汉字

```ts
cnchar.isPolyWord(word: string): boolean;
```

##### 5.13.5 比较拼音（汉字）大小: compareSpell

`compareSpell` 方法用于按照拼音比较拼音或汉字的大小，可用于通讯录姓名拼音排序等场景

该方法支持按照拼音和声调比较，如需排序可以参考 `sortSpell` 方法

```ts
cnchar.compareSpell(spell1: string, spell2: string, tone?: boolean);
```

tone参数表示是否需要按照音调比较，默认为false

该方法返回一个字符串，'more', 'less', 'even' 分别表示 spell1 大于、小于、等于 spell2

例

```js
cnchar.compareSpell('ao', 'ai') // 返回 'more' 因为 o 排在 i 之后
cnchar.compareSpell('奥', 'ai') // 返回 'more'
```

##### 5.13.6 比较汉字笔画数大小: compareStroke

`compareStroke` 方法用于按照笔画数比较汉字大小，可用于按照姓名首个汉字笔画排序等场景，排序可以参考 `sortStroke` 方法

```ts
cnchar.compareStroke(stroke1: string, stroke2: string);
```

该方法支持输入汉字或数字，汉字可以输入多个

该方法返回一个字符串，'more', 'less', 'even' 分别表示 stroke1 大于、小于、等于 stroke2

例子：

```js
cnchar.compareStroke('你', '好') // 返回 'more'
cnchar.compareStroke(20, '好') // 返回 'more'
cnchar.compareStroke('一个', '好') // 返回 'less'
```

##### 5.13.7 根据拼音排序: sortSpell

`sortSpell` 方法用于按照拼音排序汉字或拼音，支持输入数组或字符串，支持按照声调排序、支持倒序

```ts
cnchar.sortSpell(spells:Array<string> | string, ...args?: Array<'tone'|'desc'>): Array<string> | string;
```

spells参数可以是数组或字符串

当为数组时，数组元素可以时汉字或拼音，返回的是数组

当为字符串时，字符串必须全部是汉字，返回的是字符串

该方法可选参数有两个，'tone' 表示按照音调排序，'desc' 表示倒序，默认不区分声调且升序。请看一些例子

```js
cnchar.sortSpell(['你', '好', '吗']) // ['好', '吗', '你']
cnchar.sortSpell('你好吗') // '好吗你'
cnchar.sortSpell('拼品频爱', 'tone', 'desc') // '品频拼爱'
```

##### 5.13.8 根据笔画数排序: sortStroke

`sortStroke` 方法用于按照笔画数排序汉字

```ts
cnchar.sortStroke(strokes:Array<string|number> | string, desc?: 'desc'): Array<string> | string;
```

strokes参数可以是数组或字符串

当为数组时，数组元素可以时汉字或数字，返回的是数组

当为字符串时，字符串必须全部是汉字，返回的是字符串

该方法有一个可选参数，'desc' 表示倒序，默认升序。请看一些例子

```js
cnchar.sortStroke(['一', '三', '二']) // ['一', '二', '三']
cnchar.sortStroke(['一', '三', 2]) // ['一', 2, '三'],
cnchar.sortStroke('一三二', 'desc') // '三二一'
```

##### 5.13.9 将数字表示的声调转为拼音声调: shapeSpell

`shapeSpell` 将数字表示的声调转为拼音声调

如 `lv2` 会被转换成 `lǘ`，`ta1` 会被转换成 `tā`， 方便用户输入

reverse 参数表示开启反向转换 `lǘ` => `lv2`

```ts
cnchar.shapeSpell(spell: string, reverse?: boolean): string;
```

##### 5.13.10 判断拼音是否有音调: hasTone

```ts
cnchar.hasTone(spell: string): boolean;
```

#### 5.14 自定义数据

由于 cnchar 数据来源于网络，虽然经过了大量修改，但是还是难免会有错漏

所以 cnchar 提供了修改默认数据的api，方便开发者修改与添加数据

##### 5.14.1 setSpell

设置拼音数据

```ts
cnchar.setSpell(word: string, spell: string): void;
cnchar.setSpell(json: {[key: string]: string}): void;
```


##### 5.14.2 setSpellDefault

设置多音字的默认读音

```ts
cnchar.setSpellDefault(word: string, spell: string): void;
cnchar.setSpellDefault(json: {[key: string]: string}): void;
```

##### 5.14.3 setStrokeCount

设置汉字笔画数

```ts
cnchar.setStrokeCount(word: string, count: number): void;
cnchar.setStrokeCount(json: {[key: string]: number}): void;
```

##### 5.14.4 setPolyPhrase

设置多音词的读音， 依赖 `cnchar-poly` 库

```ts
cnchar.setPolyPhrase(word: string, spell: string): void;
cnchar.setPolyPhrase(json: {[key: string]: string}): void;
```

##### 5.14.5 setOrder

设置汉字笔顺， 依赖 `cnchar-order` 库

添加的笔顺必须是字母，详情对应关系参见 [stroke-table](https://github.com/theajack/cnchar/blob/master/src/cnchar/plugin/order/stroke-table.json)

```ts
cnchar.setOrder(word: string, order: string): void;
cnchar.setOrder(json: {[key: string]: string}): void;
```

##### 5.14.6 setRadical

设置汉字偏旁部首， 依赖 `cnchar-radical` 库

```ts
cnchar.radical.setRadical(word: string, radical: IRadicalResult): void;
cnchar.radical.setRadical(json: {[key: string]: IRadicalResult}): void;
```

##### 5.14.7 addXhy

添加歇后语， 依赖 `cnchar-xhy` 库

```ts
cnchar.xhy.addXhy(args: Array<Array<string> | string>): void;
cnchar.xhy.addXhy(xhyHead: string, xhyTail: string): void;
```

##### 5.14.8 addWords

添加词组， 依赖 `cnchar-words` 库

```ts
cnchar.words.addWords(words: string | string[]): void;
```

##### 5.14.9 addExplain

添加解释， 依赖 `cnchar-explain` 库

```ts
cnchar.explain.addExplain(json: Json<string>): void;
cnchar.explain.addExplain(words: string, explain: string): void;
```

##### 5.14.10 addVoice

添加发音， 依赖 `cnchar-voice` 库

```ts
cnchar.voice.addVoice(json: Json<string>): void;
cnchar.voice.addVoice(words: string, url: string): void;
```

[其他自定义数据api](https://github.com/theajack/cnchar/blob/master/vuepress/doc/custom.md)

#### 5.15 其他 api

##### 5.15.1 .use()

这个 api 的功能是显式启用 其他插件库

```js
cnchar.use(...libs);
```

这个启用在非浏览器环境（比如 nodejs 等）中是必须的，使用如下：

```js
// 请保证最先引入 cnchar 基础库，其他插件库顺序无所谓
var cnchar = require('cnchar');
var xxx = require('cnchar-xxx');
cnchar.use(xxx);
```

在浏览器环境中则无需调用：

```js
// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
import cnchar from 'cnchar';
import 'cnchar-xxx';
```

##### 5.15.2 .type

type 对象用户获取当前可用的 `spell` 、 `stroke` 、 `orderToWord` 、`spellToWord`、`strokeToWord`、`idiom`、 `xhy`、`radical`, `words`, `explain` 参数类型：

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

spellArg 最多可用值： `['array', 'low', 'up', 'first', 'poly', 'tone', 'simple', 'flat']`

strokeArg 最多可用值：`['letter', 'shape', 'count', 'name', 'detail', 'array', 'order', 'simple']`

orderToWordArg 最多可用值： `['match','matchorder','contain','start','array','simple']`

spellToWordArg 最多可用值： `['simple','trad','poly','alltone','array']`

strokeToWordArg 最多可用值： `['simple','trad','array']`

xhyArg 最多可用值： `['fuzzy','answer','second']`

radicalArg 最多可用值： `['array', 'trad']`

wordsArg 最多可用值： `['trad']`

explainArg 最多可用值： `['trad']`

以上值皆为 json

具体用法<a href="#user-content-6-spell-stroke-参数">第六章</a>讲到

##### 5.15.3 .check

该值是一个 布尔类型，用于控制是否开启参数校验，默认值为 true

参数校验能够对 `spell` 和 `stroke` 传入的参数进行检查，在控制台显示 `无效·`，`忽略`和`冗余`的参数

```js
cnchar.check = false; // 关闭参数校验
```

##### 5.15.4 .version & env

获取当前版本：

```js
var version = cnchar.version;
var env = cnchar.env;
```

##### 5.15.5 .plugins

当前使用的功能库列表

```js
var plugins = cnchar.plugins; // array 类型
```

可以使用 hasPlugin api 来判断是否引入了某插件

```js
cnchar.hasPlugin('draw')
```

#### 5.16 离线使用

cnchar-voice, cnchar-draw, cnchar-explain 由于使用了大量的在线词典和资源

所以没有跟随npm包一起下载到本地，而是使用cdn方式动态加载

cnchar 在 3.1.0 版本新增了 [cnchar-data](https://github.com/cn-char/cnchar-data) 用于帮助用于单独下载数据仓库，以支持离线使用和自定义部署。 

具体使用请参考 [cnchar-data](https://github.com/cn-char/cnchar-data/blob/master/README.md)

另外 voice, draw, explain 三个仓库也支持独立 setResourceBase

具体请参考 [cnchar-types](https://github.com/theajack/cnchar/tree/master/src/cnchar-types)

#### 5.17 自定义插件

cnchar 采用的是独立的插件形式，定义一个 cnchar 插件非常简单且不依赖任何第三方包，并且通过 cnchar 注入，可以访问到任何 cnchar 和其他插件的方法

cnchar 所有现有插件都会携带有 dict属性用来暴露内部的字典，以方便其他插件可以直接使用，具体请参考[插件声明](https://github.com/theajack/cnchar/tree/master/src/cnchar-types/plugin)

##### 5.17.1 pluginName属性

一个 cnchar 插件只有一个必选属性 pluginName

表示插件名称，cnchar.use 插件之后，会注入到 cnchar.plugins 中，且插件对象会被挂载到 cnchar 上

cnchar 所有现有插件都会携带有 dict属性用来暴露内部的字典，以方便其他插件可以直接使用

##### 5.17.2 install属性

install 是一个方法，cnchar.use 插件之后， cnchar对象会调用install方法，并将cnchar对象作为回调带入插件中，**可以通过cnchar对象访问cnchar和其他插件方法**

##### 5.17.3 getCnChar

插件被安装成功之后，会注入一个 getCnChar 到插件上，可以获取到cnchar对象

其他插件属性可以参考 [common.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/main/common.d.ts)

##### 5.17.4 js定义插件

```js
export default {
    pluginName: 'custom',
    install (cnchar) {
        console.log(cnchar);
    },
    version: '0.0.1',
    log: () => console.log('hello cnchar-plugin!');
}
```

##### 5.17.5 ts定义插件

如果使用ts，则可以安装 `cnchar-types` 来添加cnchar声明，当然这不是必须的

推荐使用 cnchar-types, 首先需要安装 `cnchar-types`

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

不使用 cnchar-types

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


### 6.参数介绍

#### 6.1 spell 参数

参数调用如下，所有 arg 参数都是可选的

```js
cnchar.spell(string,arg1,arg2,...);
string.spell(arg1,arg2,...)
```

arg 参数信息如下：

|  参数  |  作用  | 是否默认 |   依赖库    |       备注        |
| :----: | :----------------------: | :------: | :---------: | :-------: |
| array  |         返回数组         |    否    |     --      |      --      |
| first  |      返回拼音首字母      |    否    |     --      |      --      |
|   up   |      将结果全部大写      |    否    |     --      |      --      |
|  low   |      将结果全部小写      |    否    |     --      |  会被 up 参数覆盖  |
|  poly  |      使用候选多音字      |    否    |     --      |      --      |
|  tone  |         启用音调         |    否    |     --      |      --      |
| simple | 是否禁用繁体字的拼音功能 |    否    | cnchar-trad | 使用 cnchar-trad 之后，默认对繁体字拼音进行转换，该参数用于禁用繁体字拼音 |
| flat | 是否扁平化拼音 |    否    | -- | 将拼音返回值扁平化处理，lǘ => lv2 |

#### 6.2 stroke 参数

参数调用如下，所有 arg 参数都是可选的

```js
cnchar.stroke(string,arg1,arg2,...);
string.stroke(arg1,arg2,...);
```

arg 参数信息如下：

|  参数  |         作用 | 是否默认 |    依赖库    |         备注 |
| :----: | :---------------: | :------: | :----------: | :-----------: |
| array  |       返回数组        |    否    |      --      | 使用 cnchar-order 且启用 order 参数后该参数被忽略 |
| order  |     启用笔画顺序      |    否    | cnchar-order |        --        |
| letter | 使用笔画顺序字母序列  |    是    | cnchar-order |  当启用 order 后，该值是默认值  |
| detail | 使用笔画顺序详情作为返回值，每个汉字对应一个 json |    否    | cnchar-order |   优先级小于 letter   |
| shape  | 使用笔画形状作为返回值 |    否    | cnchar-order |   优先级小于 detail   |
|  name  | 使用笔画名称作为返回值 |    否    | cnchar-order |   优先级小于 shape    |
| count  | 使用笔画数作为返回值  |    否    | cnchar-poly  |    优先级小于 name    |
| simple |    是否禁用繁体字的笔画功能 |    否    | cnchar-trad  | 使用 cnchar-trad 之后，默认对繁体字启用笔画功能，该参数用于禁用繁体字笔画功能 |

#### 6.3 orderToWord 参数

参数调用如下，所有 arg 参数都是可选的

```js
cnchar.orderToWord(orders,arg1,arg2,...);
```

arg 参数信息如下：

|    参数     |      作用      | 是否默认 |   依赖库    |   备注    |
| :---------: | :--------: | :------: | :---------: | :---: |
|    match    |        匹配含有笔序中所有笔画的汉字        |    否    |     --      |  --  |
| matchorder | 匹配含有笔序中所有笔画的汉字前先后顺序一致 |    否    |     --      |  --  |
|   contain   |   匹配含有该笔序的汉字   |    否    |     --      |  --  |
|    start    |         匹配所有以该笔序开头的汉字         |    否    |     --      |  --  |
|    array    |   返回符合条件的数组，默认返回的是字符串   |    否    |     --      |  --  |
|   simple    |   禁用繁体字   |    否    | cnchar-trad | 该参数仅在引入了 `cnchar-trad` 后有效 |

关于匹配参数，优先级为 **match > matchorder > contain > start > 默认**

不含有匹配参数时表示使用全匹配，即汉字笔画数与传入的 orders 完全一致

#### 6.4 spellToWord 参数

参数调用如下，所有 arg 参数都是可选的

```js
cnchar.spellToWord(spell,arg1,arg2,...);
```

spell 表示拼音，可以使用音调字母或音调数标方式：
例：`shàng 等价于 shang4`

ü 可以使用 v 表示，例：`lü 等价于 lv`

arg 参数信息如下：

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
| simple  | 仅匹配简体字 |    否    |  --  |  --  |
|  trad   | 仅匹配繁体字 |    否    | cnchar-trad |    该参数仅在引入了 `cnchar-trad` 后有效 |
|  poly   | 仅匹配多音字 |    否    |  --  |  --  |
| alltone |       匹配该拼音所有音调的汉字       |    否    |  --  |  没有音调的拼音表示轻声  |
|  array  | 返回符合条件的数组，默认返回的是字符串 |    否    |  --  |  --  |

注：`simple`与`trad`参数若是都不存在，则当引入`cnchar-trad`时会同时匹配繁简体，没有引入`cnchar-trad`时则只匹配简体


#### 6.5 strokeToWord 参数

参数调用如下，count表示笔画数，所有 arg 参数都是可选的

```js
cnchar.strokeToWord(count,arg1,arg2,...);
```

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
| simple  | 仅匹配简体字 |    否    |  --  |  --  |
|  trad   | 仅匹配繁体字 |    否    | cnchar-trad |    该参数仅在引入了 `cnchar-trad` 后有效 |
|  array  | 返回符合条件的数组，默认返回的是字符串 |    否    |  --  |  --  |

注：`simple`与`trad`参数若是都不存在，则当引入`cnchar-trad`时会同时匹配繁简体，没有引入`cnchar-trad`时则只匹配简体

#### 6.6 idiom 参数

参数调用如下，value表示查询对象，可以试拼音汉字笔画数

```js
cnchar.idiom(value);
```

#### 6.7 xhy 参数

参数调用如下，value表示歇后语查询对象，可以是歇后语的第一句或第二句，所有 arg 参数都是可选的

```js
cnchar.xhy(value,arg1,arg2,...);
```

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
|  fuzzy   | 是否支持模糊查询 |    否    | -- |  是否包含输入的字符串  |
|  answer  | 是否只输出答案 |    否    |  --  |   默认是输出整句歇后语  |
|  second  | 是否是根据歇后语后一句查询 |    否    |  --  |  --  |

#### 6.8 radical 参数

参数调用如下，value表示需要查询偏旁的汉字，可以是字符串或数组

如果引用了 cnchar-trad, 则会自动识别繁体字

```js
cnchar.radical(value);
```

#### 6.9 words 与 explain 参数

```js
cnchar.words(value,arg1,arg2,...);
cnchar.explain(value,arg1,arg2,...);
```

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
|  trad   | 开启繁体字识别 |    否    | cnchar-trad |  开启繁体字识别  |


#### 6.10 使用实例大全：

##### 6.10.0 安装使用

npm 方式

```
npm i cnchar
```

```js
import cnchar from 'cnchar';
// do something
```

script 标签引用 方式

```html
<script src="https://fastly.jsdelivr.net/gh/theajack/cnchar/dist/cnchar.latest.min.js"></script>
<script>
    // do something
</script>
```

##### 6.10.1 cnchar 基础库功能

```js
//spell 功能
'测试'.spell(); // 返回 'CeShi'
'测试'.spell('up'); // 返回 'CESHI'
'测试'.spell('low'); // 返回 'ceshi'
'测试'.spell('first'); // 返回 'CS'
'测试'.spell('first', 'low'); // 返回 'cs'
'测试'.spell('array'); // 返回 ['Ce','Shi']
'测试'.spell('array', 'first', 'low'); // 返回 ['c','s']
'测试'.spell('tone'); // 返回 'CèShì'
'长大了'.spell('poly'); // 返回 '(Zhang|Chang)(Da|Dai)(Le|Liao)'

//stroke 功能
'测'.stroke(); // 返回 9
'测试'.stroke(); // 返回 17
'测试'.stroke('array'); // 返回 [9,8]

//spellToWord 功能
cnchar.spellToWord('shàng'); // 返回 "上尚绱"
cnchar.spellToWord('lv2'); // 返回 "驴闾榈"

//strokeToWord 功能
cnchar.strokeToWord(2); // 返回 "丁七乃乜九了二人亻儿入八冂几凵刀刁力勹"
```

备注：

1. string.spell(...arg)方法等价于 `cnchar.spell(string,...args)`
2. string.stroke(...arg)方法等价于 `cnchar.stroke(string,...args)`
3. spell 方法 非中文字符会返回原字符
4. stroke 方法 非中文字符会笔画数会计为 0
5. stroke 方法 order 模式 非中文字符会返回 undefined

##### 6.10.2 cnchar-poly 库功能

该库用于准确识别多音词，同样支持 6.3.1 中的其他参数功能

```js
'长大了'.spell(); // 返回 'ZhangDaLe'
'长大了'.spell('array'); // 返回 ["Zhang", "Da", "Le"]
'长大了'.spell('poly'); // 返回 '(Zhang|Chang)(Da|Dai)(Le|Liao)'
```

##### 6.10.3 cnchar-order 库功能

该库用于查询汉字笔画顺序、笔画名称等，返回值为 数组

```js
'一个'.stroke('order'); // 返回 ["j","slf"] 需要显式使用 order 参数 默认返回笔画数字母序列
'一个'.stroke('order', 'detail'); //
/* 返回详细笔画信息：
[
    [{
        "shape": "㇐", 
        "type": "平笔", 
        "foldCount": "0", 
        "name": "横"
    }],[{
        "shape": "㇓", 
        "type": "平笔", 
        "foldCount": "0", 
        "name": "撇"
    },{
        "shape": "㇏", 
        "type": "平笔", 
        "foldCount": "0", 
        "name": "捺"
    },{
        "shape": "㇑", 
        "type": "平笔", 
        "foldCount": "0", 
        "name": "竖"
    }]
]*/
'一个'.stroke('order', 'shape'); // 返回 [["㇐"],["㇓","㇏","㇑"]]
'一个'.stroke('order', 'name'); // 返回 [["横"],["撇", "捺", "竖"]]
'一个'.stroke('order', 'count'); // 返回 [1, 3]
```

根据笔画名称序列推出原汉字

```js
var orders = cnchar.orderToWord.orders; //查看支持的笔画名称
cnchar.orderToWord(['横', '撇', '捺']);
// 返回 "丈大"
cnchar.orderToWord(['横', '撇', '捺'], 'array');
// 返回 ["丈","大"]
cnchar.orderToWord(['横', '撇', '捺'], 'start');
// 返回 "丈大太*夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横', '撇', '捺'], 'start', 'simple');
// 返回 "丈大太*夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
cnchar.orderToWord(['横', '撇', '捺'], 'match');
// 返回 "丈大仄兮友天太夫夭尺攵文木犬长丛仗仝叭..." // 省略后面的
cnchar.orderToWord(['横', '撇', '捺'], 'matchorder');
// 返回 "丈大仄友天太夫夭尺攵文木犬仗叭史央夯失..." // 省略后面的
cnchar.orderToWord(['横', '撇', '捺'], 'contain');
// 返回 "丈大天太夫夭尺攵文犬仗叭史央夯失疋矢乔..." // 省略后面的
```

##### 6.10.4 cnchar-trad 库功能

该库用于支持繁体字火星文转换及为拼音笔画数等基本功能提供繁体字支持

###### 6.10.4.1 convert 字体转换

```js
'一个人'.convertSimpleToTrad(); // 返回 "壹個人" 等价于 cnchar.convert.simpleToTrad
cnchar.convert.simpleToTrad('一个人');

'一个人'.convertSimpleToSpark(); // 返回 "①个亾" 等价于 cnchar.convert.simpleToSpark
cnchar.convert.simpleToSpark('一个人');

'壹個人'.convertTradToSimple(); // 返回 "一个人" 等价于 cnchar.convert.tradToSimple
cnchar.convert.tradToSimple('壹個人');

'壹個人'.convertTradToSpark(); // 返回 "①个亾" 等价于 cnchar.convert.tradToSpark
cnchar.convert.tradToSpark('壹個人');

'①个亾'.convertSparkToSimple(); // 返回 "一个人" 等价于 cnchar.convert.sparkToSimple
cnchar.convert.sparkToSimple('①个亾');

'①个亾'.convertSparkToTrad(); // 返回 "壹個人" 等价于 cnchar.convert.sparkToTrad
cnchar.convert.sparkToTrad('①个亾');
```

###### 6.10.4.2 spell 和 stroke 方法

该库增加了对于繁体字的拼音笔画功能扩展，其他基础用法与 基础库一致：

```js
//spell 功能
'長大'.spell(); // 返回 'ZhangDa'
'長大'.spell('simple'); // 返回 '長Da' // 禁用繁体字拼音功能

//stroke 功能
'長大'.stroke('array'); // 返回 [8, 3]
'長大'.stroke('array', 'simple'); // 返回 [0, 3] // 禁用繁体字笔画功能
'長大'.stroke('order', 'shape'); // 返回 [["㇐","㇑","㇐","㇐","㇐","㇙","㇓","㇏"],["㇐","㇓","㇏"]]
'長大'.stroke('order', 'shape', 'simple'); // 返回 [undefined, ["㇐","㇓","㇏"]]
```

##### 6.10.5 cnchar-idiom 库功能

该库为cnchar扩展了成语功能

```js
cnchar.idiom(['五', '', '十', '']) // ['五风十雨', '五光十色']
cnchar.idiom([4, 6, 2, 6]) // ['五光十色']
cnchar.idiom('shang') // ['伤风败化', '伤风败俗', ... ]
cnchar.idiom('shang4') // ['伤风败化', '伤风败俗', ... ]
```

##### 6.10.6 cnchar-xhy 库功能

该库为cnchar扩展了歇后语功能

```js
cnchar.xhy('大水冲了龙王庙') // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人']
cnchar.xhy('大水', 'fuzzy') // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
cnchar.xhy('大水', 'fuzzy', 'answer') // ['泥沙俱下', '后浪推前浪', ... ]
cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second') // ['醉汉过铁索桥', '扶着醉汉过破桥']
```

##### 6.10.7 cnchar-radical 库功能

该库为cnchar扩展了偏旁部首功能

```js
cnchar.radical('你'); // [{radicalCount: 2, radical: '亻', struct: '左右结构'}],
cnchar.radical('你好呀'); // ...
cnchar.radical(["你", "好", "呀"]); // ...
```

##### 6.10.8 cnchar-words

```js
cnchar.words('香蕉');
cnchar.words.addWords('香蕉牛奶');
cnchar.words('香蕉');
```

##### 6.10.8 cnchar-explain

```js
cnchar.explain('你好');
cnchar.explain.addExplain('你好', '打招呼');
cnchar.explain('你好');
```

##### 6.10.10 cnchar-voice

```js
cnchar.voice('你好');
window.addEventListener('click', ()=>{
    cnchar.voice.speak('你好');
    cnchar.voice.regonize();
});
```

##### 6.10.11 工具方法

cnchar提供了一些汉字工具方法，方便开发者更便捷高效地操作拼音和汉字

###### 6.10.11.1 spellInfo

```js
cnchar.spellInfo('shàng');
// 返回 {spell: "shang", tone: 4, index: 3, initial: "sh", final: "ang"}
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

拼音支持声调数字模式（lv2=>lǘ）

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
cnchar.shapeSpell('lǘ', true) // lv2
```

###### 6.10.11.10 setSpell

拼音支持声调数字模式（lv2=>lǘ）

```js
// 用于添加cnchar中不包含的汉字 或修改 cnchar中有误的汉字
cnchar.setSpell('x', 'x');
cnchar.setSpell('x', ['x1', 'x2']); // 多个读音
cnchar.setSpell({ // 多个汉字
    'x': 'x',
    'y': ['y1', 'y2']
});
```

###### 6.10.11.11 setSpellDefault

拼音支持声调数字模式（lv2=>lǘ）

```js
// 用于设置或修改 cnchar 中多音字的默认读音
cnchar.setSpellDefault('长', 'zhǎng');
cnchar.setSpellDefault({ // 多个汉字
    '长': 'zhǎng',
    '中': 'zhòng'
});
```

###### 6.10.11.12 setStrokeCount

```js
// 用于添加cnchar中不包含的汉字 或修改 cnchar中有误的汉字
cnchar.setStrokeCount('大', 3);
cnchar.setStrokeCount({ // 多个
    '大': 3,
    '子': 3
});
```

###### 6.10.11.13 setOrder

依赖 `cnchar-order`

添加的笔顺必须是字母，详情对应关系参见 [stroke-table](https://github.com/theajack/cnchar/blob/master/src/cnchar/plugin/order/stroke-table.json)

```js
// 用于添加cnchar中不包含的汉字 或修改 cnchar中有误的汉字
cnchar.setOrder('大', 'jsl');
cnchar.setOrder({ // 多个
    '大': 'jsl',
    '子': 'egj'
});
```

###### 6.10.11.14 setPolyPhrase

拼音支持声调数字模式（lv2=>lǘ）

依赖 `cnchar-poly`

```js
// 用于添加cnchar中不包含的词组 或修改 cnchar中有误的词组
cnchar.setPolyPhrase('测试', 'cè shi4');
cnchar.setPolyPhrase({ // 多个
    '测试': 'cè shì',
    '体验': 'tǐ yàn'
});
```

###### 6.10.11.15 setRadical

依赖 `cnchar-radical`

```js
// 用于添加cnchar中不包含的汉字 或修改 cnchar中有误的汉字
cnchar.radical.setRadical('x', {radical:'', struct: '', radicalCount: 0});
cnchar.radical.setRadical({ // Multiple Chinese characters
    'x': {radical:'', struct: '', radicalCount: 0},
    'y': {radical:'', struct: '', radicalCount: 0}
});
```

###### 6.10.11.16 addXhy

依赖 `cnchar-xhy`

```js
cnchar.xhy.addXhy('歇后语第一句', '歇后语第二句');
cnchar.xhy.addXhy([ // 多条
    ['歇后语第一句', '歇后语第二句'],
    ['歇后语第一句2', '歇后语第二句2'],
]);
```

[其他自定义数据api](https://github.com/theajack/cnchar/blob/master/vuepress/doc/custom.md)

**致谢**

`cnchar-draw` 库功能基于 [hanzi-writer](https://github.com/chanind/hanzi-writer), 特此表示感谢！

**Contributors**

[![](https://contrib.rocks/image?repo=theajack/cnchar)](https://github.com/theajack/cnchar/graphs/contributors)
