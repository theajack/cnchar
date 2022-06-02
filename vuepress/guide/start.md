
## 1. npm安装

cnchar包含了一个基本库和多个插件库，用于实现不同的功能，您可以按需安装其中的功能库，但是 `cnchar` 这个基础库是必须安装的

（注：draw、idiom、xhy、radical、words、explain、voice可以独立使用）

安装[主库](https://npmjs.com/package/cnchar)：

<div>
  <highlight-code>
npm i cnchar
  </highlight-code>
</div>

按需安装功能库：

<div>
  <highlight-code>
npm i cnchar-poly cnchar-order cnchar-trad cnchar-draw cnchar-idiom cnchar-xhy cnchar-radical cnchar-words cnchar-explain cnchar-voice cnchar-random cnchar-code cnchar-input cnchar-info cnchar-name
  </highlight-code>
</div>

浏览器环境中功能库可以直接使用：

<div>
  <highlight-code lang='javascript'>
    import cnchar from 'cnchar';
    // 以下功能库请按需使用
    import 'cnchar-poly';
    import 'cnchar-order';
    import 'cnchar-trad';
    import 'cnchar-draw';
    import 'cnchar-idiom';
    import 'cnchar-xhy';
    import 'cnchar-radical';
    import 'cnchar-words';
    import 'cnchar-explain';
    import 'cnchar-voice';
    import 'cnchar-random';
    import 'cnchar-input';
    import 'cnchar-code';
    import 'cnchar-info';
    import 'cnchar-name';
  </highlight-code>
</div>

非浏览器环境中功能库需要使用use方法加载，且不支持 `cnchar-draw`、`cnchar-voice` 库：

<div>
  <highlight-code lang='javascript'>

// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
import cnchar from 'cnchar';
import 'cnchar-poly';
// ... 其他插件请参考第二章 2. 功能及插件概览
// 插件请按需取用

console.log('汉字'.spell()); // prototype 方式调用
console.log(cnchar.spell('汉字')); // cnchar api 调用

  </highlight-code>
</div>

commonjs 模块

<div>
  <highlight-code lang='javascript'>

// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
var cnchar = require('cnchar');
var poly = require('cnchar-poly');
// ... 其他插件请参考第二章 2. 功能及插件概览
// 插件请按需取用
// 注：cnchar-draw，cnchar-voice 在非浏览器环境下不可使用
cnchar.use(poly);

console.log('汉字'.spell()); // prototype 方式调用
console.log(cnchar.spell('汉字')); // cnchar api 调用

  </highlight-code>
</div>

## 2. CDN引用

使用 script 标签使用：

<div>
  <highlight-code lang='html'>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js">&lt;/script>
      &lt;!--以下功能库请按需使用-->
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js">&lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-order/cnchar.order.min.js">&lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-trad/cnchar.trad.min.js">&lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-draw/cnchar.draw.min.js">&lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-idiom/cnchar.idiom.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-radical/cnchar.radical.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-xhy/cnchar.xhy.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-words/cnchar.words.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-explain/cnchar.explain.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-voice/cnchar.voice.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-random/cnchar.random.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-input/cnchar.input.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-code/cnchar.code.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-info/cnchar.info.min.js"> &lt;/script>
      &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-name/cnchar.name.min.js"> &lt;/script>
  </highlight-code>
</div>

## 3. cnchar-all

如果您需要使用cnchar及其插件的所有功能，可以通过安装`cnchar-all`来使用完整功能，这个库引用了上面的所有库

<div>
  <highlight-code>
npm i cnchar-all
  </highlight-code>
</div>

commonjs 模块

<div>
  <highlight-code lang='javascript'>
    import cnchar from 'cnchar-all';
  </highlight-code>
</div>

cdn方式

<div>
  <highlight-code lang='html'>
    &lt;script src="https://fastly.jsdelivr.net/npm/cnchar-all/cnchar.all.min.js">&lt;/script>
  </highlight-code>
</div>

## 4. 简单使用

cnchar 具有两个最核心的方法`spell` 和 `stroke`，分别用于获取汉字的拼音和笔画数：

<div>
  <codebox id='easy-use' title='spell/stroke'></codebox>
</div>

这只是一个最简单的使用，这两个方法具有很多参数可选，具体请参阅 [cnchar](/cnchar/doc/cnchar) 部分

<!-- <codebox title='spell' id='spell' desc='拼写测试测试2'></codebox> -->

<!-- <baseComponent-star></baseComponent-star> -->

