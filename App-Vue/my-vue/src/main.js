// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import esLocate from 'element-ui/lib/locale/lang/es'
import router from './router'

import store from './store/index.js'
import VueLazyload from 'vue-lazyload'
import './assets/font/iconfont.css'

Vue.config.productionTip = false//生产环境的提示是否需要
Vue.use(ElementUI,{size:'small',zIndex:3000});
axios.defaults.baseURL = 'http://127.0.0.1:3000'
// axios.defaults.headers.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios;

Vue.use(VueLazyload);
Vue.use(VueLazyload,{
  preload:1.3,
  error:'dist/error.png',
  loading:'dist/loading.gif',
  attemp:1
});

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale:'zh-CN',
  messages:{
    'zh-CN':require('./lang/it'),
    'en-US':require('./lang/en')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render:h => h(App)
})
