import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/components/Demo1.vue'
import home from '@/views/home'
import login from '@/views/login.vue'
import user from '@/views/user'
import add from '@/views/add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path:'/home',
      name:'home',
      component:home,
      children:[
        {
        path:'list',
        name:'list',
        component: () => import(/* webpackChunkName: "list"*/ '@/views/list')//懒加载的方式
      },{
        path:'user',
        name:'user',
        component: user
        //component: () => import('@/views/user')
      },
    ]
    }
  ]
})
