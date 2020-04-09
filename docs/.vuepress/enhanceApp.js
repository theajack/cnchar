// 扩展 VuePress 应用  第三方应用级别配置

// vue代码高亮显示库 VueHighlightJS
import VueHighlightJS from 'vue-highlight.js';

// 这里样式我选择的是atom-one-light；样式更多选择可以参见 https://highlightjs.org/static/demo/ 里的styles
// 注意： 代码块的背景色 还是由官方设置的 $codeBgColor 决定的
import 'highlight.js/styles/vs2015.css';

import '../../npm/all/cnchar.all.min.js';

// 引入自己的组件库
import Cat from '../src/index';

// 你可以在这里引入自己定义的css样式，进行修改
// import '../.vuepress/public/css/index.css'

// 注意： 由于未知原因，如果引入的是iview不能放在下面export default里use，会失效，得单独放在外面
// Vue.use(iview)

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    // options, // 附加到根实例的一些选项
    // router, // 当前应用的路由实例
    // siteData // 站点元数据
}) => {
    // ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS);
    Vue.use(Cat);
};