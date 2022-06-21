
## 1. 介绍

cnchar 在3.2.0加入了汉字信息查询功能，启用该功能需要安装 `cnchar-info` 功能库，该库可以独立于cnchar主库运行

使用方式如下：

```ts
info(input: string): Array<{
    fiveElement: string; // 五行：'金' | '木' | '水' | '火' | '土'
    method: string; // 造字法：'形声' | '会意'
    markSpell: string; // 汉字注音
}>;
```

js 调用如下

```js
cnchar.info('汉字');
```