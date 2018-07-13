// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Layout from './components/layout.vue'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import DetailAna from './pages/detail/analysis.vue'
import DetailCou from './pages/detail/count.vue'
import DetailFor from './pages/detail/forecast.vue'
import DetailPub from './pages/detail/publish.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: 'detail/count',
      children: [
        {
          path: 'analysis',
          component: DetailAna
        },
        {
          path: 'count',
          component: DetailCou
        },
        {
          path: 'forecast',
          component: DetailFor
        },
        {
          path: 'publish',
          component: DetailPub
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {
    Layout
  }
})
