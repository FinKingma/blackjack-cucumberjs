import Vue from 'vue'
import Router from 'vue-router'
import BlackJackViewer from '@/components/BlackJackViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlackJackViewer',
      component: BlackJackViewer
    }
  ]
})
