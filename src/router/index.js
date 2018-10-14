import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MapStore from '@/components/MapStore'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/old',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'MapStore',
      component: MapStore
    }
  ]
})
