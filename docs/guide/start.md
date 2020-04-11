
## 1. npm安装

安装[主库](https://npmjs.com/package/cnchar)：

```
npm i cnchar
```

按需安装功能库：

```
npm i cnchar-poly cnchar-order cnchar-trad cnchar-draw
```

浏览器环境中功能库可以直接使用：

<div>
  <highlight-code lang='javascript'>
    import cnchar from 'cnchar';
    // 以下功能库请按需使用
    import 'cnchar-poly';
    import 'cnchar-order';
    import 'cnchar-trad';
    import 'cnchar-draw';
  </highlight-code>
</div>

非浏览器环境中功能库需要使用use方法加载，且不支持 `cnchar-draw` 库：

<div>
  <highlight-code lang='javascript'>
    import cnchar from 'cnchar';
    // 以下功能库请按需使用
    import poly from 'cnchar-poly';
    import order from 'cnchar-order';
    import trad from 'cnchar-trad';
    cnchar.use(poly, order, trad);
  </highlight-code>
</div>


## 2. cdn使用

使用 script 标签使用：

<div>
  <highlight-code lang='html'>
      &lt;script src="https://cdn.jsdelivr.net/npm/cnchar/cnchar.min.js">&lt;/script>
      &lt;!--以下功能库请按需使用-->
      &lt;script src="https://cdn.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js">&lt;/script>
      &lt;script src="https://cdn.jsdelivr.net/npm/cnchar-order/cnchar.order.min.js">&lt;/script>
      &lt;script src="https://cdn.jsdelivr.net/npm/cnchar-trad/cnchar.trad.min.js">&lt;/script>
      &lt;script src="https://cdn.jsdelivr.net/npm/cnchar-draw/cnchar.draw.min.js">&lt;/script>
  </highlight-code>
</div>

## 3. 快速使用

<el-button @click='openJsbox'> 测试</el-button>

<jsbox ref='jsbox'></jsbox>

<baseComponent-star></baseComponent-star>

<script>
  export default {
    methods: {
      openJsbox(){
        this.$refs.jsbox.open()
      }
    }
  }
</script>
