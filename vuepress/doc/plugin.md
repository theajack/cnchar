## 1. 介绍

cnchar 提供了一个非常简洁的插件体系，可以很方便的基于cnchar功能开发一个新的插件

一个 cnchar 插件只有一个必选属性 pluginName

表示插件名称，cnchar.use 插件之后，会注入到 cnchar.plugins 中，且插件对象会被挂载到 cnchar 上

cnchar 所有现有插件都会携带有 dict属性用来暴露内部的字典，以方便其他插件可以直接使用，具体请参考[插件声明](https://github.com/theajack/cnchar/tree/master/src/cnchar-types/plugin)

可以使用 hasPlugin api 来判断是否引入了某插件

```js
cnchar.hasPlugin('draw')
```

## 2. install属性

install 是一个方法，cnchar.use 插件之后， cnchar对象会调用install方法，并将cnchar对象作为回调带入插件中，**可以通过cnchar对象访问cnchar和其他插件方法**

## 3. getCnChar

插件被安装成功之后，会注入一个 getCnChar 到插件上，可以获取到cnchar对象

其他插件属性可以参考 [common.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/main/common.d.ts)

## 4. js定义插件

```js
export default {
    pluginName: 'custom',
    install (cnchar) {
        console.log(cnchar);
    },
    version: '0.0.1',
    log: () => console.log('hello cnchar-plugin!');
}
```

## 5. ts定义插件

如果使用ts，则可以安装 `cnchar-types` 来添加cnchar声明，当然这不是必须的

推荐使用 cnchar-types, 首先需要安装 `cnchar-types`

```
npm i cnchar-types
```

```ts
import ICnChar, {IPlugin} from 'cnchar-types';

const plugin: IPlugin = {
    pluginName: 'custom',
    install (cnchar: ICnChar) {
        console.log(cnchar);
    },
    version: '0.0.1',
    log: () => console.log('hello cnchar-plugin!');
};

declare module 'cnchar-types/main/index' {
    interface ICnChar {
        custom: {
            pluginName: 'custom';
            version: string;
            log: () => void;
        };
    }
}

export default plugin;
```

不使用 cnchar-types

```ts
const plugin: {
    pluginName: string;
    install: (cnchar: any) => any;
} = {
    pluginName: 'custom',
    install (cnchar: any) {
        console.log(cnchar);
    },
    version: '0.0.1',
    log: () => console.log('hello cnchar-plugin!');
};
export default plugin;
```
