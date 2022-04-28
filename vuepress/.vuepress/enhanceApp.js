// 扩展 VuePress 应用  第三方应用级别配置

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// vue代码高亮显示库 VueHighlightJS
import VueHighlightJS from 'vue-highlight.js';

// 这里样式我选择的是atom-one-light；样式更多选择可以参见 https://highlightjs.org/static/demo/ 里的styles
// 注意： 代码块的背景色 还是由官方设置的 $codeBgColor 决定的
import 'highlight.js/styles/vs2015.css';
// import 'highlight.js/styles/atom-one-dark.css';


import '../../npm/packages/cnchar-all/cnchar.all.min.js';
import 'easy-icon';

// 引入自己的组件库
import '../src/style/element.css';
import '../src/style/main.css';
import '../../public/config';
import '../src/object-assign.polyfill';

// import leancloud from 'leancloud-storage';

// 你可以在这里引入自己定义的css样式，进行修改
// import '../.vuepress/public/css/index.css'

// 注意： 由于未知原因，如果引入的是iview不能放在下面export default里use，会失效，得单独放在外面
// Vue.use(iview)

// Use import

// window.AV = leancloud;

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    // options, // 附加到根实例的一些选项
    // router, // 当前应用的路由实例
    // siteData // 站点元数据
}) => {
    // ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS);
    Vue.use(ElementUI);

    let toastTimer = null;
    Vue.prototype.$toast = (text, time = 2000) => {
        if (!text) return;
        const id = '_vuepress_toast';
        let el = document.getElementById(id);

        if (!el) {
            el = document.createElement('div');
            el.setAttribute('id', id);
            el.setAttribute('style', 'position: fixed;z-index: 10000;left: 50%;top: 50%;padding: 8px 10px;background-color: rgba(0,0,0,.7);color: #fff;border-radius: 3px;transform: translate(-50%, -50%);');
            document.body.appendChild(el);
        }

        el.innerText = text;
        clearTimeout(toastTimer);
        el.style.display = 'block';
        
        toastTimer = setTimeout(() => {
            el.style.display = 'none';
        }, time);
    };
};