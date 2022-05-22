## 1. 介绍

`cnchar-trad` 库是用于繁体字，除此之外，该库还提供繁体、简体、火星文之间的相互转换

引入该库之后，cnchar的所有api都支持 `simple`和`trad`参数，用于只使用简体或繁体，默认两种字体都使用

npm安装

<div>
  <highlight-code>
npm i cnchar-trad
  </highlight-code>
</div>

cdn使用

<div>
  <highlight-code lang='html'>
&lt;script src="https://fastly.jsdelivr.net/npm/cnchar-trad/cnchar.trad.min.js">&lt;/script>
  </highlight-code>
</div>

使用

<div>
  <highlight-code lang='javascript'>
import cnchar from 'cnchar';
import trad from 'cnchar-trad';
cnchar.use(trad); // use 在浏览器环境中非必须
  </highlight-code>
</div>

## 2. 繁体字支持

以下演示几个繁体字支持的例子

<div>
  <codebox id='trad'></codebox>
</div>

## 3. 字体转换(convert)

引入 cnchar-trad 库之后，在cnchar上会生成一个 `convert` 对象，功能是支持字体转换，另外在string.prototype 上也会附加上对应的方法，用法如下：

<div>
  <highlight-code lang='javascript'>
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
  </highlight-code>
</div>

以下是几个实例：

<div>
  <codebox id='convert'></codebox>
</div>
