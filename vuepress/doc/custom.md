## 1. 介绍

由于 cnchar 数据来源于网络，虽然经过了大量修改，但是还是难免会有错漏

所以 cnchar 提供了修改默认数据的api，方便开发者修改与添加数据

## 2. 设置拼音数据: setSpell

`setSpell` 方法用于设置拼音数据，用法如下：

```ts
cnchar.setSpell(word: string, spell: string): void;
cnchar.setSpell(json: {[key: string]: string}): void;
```

以下是一个简单的例子：

拼音支持声调数字模式（lv2=>lǘ）

```js
// 用于添加cnchar中不包含的汉字 或修改 cnchar中有误的汉字
cnchar.setSpell('x', 'x');
cnchar.setSpell('x', ['x1', 'x2']); // 多个读音
cnchar.setSpell({ // 多个汉字
    'x': 'x',
    'y': ['y1', 'y2']
});
```

## 3. 设置多音字的默认读音: setSpellDefault

设置多音字的默认读音

```ts
cnchar.setSpellDefault(word: string, spell: string): void;
cnchar.setSpellDefault(json: {[key: string]: string}): void;
```

拼音支持声调数字模式（lv2=>lǘ）

```js
// 用于设置或修改 cnchar 中多音字的默认读音
cnchar.setSpellDefault('长', 'zhǎng');
cnchar.setSpellDefault({ // 多个汉字
    '长': 'zhǎng',
    '中': 'zhòng'
});
```

## 4. 设置笔画数: setStrokeCount

设置汉字笔画数

```ts
cnchar.setStrokeCount(word: string, count: number): void;
cnchar.setStrokeCount(json: {[key: string]: number}): void;
```

```js
// 用于添加cnchar中不包含的汉字 或修改 cnchar中有误的汉字
cnchar.setStrokeCount('大', 3);
cnchar.setStrokeCount({ // 多个
    '大': 3,
    '子': 3
});
```

## 5. 设置笔顺: setOrder


设置汉字笔顺， 依赖 `cnchar-order` 库

添加的笔顺必须是字母，详情对应关系参见 [stroke-table](https://github.com/theajack/cnchar/blob/master/src/cnchar/plugin/order/stroke-table.json)

```ts
cnchar.setOrder(word: string, order: string): void;
cnchar.setOrder(json: {[key: string]: string}): void;
```

```js
// 用于添加cnchar中不包含的汉字 或修改 cnchar中有误的汉字
cnchar.setOrder('大', 'jsl');
cnchar.setOrder({ // 多个
    '大': 'jsl',
    '子': 'egj'
});
```

## 6. 设置多音词的读音：setPolyPhrase

设置多音词的读音， 依赖 `cnchar-poly` 库

```ts
cnchar.setPolyPhrase(word: string, spell: string): void;
cnchar.setPolyPhrase(json: {[key: string]: string}): void;
```

拼音支持声调数字模式（lv2=>lǘ）

依赖 `cnchar-poly`

```js
// 用于添加cnchar中不包含的词组 或修改 cnchar中有误的词组
cnchar.setPolyPhrase('测试', 'cè shi4');
cnchar.setPolyPhrase({ // 多个
    '测试': 'cè shì',
    '体验': 'tǐ yàn'
});
```

## 7. 设置汉字偏旁部首: setRadical

设置汉字偏旁部首， 依赖 `cnchar-radical` 库

```ts
cnchar.radical.setRadical(word: string, radical: string): void;
cnchar.radical.setRadical(json: {[key: string]: string}): void;
```

```js
// 用于添加cnchar中不包含的汉字 或修改 cnchar中有误的汉字
cnchar.radical.setRadical('x', 'x');
cnchar.radical.setRadical({ // 多个
    'x': 'x',
    'y': 'y'
});
```

## 8. 添加歇后语: addXhy

添加歇后语， 依赖 `cnchar-xhy` 库

```ts
cnchar.xhy.addXhy(args: Array<Array<string> | string>): void;
cnchar.xhy.addXhy(xhyHead: string, xhyTail: string): void;
```

```js
cnchar.xhy.addXhy('歇后语第一句', '歇后语第二句');
cnchar.xhy.addXhy([ // 多条
    ['歇后语第一句', '歇后语第二句'],
    ['歇后语第一句2', '歇后语第二句2'],
]);
```