其实这些说明，我在代码注释里都有详细说明，但还是想单独提出来啰嗦下~
## 组件库引入的路径问题
在编写组件库时，我们一般都会默认配置一些路径alias。但是打包后就会出现找不到对应文件的错误。这个时候就需要在`docs/.vuepress/components/config.js`里进行修改。
::: tip
```js
// 很多时候，我们引入自己的组件库，路径是不对的，
//这时就需要引入path，并在后面的chainWebpack进行配置
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '../../', dir)
}

// vuepress里修改webpack配置，使用的是chainWebpack进行链式调用
// 具体使用可以参考我这个例子和 https://github.com/neutrinojs/webpack-chain/tree/v5
chainWebpack: (config, isServer) => {
  config.resolve.alias
    .set('@',resolve('src'))
}
```
::: 

## 关于侧边栏的说明
由于为了演示，这里就加上了版本1.0和2.0。如果不需要，可以删掉这两个文件夹，将里面的文件放在外面。依然是在`docs/.vuepress/components/config.js`里进行修改即可。

## vssue配置
vssue这个是一个利用github issue的评论插件 具体配置见https://vssue.js.org/zh/ 所以是需要你自己进行`docs/.vuepress/components/config.js`配置。这里演示页面的评论是会加到我自己的项目issue里。

## 参数api 表格
因为自带的markdown表格，样式比较单调，主要是不能自适应，调整表格宽度，当说明较少时，表格是撑不满一整行的。所以就用el-table改进了下。当然为了保证书写的简便性，写法也是基本和markdown的写法一样。
::: tip
```js
//表头为字符串，写法和md一样，中间以`|`间隔就行
tableHead:`参数 | 说明 | 类型 | 可选值 | 默认值`,
//表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
tableBody: [
  `size | 尺寸 | String | medium / small / mini | —`,
  `type |	类型 | string |	primary / success / warning / danger / info / text | —`
],
```
:::

## star组件说明
那个看起来很炫的star组件，是由`https://codepen.io/sanzang/pen/LKvNPd` 代码修改而来。这里表示感谢！~