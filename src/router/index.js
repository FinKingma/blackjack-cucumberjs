import Vue from 'vue'
import Router from 'vue-router'
import Cruiser from '@/components/Cruiser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cruiser',
      component: Cruiser
    }
  ]
})
