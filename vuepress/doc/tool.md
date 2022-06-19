## 1. 介绍

cnchar 将库内部使用的一些操作拼音和汉字的方法整理暴露出来，方便开发者便捷高效的操作拼音和汉字

## 2 查询拼音详细信息: spellInfo

### 2.1 api使用

`spellInfo` 方法用于查询拼音的详细信息，用法如下：

<div>
  <highlight-code lang='javascript'>
cnchar.spellInfo(spell);
  </highlight-code>
</div>

该方法返回一个json：

<div>
  <highlight-code lang='json'>
{
    "spell": string, // 去音调的拼音小写
    "tone": number, // 音调 0-5
    "index": number, // 音调位置
    "initial": string, // 声母
    "final": string // 韵母
}
  </highlight-code>
</div>

以下是一个简单的例子：

<div>
  <codebox id='spellInfo'></codebox>
</div>

### 2.2 声母

`cnchar.spellInfo.initials` 方法用于获取所有的声母，用法如下：

<div>
  <codebox id='initials'></codebox>
</div>

### 2.3 音调

`cnchar.spellInfo.tones` 方法用于获取所有的音调，用法如下：

<div>
  <codebox id='tones'></codebox>
</div>

注：n 的一声使用 * 代替

## 3. 拼音音调操作: transformTone

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

```js
cnchar.transformTone('lv2') // {spell: 'lü', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lv2', true) // {spell: 'lǘ', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lv2', true, 'up') // {spell: 'LǗ', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lǘ') // {spell: 'lü', tone: 2, index: 2, isTrans: false}
```

## 4. 是否是汉字: isCnChar

`isCnChar` 方法用于判断一个字符是否是汉字

```ts
cnchar.isCnChar(word: string): boolean;
```


```js
cnchar.isCnChar('a') // false
cnchar.isCnChar('1') // false
cnchar.isCnChar('？') // false
cnchar.isCnChar('国') // true
cnchar.isCnChar('國') // true
```

## 5. 比较拼音（汉字）大小: compareSpell

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

```js
cnchar.compareSpell('ao', 'ai') // 'more'
cnchar.compareSpell('ai', 'ai') // 'even'
cnchar.compareSpell('pín', 'pǐn', 'tone') // 'less'
cnchar.compareSpell('pin2', 'pǐn', 'tone') // 'less'
cnchar.compareSpell('频', 'pǐn', 'tone') // 'less'
cnchar.compareSpell('品', '频', 'tone') // 'more'
cnchar.compareSpell('贫', '频', 'tone') // 'even'
```

## 6. 比较汉字笔画数大小: compareStroke

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

```js
cnchar.compareStroke('你', '好') // 'more'
cnchar.compareStroke('你', '苏') // 'even'
cnchar.compareStroke('好', '苏') // 'less'
cnchar.compareStroke('一个', '好') // 'less'
cnchar.compareStroke('你', 14) // 'less'
```

## 7. 根据拼音排序: sortSpell

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

```js
cnchar.sortSpell(['你', '好', '吗']) // ['好', '吗', '你']
cnchar.sortSpell('你好吗') // '好吗你'
cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone') // ['爱', '拼', '频', '品']
cnchar.sortSpell(['拼', '品', 'pin2', 'ai'], 'tone') // ['ai', '拼', 'pin2', '品']
cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone', 'desc') // ['品', '频', '拼', '爱']
cnchar.sortSpell('拼品频爱', 'tone', 'desc') // '品频拼爱'
```

## 8. 根据笔画数排序: sortStroke

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

```js
cnchar.sortStroke(['一', '三', '二']) // ['一', '二', '三']
cnchar.sortStroke('一三二') // '一二三'
cnchar.sortStroke(['一', '三', 2]) // ['一', 2, '三']
cnchar.sortStroke(['一', '三', '二'], 'desc') // ['三', '二', '一']
```

## 9. 是否是多音字：isPolyWord

`isPolyWord` 方法用于判断一个字符是否是汉字

```ts
cnchar.isPolyWord(word: string): boolean;
```

使用实例

```js
cnchar.isPolyWord('中') // true
cnchar.isPolyWord('国') // false
```

## 10. 转换拼音：shapeSpell

`shapeSpell` 将数字表示的声调转为拼音声调

如 `lv2` 会被转换成 `lǘ`，`ta1` 会被转换成 `tā`， 方便用户输入

reverse 参数表示开启反向转换 `lǘ` => `lv2`

```ts
cnchar.shapeSpell(spell: string, reverse?: boolean): string;
```

使用实例

```js
cnchar.shapeSpell('lv2') // lǘ
cnchar.shapeSpell('shang4') // shàng
cnchar.shapeSpell('shàng') // shang4
```

##### 5.13.10 判断拼音是否有音调: hasTone

```ts
cnchar.hasTone(spell: string): boolean;
```

```js
cnchar.hasTone('lv2') // true
cnchar.hasTone('shang4') // true
cnchar.hasTone('shàng') // true
cnchar.hasTone('shang') // false
```
