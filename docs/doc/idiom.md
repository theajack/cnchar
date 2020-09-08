
## 1 介绍

cnchar在2.2.0加入了成语功能，启用该功能需要安装 `cnchar-idiom` 功能库，该库可以独立于cnchar主库运行

使用方式如下：

```ts
cnchar.idiom(text:string, ...idiomArgs: Array<idiomArg>):Array<string>;
```

看一个具体例子

```js
// 根据汉字查询成语，末尾的空格可以省略
cnchar.idiom(['五', '', '十', '']); // ['五风十雨', '五光十色']
// 根据笔画数查询成语，0表示匹配任意笔画，末尾的0可以省略
cnchar.idiom([4, 6, 2, 0], 'stroke'); // ["不当人子", ... ]
// 根据拼音查询成语
cnchar.idiom('shang', 'spell'); // ["伤风败化", "伤风败俗", ...]
// 带音调
cnchar.idiom('shang4', 'spell', 'tone'); // ["上兵伐谋", "上不着天，下不着地", ... ]
```

使用cdn引用时，会在window对向上暴露 `CncharIdiom` 对象

## 2. idiom 参数

参数调用如下，value表示查询对象，可以试拼音汉字笔画数，所有 arg 参数都是可选的

```js
cnchar.idiom(value,arg1,arg2,...);
```

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
|  char  | 根据汉字查询成语 |    是    |  --  |  默认值无需调用  |
|  stroke   | 根据笔画数查询成语 |    否    | -- |  优先级高于char  |
|  spell  | 根据拼音查询成语 |    否    |  --  |   优先级高于stroke  |
|  tone  | 启用拼音音调查询 |    否    |  --  |  仅在spell模式下生效  |

注：优先级 `spell` > `stroke` > `char`

## 3. 实例


该库为cnchar扩展了成语功能

```js
cnchar.idiom(['五', '', '十', '']) // ['五风十雨', '五光十色']
cnchar.idiom([4, 6, 2, 6], 'stroke') // ['五光十色']
cnchar.idiom('shang', 'spell') // ['伤风败化', '伤风败俗', ... ]
cnchar.idiom('shang4', 'spell', 'tone') // ['伤风败化', '伤风败俗', ... ]
```