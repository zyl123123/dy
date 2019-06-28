import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios 注册
import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.baseURL = '/api' // 开发本地代理
axios.defaults.headers.post['Contenst-Type'] = 'application/json;'

// 引用 VueVideoPlayer 视频播放模块
// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// Vue.use(VueVideoPlayer)

import Lazyload from 'vant/lib/lazyload';
import 'vant/lib/lazyload/style';

import Rate  from 'vant/lib/rate';
import 'vant/lib/rate/style';

import Search  from 'vant/lib/search';
import 'vant/lib/search/style';

// options 为可选参数，无则不传
Vue.use(Lazyload)
Vue.use(Rate)
Vue.use(Search )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
