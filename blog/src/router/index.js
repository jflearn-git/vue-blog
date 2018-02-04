import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Airplane from '@/components/airplane/airplane'
import Xiaoxi from '@/components/xiaoxi/xiaoxi'
import Yonghutouxiang from '@/components/yonghutouxiang/yonghutouxiang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/home'
    },{
    	path:'/home',
    	component: Home
    },{
    	path:'/airplane',
    	component:Airplane
    },{
    	path:'/xiaoxi',
    	component:Xiaoxi
    },{
    	path:'/yonghutouxiang',
    	component:Yonghutouxiang
    }
  ]
})
