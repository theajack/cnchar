import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import catButton from './components/catButton/catButton';

const components = [
    catButton
];

Vue.use(ElementUI);

const shotCat = {
    // 必须得有install方法
    // eslint-disable-next-line no-unused-vars
    install (Vue, options) {
        Object.values(components).forEach((component) => {
            Vue.component(component.name, component);
        });
    },
};
  
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(shotCat);
}
  
export default shotCat;