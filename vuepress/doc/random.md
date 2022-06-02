## 1. 介绍

cnchar 在 3.2.0 加入了随机生成数据的功能，可以随机生成 拼音、汉字、词语、成语、歇后语

启用该功能需要安装 `cnchar-random`, 该库可以独立于cnchar主库运行，且该库相关功能依赖相关插件库提供的字典

举个例子：

如需使用随机生成成语，则需要依赖`cnchar-idiom`库，有两种方式

1. 一种是通过`cnchar`引用`cnchar-idiom`

```js
import cnchar from 'cnchar';
import random from 'cnchar-random';
import idiom from 'cnchar-idiom';

cnchar.use(random, idiom);
cnchar.random.idiom({number: 10});
```

2. 另一种是直接引用`cnchar-idiom`

```js
import random from 'cnchar-random';
import idiom from 'cnchar-idiom';

random.use(idiom);
random.idiom({number: 10});
```

## 2. use 引用插件

当脱离 cnchar 独立引用时，需要通过 random.use api 引入相关功能插件才可以正常使用随机生成数据功能

```js
random.use(plugin);
```

## 3. 随机生成拼音

该功能依赖`cnchar`

```ts
cnchar.random.spell(options?: {
    number?: number; // 生成数量 默认1
    tone?: boolean; // 是否带音调 默认false
    flat?: boolean; // 是否扁平化拼音 如 lv2 默认false
}): string[];
```

## 4. 随机生成汉字

该功能依赖`cnchar`

```ts
cnchar.random.word(options?: {
    number?: number; // 生成数量 默认1
    stroke?: number; // 笔画数 默认不限制
    trad?: boolean; // 是否查找繁体字 默认否
}): string;
```

如需根据 笔顺 随机生成汉字，可以参考 [orderToWord](/doc/order.html#_4-%E7%AC%94%E7%94%BB%E6%8E%A8%E5%87%BA%E5%8E%9F%E6%B1%89%E5%AD%97-ordertoword) 方法

## 5. 随机生成成语

该功能依赖`cnchar-idiom`

```ts
cnchar.random.idiom(options?: {
    number?: number; // 生成数量 默认1
    pattern?: [TIdiomInput, ...IdomArg[]];
}): string;
```

pattern参数，会调用cnchar.idiom(...pattern) 请参考[cnchar-idiom](/doc/idiom.html)文档

## 6. 随机生成歇后语

该功能依赖`cnchar-xhy`

```ts
cnchar.random.xhy(options?: {
    number?: number; // 生成数量 默认1
    pattern?: [string, ...XhyArg[]];
}): string;
```

pattern参数，会调用cnchar.xhy(...pattern) 请参考[cnchar-xhy](/doc/xhy.html)文档

## 7. 随机生成词语

该功能依赖`cnchar-words`

```ts
cnchar.random.words(options?: {
    number?: number; // 生成数量 默认1
    length?: number; // 词语长度 默认不限制
    match?: string; // 查找包含match的词语
}): string;
```

## 8. 随机生成匹配信息的汉字

该功能依赖`cnchar-info`

```ts
cnchar.random.info(options?: {
    number?: number; // 生成数量 默认1
    fiveElement?: '金' | '木' | '水' | '火' | '土'; // 根据五行查找
    method?: '形声' | '会意'; // 根据造字法查找
}): string;
```
