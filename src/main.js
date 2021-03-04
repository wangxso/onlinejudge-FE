import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/css/styles.css'
import VueRouter from "vue-router";
import routers from './routers'
import axios from 'axios'
import api from '@/api'
import store from '@/store/'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// nprogress样式文件
import moment from'moment';
import 'moment/locale/zh-cn';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { FormModel } from 'ant-design-vue';
moment.locale('zh-cn');

import highlight from '@/plugins/highlight'
Vue.use(highlight)
Vue.use(ElementUI);

Vue.use(FormModel);
// 定义全局时间戳过滤器
Vue.filter('formatDate', function(value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
});
Vue.prototype.$moment = moment;
Vue.use(mavonEditor);

Vue.config.productionTip = false;
Vue.use(Antd);


Vue.use(VueRouter);
Vue.prototype.$axios = axios ;  //全局注册，使用方法为:this.$axios

// 将api挂在到vue的原型上
Vue.prototype.$api = api;
const router = new VueRouter({
  mode: 'history',
  routes: routers
});
//当路由开始跳转时
router.beforeEach((to, from , next) => {
  // 开启进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});
//当路由跳转结束后
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
