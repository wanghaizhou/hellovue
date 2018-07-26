import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import item from '@/page/item'
import score from '@/page/score'
import mainpage from '@/page/mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: mainpage,
      children:[{
        path: '/',
        component: home,
      },{
        path: '/item',
        component: item,
      },{
        path: '/score',
        component: score,
      }
    ]
    }
  ]
})
