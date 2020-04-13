## 1. 介绍

`cnchar-order` 库是用于支持获取汉字笔顺及其名称、形状，除此之外，该库还提供一个`orderToWord`方法，可以根据笔画序列推出原汉字，以及提供一个汉字所有笔划的json属性

引入该库之后，`cnchar.stroke()` 方法才会支持 `order` 等参数

npm安装

<div>
  <highlight-code>
npm i cnchar-order
  </highlight-code>
</div>

cdn使用

<div>
  <highlight-code lang='html'>
&lt;script src="https://cdn.jsdelivr.net/npm/cnchar-order/cnchar.order.min.js">&lt;/script>
  </highlight-code>
</div>

使用

<div>
  <highlight-code lang='javascript'>
import cnchar from 'cnchar';
import order from 'cnchar-order';
cnchar.use(order); // use 在浏览器环境中非必须
  </highlight-code>
</div>

## 2. stroke参数

|  参数  |         作用 | 是否默认 |    依赖库    |         备注 |
| :----: | :---------------: | :------: | :----------: | :-----------: |
| array  |       返回数组        |    否    |      --      | 使用 cnchar-order 且启用 order 参数后该参数被忽略 |
| order  |     启用笔画顺序      |    否    | cnchar-order |        --        |
| letter | 使用笔画顺序字母序列  |    是    | cnchar-order |  当启用 order 后，该值是默认值  |
| detail | 使用笔画顺序详情作为返回值，每个汉字对应一个 json |    否    | cnchar-order |   优先级小于 letter   |
| shape  | 使用笔画形状作为返回值 |    否    | cnchar-order |   优先级小于 detail   |
|  name  | 使用笔画名称作为返回值 |    否    | cnchar-order |   优先级小于 shape    |
| count  | 使用笔画数作为返回值  |    否    | cnchar-poly  |    优先级小于 name    |
| simple |    是否禁用繁体字的笔画功能 |    否    | cnchar-trad  | 使用 cnchar-trad 之后，默认对繁体字启用笔画功能，该参数用于禁用繁体字笔画功能 |

以上五种模式优先级为 **letter < detail < shape < name < count**

## 3. 实例

以下演示几个多音词的例子

<div>
  <codebox id='order' :format='true' :fold='true'></codebox>
</div>

笔划形状模式（shape）由于系统原因，某些形状字符在 ios和macos上无法显示

## 4. 笔画推出原汉字(orderToWord)

### 4.1 使用

当引入 `cnchar-order` 功能库(版本 2.0.2 及以上)之后，cnchar 就支持了根据笔画名称序列推出原汉字的功能，使用方式如下：

<div>
  <highlight-code lang='javascript'>
cnchar.orderToWord(orderNames[,...args]);
  </highlight-code>
</div>

`orderNames` 是笔画名称序列, 可以是空格分隔的笔画名称字符串或笔画名称数组

`args` 是参数列表，可选值有 `['match','matchorder','contain','start','array','simple']`, 使用 `cnchar.type.orderToWord` 可以查看可选值， 详情请见 4.2

以下是一个简单的使用实例：

<div>
  <codebox id='orderToWord' :fold='true'></codebox>
</div>

### 4.2 参数详情

参数调用如下，所有 arg 参数都是可选的

<div>
  <highlight-code lang='javascript'>
cnchar.orderToWord(orders,arg1,arg2,...);
  </highlight-code>
</div>


arg 参数信息如下：

|    参数     |      作用      | 是否默认 |   依赖库    |   备注    |
| :---------: | :--------: | :------: | :---------: | :---: |
|    match    |        匹配含有笔序中所有笔画的汉字        |    否    |     --      |  --  |
| matchorder | 匹配含有笔序中所有笔画的汉字前先后顺序一致 |    否    |     --      |  --  |
|   contain   |   匹配含有该笔序的汉字   |    否    |     --      |  --  |
|    start    |         匹配所有以该笔序开头的汉字         |    否    |     --      |  --  |
|    array    |   数组分割，默认返回的是字符串   |    否    |     --      |  --  |
|   simple    |   只查询简体字   |    否    | cnchar-trad | 该参数仅在引入了 `cnchar-trad` 后有效 |
|   trad    |   只查询繁体字   |    否    | cnchar-trad | 该参数仅在引入了 `cnchar-trad` 后有效 |

关于匹配参数，优先级为 **match > matchorder > contain > start > 默认**

不含有匹配参数时表示使用全匹配，即汉字笔画数与传入的 orders 完全一致


### 4.3 汉字所有笔划(orderToWord.orders)

可用的笔画名称可以通过以下 api 查看

orderNames 只需要传入笔画名称即可，也就是下面 json 数据的 key 值

<div>
  <codebox id='orders' :fold='true'></codebox>
</div>

注：其中以下五对笔画没有进行区分，使用的是同样的字母表示：
**卧钩 = 斜钩**、**横折弯 = 横折折**、**横折折折钩 = 横撇弯钩**、**横撇 = 横钩**、**竖折折 = 竖折撇**

