## 1. 介绍

`cnchar-poly` 库是用于支持多音词的库，该库本身并不提供新的api

引入该库之后，`cnchar.spell()` 方法才会支持多音词，否则对于多音字会返回默认读音

npm安装

<div>
  <highlight-code>
npm i cnchar-poly
  </highlight-code>
</div>

cdn使用

<div>
  <highlight-code lang='html'>
&lt;script src="https://fastly.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js">&lt;/script>
  </highlight-code>
</div>

使用

<div>
  <highlight-code lang='javascript'>
import cnchar from 'cnchar';
import poly from 'cnchar-poly';
cnchar.use(poly); // use 在浏览器环境中非必须
  </highlight-code>
</div>

## 2. 实例

以下演示几个多音词的例子

<div>
  <codebox id='poly'></codebox>
</div>

由于多音词依赖分词与词库，且cnchar是一个静态的js库，所以可能会有诸多不准确的读音

如果遇到不准缺的多音词，欢迎提[issue或pr](https://github.com/theajack/cnchar/issues/new)

