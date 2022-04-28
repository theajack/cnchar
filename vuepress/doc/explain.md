## 1. 介绍

cnchar 在 3.1.0 加入了查询解释功能，启用该功能需要安装 `cnchar-explain`, 该库可以独立于cnchar主库运行

使用方式如下：

```ts
cnchar.words(words: string, ...args: string[]): string[];
```

args 传入 trad 可以查询繁体字，但是依赖于安装了 `cnchar-trad`

看一个具体例子

```js
cnchar.explain('你好');
cnchar.explain.addExplain('你好', '打招呼'); // 添加解释
cnchar.explain.addExplain({
    '你好': '打招呼'
});
```

使用cdn引用时，会在window对向上暴露 `CncharExplain` 对象

具体参数请参考 [explain.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/explain/index.d.ts)

## 2. explain 参数

args参数如下

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
|  trad   | 开启繁体字识别 |    否    | cnchar-trad |  开启繁体字识别  |

## 3. 实例

```js
cnchar.explain('你好');
cnchar.explain.addExplain('你好', '打招呼');
cnchar.explain('你好');
```
