
## 1. 介绍

cnchar 在 3.2.0 加入了中文姓名生成功能，启用该功能需要安装 `cnchar-name` 功能库，该库可以独立于cnchar主库运行

支持的功能有，取名字、判断是否是姓氏、判断是否是人名

如需根据姓名拼音排序请参考 [sortSpell](/doc/tool.html#_7-根据拼音排序-sortspell)

如需根据姓名笔画排序请参考 [sortStroke](/doc/tool.html#_8-根据笔画数排序-sortstroke)

使用方式如下：

## 2. 取名字

取名字功能支持定制任何位置固定汉字，支持区分男女孩，支持限定长度，使用方式如下

```ts
name(input: string, options?: {
    number?: number; // 生成多少个姓名 默认为1
    gender?: 'boy' | 'girl' | 'both'; // 性别 默认为both
    length?: number; // 名字长度 如果input包含有通配符 * 则该参数无效 默认值为3
}): string[];
```

比如生成 陈 姓的女孩3个长度的名字10个

<code-runner title='取名字'></code-runner>

```js
const names = cnchar.name('陈', {
    number: 10,
    gender: 'girl',
    length: 3,
});
console.log(names);
```

input支持使用强匹配，例如生成叫 陈易* 的男孩名

<code-runner title='使用限定字取名字'></code-runner>

```js
const names = cnchar.name('陈易*', {
    number: 10,
    gender: 'boy',
});
console.log(names);
```

## 3. 判断是否是姓氏

```ts
name.isSurname(input: string): boolean;
```


## 4. 判断是否是姓名

```ts
name.isName(input: string): boolean;
```
