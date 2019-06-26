import Vue from 'vue'
import Router from 'vue-router'
import OriginList from '@/components/OriginList'
import Detail from '@/components/Detail'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'OriginList',
      component: OriginList
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
