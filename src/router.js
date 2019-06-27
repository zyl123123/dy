import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import detail from './views/detail.vue'
import more from './views/more.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/more',
      name: 'more',
      component: more
    }
  ]
})
