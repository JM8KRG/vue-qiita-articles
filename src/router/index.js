import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Articles from '@/components/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Articles
    },
    {
      path: '/hello',
      component: HelloWorld
    }
  ]
})
