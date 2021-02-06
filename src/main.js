import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/styles.css'
import VueRouter from "vue-router";
import routers from './routers'
import axios from 'axios'
import api from '@/api'
import Moment from 'moment'
import store from '@/store/'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


import { FormModel } from 'ant-design-vue';
Vue.use(FormModel);
// 定义全局时间戳过滤器
Vue.filter('formatDate', function(value) {
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
});
Vue.use(mavonEditor)

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

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
