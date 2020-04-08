# [cnchar](https://github.com/theajack/cnchar)

#### [theajack](https://www.theajack.com/)

### 🚀 好用小巧、功能全面的汉字拼音笔画 js 库

**<a href="#64-使用实例大全">快速上手</a> | [在线试用](https://www.theajack.com/cnchar/) | [更新日志](https://github.com/theajack/cnchar/blob/master/helper/version.md) | [应用:打字游戏](https://www.theajack.com/type/) | [反馈错误/缺漏](https://github.com/theajack/cnchar/issues/8)**

---

[TOC]

---

### 前言

感谢同学们对于 cnchar 的支持，由于 cnchar 词库来源于网络，虽然经过了本人的修改的扩充，但是还是难免有错误与缺漏之处，希望大家可以将使用中发现的错误与缺漏之处 [反馈](https://github.com/theajack/cnchar/issues/8) 给我（或自行修改提交，经过审查无误过后会合到 cnchar 中）

[我要反馈错误或缺漏](https://github.com/theajack/cnchar/issues/8)

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

```html
<script src="https://www.theajack.com/cnchar/dist/cnchar.latest.min.js"></script>
<!--
或通过版本号引用
<script src="https://www.theajack.com/cnchar/dist/cnchar.{version}.min.js"></script>
-->
<script>
    '汉字'.spell();
    '汉字'.stroke();
</script>
```

<a href="#64-使用实例大全">更多详细使用示例</a> | <a href="#6-spell-stroke-参数">参数详细介绍</a>

### 1.功能

1. 获取 **汉字拼音** ，支持首字母、大小写、数组分割、备选 **多音字** 等功能
2. 支持 **多音词**
3. 支持 **拼音音调**
4. 获取汉字 **笔画数** 、支持数组分割
5. 获取汉字 **笔画顺序** 、笔画详细名称、通过笔画顺序推出原汉字等
6. 支持 **简体字** 、 **繁体字** 、 **火星文** 互转
7. 支持 **查找** 某拼音的所有 **汉字** ，繁体字，多音字
8. 支持 **查找** 指定笔画数的所有 **汉字** ，繁体字
9. 支持 **查询拼音的信息**，包含声母、韵母、音调、音调位置的等
10. 支持 **繁体字** 拼音、笔画数及以上所有功能，实现和简体字一样的功能
11. **体积小**，min 版本仅 46 kb，zip 版本 34 kb (含有大量汉字拼音字典)
12. **多端可用**，可用于 原生浏览器环境、webpack 环境、nodejs 环境...，几乎支持所有 js 能运行的环境
13. 丰富的配置，按需取用

### 2.概览

考虑到不同的需求，cnchar 的功能被拆分到以下四个库中：

|     名称     | 描述 |   功能   |
| :----------: | :------------------------------: | :--------------------: |
|    cnchar    | 主 js 库，其他三个库依赖于这个库 |       含有简体字拼音、多音字、音调、笔画数等功能       |
| cnchar-poly  |    多音词库    |     含有识别多音词功能     |
| cnchar-order |   笔画顺序库   |       含有识别笔画顺序、笔画名称、笔画形状等功能       |
| cnchar-trad  |    繁体字库    | 支持繁体、火星、简体互转，支持繁体拼音笔画多音字全功能 |

### 3 安装

#### 3.1 使用 npm 安装

安装基础库：

```
npm i cnchar
```

安装附加功能库：

```
npm i cnchar-poly cnchar-order cnchar-trad
```

当然您也可以按需安装其中的几个，但是 `cnchar` 这个基础库是必须安装的

或者您可以通过安装`cnchar-all`来使用完整功能，这个库引用了上面的四个库

```
npm i cnchar-all
```

#### 3.2 使用 script 引入

```html
<script src="https://www.theajack.com/cnchar/dist/cnchar.latest.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.poly.latest.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.order.latest.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.trad.latest.min.js"></script>
<!-- 或使用版本号引用 -->
<script src="https://www.theajack.com/cnchar/dist/cnchar.{version}.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.poly.{version}.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.order.{version}.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.trad.{version}.min.js"></script>
```

### 4 使用

#### 4.1 webpack、babel 等浏览器环境

npm 安装好几个库之后：

```js
// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
import cnchar from 'cnchar';
import 'cnchar-poly';
import 'cnchar-order';
import 'cnchar-trad';

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
var order = require('cnchar-order');
var trad = require('cnchar-trad');
cnchar.use(poly, order, trad);

console.log('汉字'.spell()); // prototype 方式调用
console.log(cnchar.spell('汉字')); // cnchar api 调用
```

其他使用方式与浏览器环境一致

#### 4.3 原生浏览器环境

原生浏览器环境就需要使用 script 标签引入 js 文件：

```html
<script src="https://www.theajack.com/cnchar/dist/cnchar.latest.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.poly.latest.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.order.latest.min.js"></script>
<script src="https://www.theajack.com/cnchar/dist/cnchar.trad.latest.min.js"></script>
<script>
    console.log('汉字'.spell()); // prototype 方式调用
    console.log(cnchar.spell('汉字')); // cnchar api 调用
</script>
```

### 5 API

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

#### 5.2 繁体、简体、火星文互转: convert

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

#### 5.3 笔画序列推出原汉字: orderToWord

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
// 返回 "丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横', '撇', '捺'], 'start', 'simple');
// 返回 "丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
```

如果输入的笔画不在 `cnchar.orderToWord.orders` 内，则该方法会打印一个错误提示哪些笔画有误，并返回一个空数组。

#### 5.4 通过拼音查询原汉字: spellToWord

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

#### 5.5 通过笔画数查询原汉字: strokeToWord

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

#### 5.6 查询拼音详细信息: spellInfo

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

#### 5.7 其他 api

##### 5.7.1 .use()

这个 api 的功能是显式启用 `poly`、`order`、`trad` 三个功能库

```js
cnchar.use(...libs);
```

这个启用在非浏览器环境（比如 nodejs 等）中是必须的，使用如下：

```js
// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
var cnchar = require('cnchar');
var poly = require('cnchar-poly');
var order = require('cnchar-order');
var trad = require('cnchar-trad');
cnchar.use(poly, order, trad); // 参数顺序无关，三个参数可以任意选择
```

在浏览器环境中则无需调用：

```js
// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
import cnchar from 'cnchar';
import 'cnchar-poly';
import 'cnchar-order';
import 'cnchar-trad';
```

##### 5.7.2 .type

type 对象用户获取当前可用的 `spell` 、 `stroke` 、 `orderToWord` 、`spellToWord`、`strokeToWord` 参数类型：

```js
var spellArg = cnchar.type.spell;
var strokeArg = cnchar.type.stroke;
var orderToWordArg = cnchar.type.orderToWord;
var spellToWordArg = cnchar.type.spellToWord;
var strokeToWordArg = cnchar.type.strokeToWord;
```

spellArg 最多可用值： `['array', 'low', 'up', 'first', 'poly', 'tone', 'simple']`

strokeArg 最多可用值：`['letter', 'shape', 'count', 'name', 'detail', 'array', 'order', 'simple']`

orderToWordArg 最多可用值： `['match','matchorder','contain','start','array','simple']`

spellToWordArg 最多可用值： `['simple','trad','poly','alltone','array']`

strokeToWordArg 最多可用值： `['simple','trad','array']`

具体用法<a href="#user-content-6-spell-stroke-参数">第六章</a>讲到

##### 5.7.3 .check

该值是一个 布尔类型，用于控制是否开启参数校验，默认值为 true

参数校验能够对 `spell` 和 `stroke` 传入的参数进行检查，在控制台显示 `无效·`，`忽略`和`冗余`的参数

```js
cnchar.check = false; // 关闭参数校验
```

##### 5.7.4 .version

获取当前版本：

```js
var version = cnchar.version; // string 类型
```

##### 5.7.5 .plugins

当前使用的功能库列表，最多的情况为 `["order", "trad", "poly"]`

```js
var plugins = cnchar.plugins; // array 类型
```

### 6 spell stroke 参数

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
| match-order | 匹配含有笔序中所有笔画的汉字前先后顺序一致 |    否    |     --      |  --  |
|   contain   |   匹配含有该笔序的汉字   |    否    |     --      |  --  |
|    start    |         匹配所有以该笔序开头的汉字         |    否    |     --      |  --  |
|    array    |   返回符合条件的数组，默认返回的是字符串   |    否    |     --      |  --  |
|   simple    |   禁用繁体字   |    否    | cnchar-trad | 该参数仅在引入了 `cnchar-trad` 后有效 |

关于匹配参数，优先级为 **match > match-order > contain > start > 默认**

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

参数调用如下，所有 arg 参数都是可选的

```js
cnchar.strokeToWord(spell,arg1,arg2,...);
```

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
| simple  | 仅匹配简体字 |    否    |  --  |  --  |
|  trad   | 仅匹配繁体字 |    否    | cnchar-trad |    该参数仅在引入了 `cnchar-trad` 后有效 |
|  array  | 返回符合条件的数组，默认返回的是字符串 |    否    |  --  |  --  |

注：`simple`与`trad`参数若是都不存在，则当引入`cnchar-trad`时会同时匹配繁简体，没有引入`cnchar-trad`时则只匹配简体

#### 6.6 使用实例大全：

##### 6.6.0 安装使用

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
<script src="https://www.theajack.com/cnchar/dist/cnchar.latest.min.js"></script>
<script>
    // do something
</script>
```

##### 6.6.1 cnchar 基础库功能

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
cnchar.strokeToWord(2); // 返回 "丁七乃乜九了二人亻儿入八冂几凵刀刁力勹

//spellInfo 功能
cnchar.spellInfo('shàng');
// 返回 {spell: "shang", tone: 4, index: 3, initial: "sh", final: "ang"}
```

备注：

1. string.spell(...arg)方法等价于 `cnchar.spell(string,...args)`
2. string.stroke(...arg)方法等价于 `cnchar.stroke(string,...args)`
3. spell 方法 非中文字符会返回原字符
4. stroke 方法 非中文字符会笔画数会计为 0
5. stroke 方法 order 模式 非中文字符会返回 undefined

##### 6.6.2 cnchar-poly 库功能

该库用于准确识别多音词，同样支持 6.3.1 中的其他参数功能

```js
'长大了'.spell(); // 返回 'ZhangDaLe'
'长大了'.spell('array'); // 返回 ["Zhang", "Da", "Le"]
'长大了'.spell('poly'); // 返回 '(Zhang|Chang)(Da|Dai)(Le|Liao)'
```

##### 6.6.3 cnchar-order 库功能

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
// 返回 "丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横', '撇', '捺'], 'start', 'simple');
// 返回 "丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
cnchar.orderToWord(['横', '撇', '捺'], 'match');
// 返回 "丈大仄兮友天太夫夭尺攵文木犬长丛仗仝叭..." // 省略后面的
cnchar.orderToWord(['横', '撇', '捺'], 'matchorder');
// 返回 "丈大仄友天太夫夭尺攵文木犬仗叭史央夯失..." // 省略后面的
cnchar.orderToWord(['横', '撇', '捺'], 'contain');
// 返回 "丈大天太夫夭尺攵文犬仗叭史央夯失疋矢乔..." // 省略后面的
```

##### 6.6.4 cnchar-trad 库功能

该库用于支持繁体字火星文转换及为拼音笔画数等基本功能提供繁体字支持

###### 6.6.4.1 convert 字体转换

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

###### 6.6.4.2 spell 和 stroke 方法

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

### 7 应用例子

[汉字打字游戏](https://www.theajack.com/type/)
