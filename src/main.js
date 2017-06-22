// #主入口文件
// vue
import Vue from 'vue'

// 样式依赖
import ElementUI from 'element-ui'
// 皮肤选择
import 'element-ui/lib/theme-default/index.css'
// 主入口
import App from './App.vue'
// 路由
import router from './router'
// 状态
import store from './store'
// 使用的一个多选框组件，element-ui的select不能满足所有需求
// import Multiselect from 'vue-multiselect';
// 多选框组件css
// import 'vue-multiselect/dist/vue-multiselect.min.css';
// global style
import './index.css';

// Vue.component('multiselect', Multiselect);
// 加入ui
Vue.use(ElementUI)

// 实例化 id=>app
new Vue({
  store,
  router,	
  render: h => h(App)
}).$mount('#app');
