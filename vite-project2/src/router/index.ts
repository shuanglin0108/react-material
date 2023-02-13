// import VueRouter from 'vue-router'
// import Vue from 'vue'
// Vue.use(VueRouter)
// Vue2: use: 调用的就是参数上的install方法，或者是直接调用参数。Vue.prototype.$router/$route

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { App } from 'vue'
// import { userStore } from 'vuex'
import store from '../store'
import Cookies from 'js-cookie'
import { getAdminInfoApi } from '../request/api'

// RouteRecordRaw 类型别名
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/homepage/homepage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),  // 模式
  routes // 路由配置
})

// 前置导航守卫
router.beforeEach((to, from, next) => {
  // 1.token 存在 && vuex里面menus (权限列表) 为空
  // const store = userStore()  
  const token = Cookies.get('token')
  console.log(store, 'store');
  if(token && store.state.menus.length === 0) {
    console.log('menus为空');
    store.dispatch('getAdminInfo')
    // getAdminInfoApi().then(res => {
    //   if (res.code === 200) {
    //     store.commit('updateMenus', res.data.menus)
    //   }
    // })
  }
  next()
})

export const initRouter = (app: App<Element>) => {
  app.use(router)
}

// export default router