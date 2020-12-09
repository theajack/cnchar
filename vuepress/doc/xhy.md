
## 1. 介绍

cnchar在2.2.0加入了歇后语功能，启用该功能需要安装 `cnchar-xhy` 功能库，该库可以独立于cnchar主库运行

使用方式如下：

<div>
  <highlight-code lang='typescript'>
cnchar.xhy(text:string, ...xhyArgs: Array&lt;xhyArg>):Array&lt;string>;
  </highlight-code>
</div>

看一个具体例子

<div>
  <codebox id='xhy' :fold='true'></codebox>
</div>

使用cdn引用时，会在window对向上暴露 `CncharXHY` 对象

## 2. xhy 参数

参数调用如下，value表示歇后语查询对象，可以是歇后语的第一句或第二句，所有 arg 参数都是可选的

<div>
  <highlight-code lang='typescript'>
cnchar.xhy(value,arg1,arg2,...);
  </highlight-code>
</div>

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
|  fuzzy   | 是否支持模糊查询 |    否    | -- |  是否包含输入的字符串  |
|  answer  | 是否只输出答案 |    否    |  --  |   默认是输出整句歇后语  |
|  second  | 是否是根据歇后语后一句查询 |    否    |  --  |  --  |

## 3. 实例


该库为cnchar扩展了歇后语功能

<div>
  <highlight-code lang='javascript'>
cnchar.xhy('大水冲了龙王庙') // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人']
cnchar.xhy('大水', 'fuzzy') // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
cnchar.xhy('大水', 'fuzzy', 'answer') // ['泥沙俱下', '后浪推前浪', ... ]
cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second') // ['醉汉过铁索桥', '扶着醉汉过破桥']
  </highlight-code>
</div>
