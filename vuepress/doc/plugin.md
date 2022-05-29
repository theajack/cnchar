## 自定义插件

cnchar 采用的是独立的插件形式，定义一个 cnchar 插件非常简单且不依赖任何第三方包，并且通过 cnchar 注入，可以访问到任何 cnchar 和其他插件的方法

一个 cnchar 插件需要有两个属性

1. pluginName

   插件名称，插件安装之后，会注入到 cnchar.plugins 中

2. install

   安装方法，cnchar对象会调用install方法，并将cnchar对象作为回调带入插件中，**可以通过cnchar对象访问cnchar和其他插件方法**

   install方法如果返回一个json，则cnchar对象会将这个json中的所有属性挂载到cnchar中，前提是不能与已有属性有命名冲突

### 1. js定义插件

```js
export default {
    pluginName: 'custom',
    install (cnchar) {
        const log = () => console.log('hello!');
        return {
            customLog: log,
            custom: {
                version: '0.0.1',
                log
            }
        };
    }
}
```

### 2. ts定义插件

如果使用ts，则可以安装 `cnchar-types` 来添加cnchar声明，当然这不是必须的

推荐使用 cnchar-types

```ts
import ICnChar, {IPlugin} from 'cnchar-types';

const plugin: IPlugin = {
    pluginName: 'custom',
    install (cnchar: ICnChar) {
        const log = () => console.log('hello!');
        return {
            customLog: log,
            custom: {
                version: '0.0.1',
                log
            }
        };
    }
};

declare module 'cnchar-types/main/index' {
    interface ICnChar {
        customLog: () => void;
        custom: {
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
        const log = () => console.log('hello!');
        return {
            customLog: log,
            custom: {
                version: '0.0.1',
                log
            }
        };
    }
};
export default plugin;
```
