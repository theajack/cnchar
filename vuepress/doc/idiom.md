## 1. 介绍

cnchar在2.2.0加入了成语功能，启用该功能需要安装 `cnchar-idiom` 功能库，该库可以独立于cnchar主库运行

使用方式如下：

<div>
  <highlight-code lang='typescript'>
cnchar.idiom(text: string | number | (string|number)[], mode?: 'char' | 'stroke' | 'spell' | 'tone'): string[];
  </highlight-code>
</div>

看一个具体例子

<div>
  <codebox id='idiom' :fold='true'></codebox>
</div>

使用cdn引用时，会在window对向上暴露 `CncharIdiom` 对象

## 2. idiom 参数

参数调用如下，value表示查询对象，可以是拼音、汉字、笔画数

<div>
  <highlight-code lang='typescript'>
cnchar.idiom(value, mode);
  </highlight-code>
</div>

mode为查询模式，为可选参数，默认为汉字模式

idiom有四种模式 汉字模式、笔画模式、拼音模式、拼音音调模式 ('char' | 'stroke' | 'spell' | 'tone')

cnchar 会根据输入自动判断采用什么模式，但是在某些情况下，会无法判断是什么模式，需要手动指定模式

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

需要手动指定查询模式的情况：

<div>
  <highlight-code lang='javascript'>
cnchar.idiom(['', '', '好', ''], 'char'); // 第一个元素是 '', 需要手动指定采用汉字模式查询
  </highlight-code>
</div>




