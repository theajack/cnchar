## 1. 介绍

cnchar 在 3.2.0 加入了输入法功能，支持根据传入的字母序列返回汉字候选数组

支持拼音输入法和五笔输入法86/98版本，支持联想输入，支持拼音扁平化携带音调输入（如shang4）

启用该功能需要安装 `cnchar-input`, 该库可以独立于cnchar主库运行，但是拼音输入法需要依赖 `cnchar`，联想输入依赖 `cnchar-words`

API声明：

```ts
cnchar.input(input: string, options?: {
    type?: 'spell' | 'wubi'; // 输入法类型 默认拼音
    debounce?: number; // 是否开启事件防抖 0表示不开启，其他数字表示防抖等待时间ms，默认不开启
    onResult?: (result: IInputResult) => void; // 开启防抖之后不会实时返回输入计算结果，而是会通过该回调函数返回
    associate?: boolean; // 是否开启联想输入，默认true
    wubiVersion?: '86' | '98'; // 五笔输入法版本 默认86
    wubiMode?: 'trad' | 'simple' | 'both'; // 五笔输入法默认，默认 trad，表示支持繁体字
}): IInputResult;

type IInputResult = Array<{
    split: string[];
    words: string[];
    association: string[];
}>
```

## 2. 拼音输入法

当用户输入 nim 时，传入 input方法作为输入参数

<code-runner title='拼音输入法'></code-runner>

```js
cnchar.input('nim');
```

input 方法会搜索所有可能的拼音组合，并且查找到所有对应的汉字候选，如果开启了联想输入，则还会返回一个联想候选，并且按照权重对所有候选结果排序

返回值

```js
[
    {
        association: ['你们 匿名', '-'],
        split: ['ni', 'm'],
        words: ['尼尼伲伲你拟呢坭妮怩泥泥昵逆倪匿铌旎猊溺睨腻霓鲵嶷', 'm']
    },
    {
        association: [],
        split: ['nim'],
        words: ['nim']
    }
]
```

开启事件防抖

```js
cnchar.input('nim', {
    debounce: 1000, // 等待1s种进行计算，如有新输入，则重新计算
    onResult(result){
    }
});
```

带音调输入

<code-runner title='拼音输入法'></code-runner>

```js
cnchar.input('ni3m');
```

## 2. 五笔输入法

以默认使用的86版本举例

当用户输入 qtnyb 时，传入 input方法作为输入参数

<code-runner title='五笔输入法'></code-runner>

```js
cnchar.input('qtnybj', {type: 'wubi'})
```

input 方法会搜索所有可能的五笔组合，并且查找到所有对应的汉字候选，如果开启了联想输入，则还会返回一个联想候选，并且按照权重对所有候选结果排序

```js
[
    {
        association:  ['夕', '阳'],
        split:  ['QTNY', 'BJ'],
        words:  ['夕', '阳陽隄陧隅隰']
    },
    {
        association:  ['勹', '亨'],
        split:  ['QTN', 'YBJ'],
        words:  ['勹', '亨']
    }
]
```

使用 98 版本五笔输入法

```js
cnchar.input('qtnybj', {
    type: 'wubi',
    wubiVersion: '98'
})
```

只使用简体字

```js
cnchar.input('qtnybj', {
    type: 'wubi',
    wubiMode: 'simple'
})
```
