---
title: 2.0 Button 按钮
---
<!-- 说明： -->
<!-- baseComponent-codeBox 组件即为.vuepress/components/baseComponent/codeBox文件，vuepress会默认把它解析为`baseComponent-codeBox`组件;  title为代码示例标题；description为代码示例说明；onlineLink为在线运行配置的网址 -->

<!-- 同理demo-catButton-type_catButton即为编写的代码示例组件 -->

<!-- highlight-code为引入的第三方代码高亮组件，里面包裹的就是上面示例组件的代码 -->

<baseComponent-codeBox title="按钮类型"
  description="按钮类型通过设置type为primary、success、info、warning、danger、text创建不同样式的按钮，不设置为默认样式。"
  onlineLink="https://codepen.io/1011cat/pen/KjEOWO">
  <demo-catButton-type_catButton></demo-catButton-type_catButton>
  <!-- 这里直接设置 引入的展示代码 ；注意引入代码一定不能缩进！！！否则不能生效！-->
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/catButton/type_catButton.vue
  </highlight-code>
</baseComponent-codeBox>

<!-- 组件的参数表格,这里我没有使用自带的markdown表格，因为太丑，样式不好修改，有时参数描述较少时，不能自动撑满一行，所以自己写了一个组件；titile为表格标题，tableHead为表头，tableBody为具体参数设置，并且支持el-table的table参数 -->
<baseComponent-apiTable title="Attributes" :tableBody="tableBody" :tableHead="tableHead">
</baseComponent-apiTable>

<!-- 给个star 彩蛋组件 -->
<baseComponent-star></baseComponent-star>

<!-- 第三方评论插件 -->
<Vssue title="" />

<!-- 其实在vuepress里的每个.md其实和.vue很像的，你基本可以按照vue组件模式来写 -->
<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `size | 尺寸 | String | medium / small / mini | —`,
          `type |	类型 | string |	primary / success / warning / danger / info / text | —`
        ],
      }
    },

  }
</script>

<!-- 和vue一样，也可以设置样式，并且这里style样式只对当前md有效，不需要加上scoped -->
<style>
</style>