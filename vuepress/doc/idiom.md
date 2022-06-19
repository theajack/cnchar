
## 1. 介绍

cnchar在2.2.0加入了成语功能，启用该功能需要安装 `cnchar-idiom` 功能库，该库可以独立于cnchar主库运行

使用方式如下：

<div>
  <highlight-code lang='typescript'>
cnchar.idiom(text: string | number | Array<string|number>):Array<string>;
  </highlight-code>
</div>

看一个具体例子

<div>
  <codebox id='idiom' :fold='true'></codebox>
</div>

使用cdn引用时，会在window对向上暴露 `CncharIdiom` 对象

## 2. idiom 参数

参数调用如下，value表示查询对象，可以试拼音汉字笔画数，所有 arg 参数都是可选的

<div>
  <highlight-code lang='typescript'>
cnchar.idiom(value);
  </highlight-code>
</div>

## 3. 实例


该库为cnchar扩展了成语功能

<div>
  <highlight-code lang='javascript'>
cnchar.idiom(['五', '', '十', '']) // ['五风十雨', '五光十色']
cnchar.idiom([4, 6, 2, 6]) // ['五光十色']
cnchar.idiom('shang') // ['伤风败化', '伤风败俗', ... ]
cnchar.idiom('shang4') // ['伤风败化', '伤风败俗', ... ]
  </highlight-code>
</div>


