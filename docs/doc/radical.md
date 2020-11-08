## 1. 介绍

cnchar在2.2.5加入了偏旁部首功能，启用该功能需要安装 `cnchar-radical` 功能库，该库可以独立于cnchar主库运行

感谢 `kewell-tsao` 提供的 pr

使用方式如下：

<div>
  <highlight-code lang='typescript'>
cnchar.radical(text:string | Array&lt;string>, ...radicalArgs: Array&lt;radicalArg>): string | Array&lt;string>;
  </highlight-code>
</div>

看一个具体例子

<div>
  <codebox id='radical'></codebox>
</div>

使用cdn引用时，会在window对向上暴露 `CncharRadical` 对象

## 2. radical 参数

参数调用如下，value表示需要查询偏旁的汉字，可以是字符串或数组

<div>
  <highlight-code lang='typescript'>
cnchar.radical(value,arg1,arg2,...);
  </highlight-code>
</div>

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
|  array   | 是否返回数组 |    否    | -- |  当传入为数组时默认返回数组  |

## 3. 实例


该库为cnchar扩展了偏旁部首功能

<div>
  <highlight-code lang='javascript'>
cnchar.radical('你'); // "亻",
cnchar.radical('你好呀'); // "亻女口"
cnchar.radical('你好呀', 'array'); // ["亻", "女", "口"]
cnchar.radical(["你", "好", "呀"]); // ["亻", "女", "口"]
  </highlight-code>
</div>
