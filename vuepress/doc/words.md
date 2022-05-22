## 1. 介绍

cnchar 在 3.1.0 加入了组词功能，启用该功能需要安装 `cnchar-words`, 该库可以独立于cnchar主库运行

使用方式如下：

```ts
cnchar.words(words: string, ...args: string[]): string[];
```

args 传入 trad 可以查询繁体字，但是依赖于安装了 `cnchar-trad`

看一个具体例子

<code-runner></code-runner>

```js
console.log(cnchar.words('你'));
cnchar.words.addWords('你们好'); // 添加一个词组
```

使用cdn引用时，会在window对向上暴露 `CncharWords` 对象

具体参数请参考 [words.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/words/index.d.ts)

## 2. words 参数

args参数如下

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
|  trad   | 开启繁体字识别 |    否    | cnchar-trad |  开启繁体字识别  |

## 3. 实例

<code-runner></code-runner>

```js
var r1 = cnchar.words('香蕉');
cnchar.words.addWords('香蕉牛奶');
var r2 = cnchar.words('香蕉');
console.log(r1, r2);
```
