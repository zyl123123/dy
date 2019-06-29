import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios 注册
import axios from 'axios'
Vue.prototype.axios = axios
// axios.defaults.baseURL = '/' // 开发本地代理
axios.defaults.headers.post['Contenst-Type'] = 'application/json;'

// import axios from 'axios'

// const host = process.env.NODE_ENV === 'development' ? '/' : './' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
// const instance = axios.create({
//   baseURL: host
// })

// Vue.prototype.axios = instance




// 引用 VueVideoPlayer 视频播放模块
// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// Vue.use(VueVideoPlayer)

// vant-组件的引用注册
import Lazyload from 'vant/lib/lazyload';
import 'vant/lib/lazyload/style';

import Rate  from 'vant/lib/rate';
import 'vant/lib/rate/style';

import Search  from 'vant/lib/search';
import 'vant/lib/search/style';

import NavBar  from 'vant/lib/nav-bar';
import 'vant/lib/nav-bar/style';

import Toast  from 'vant/lib/toast';
import 'vant/lib/toast/style';

import Loading  from 'vant/lib/loading';
import 'vant/lib/loading/style';

Vue.use(Lazyload)
Vue.use(Rate)
Vue.use(Search )
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
