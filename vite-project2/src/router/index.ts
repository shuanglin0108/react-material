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
  // {
  //   path: '/homepage',
  //   name: 'homepage',
  //   component: () => import('../views/homepage/homepage.vue')
  // },
  // {
  //   path: '/pms',
  //   name: 'pms',
  //   component: () => import('../views/homepage/homepage.vue'),
  //   children: [
  //     {
  //       path: '/product',
  //       name: 'product',
  //       component: () => import('../views/pms/product.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),  // 模式
  routes // 路由配置
})

// 根据getters 里面的菜单对象，生成路由规则
const genRoutes = () => {
  const menus = store.getters.getNewMenus
  // const newRoutes: RouteRecordRaw[] = []
  // 循环菜单对象
  for (let key in menus) {
    const newRoute: RouteRecordRaw = {
      path: '/' + menus[key].name,
      name: menus[key].name,
      component: () => import('../views/homepage/homepage.vue'),
      // component: () => import(`../views/${menus[key].name}`),
      children: []
    }
    for (let i = 0; i < menus[key].children.length; i++) {
      newRoute.children?.push({
        path: menus[key].children[i].name,
        name: menus[key].children[i].name,
        component: () => import(`../views/${menus[key].name}/${menus[key].children[i].name}.vue`),
      })
    }
    // 动态添加路由规则
    router.addRoute(newRoute)
  }

  // 动态添加首页
  router.addRoute({
    path: '/',
    name: 'homepage',
    component: () => import('../views/homepage/homepage.vue'),
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/index/index.vue'),
      }
    ]
  })
}

// 前置导航守卫
router.beforeEach((to, from, next) => {
  // 1.token 存在 && vuex里面menus (权限列表) 为空
  // const store = userStore()  
  const token = Cookies.get('token')
  console.log(store, 'store');
  if (token && store.state.menus.length === 0) {
    console.log('menus为空');
    // 异步
    store.dispatch('getAdminInfo').then(() => {
      genRoutes()
      next(to)
    })
    // getAdminInfoApi().then(res => {
    //   if (res.code === 200) { 
    //     store.commit('updateMenus', res.data.menus)
    //   }
    // })    
  } else if (token && store.state.menus.length !== 0 && from.path === '/login' && to.path === '/homepage') {
    // 动态添加路由规则
    genRoutes()
    next('/index')
  } else if (!token && to.path !== '/login') {    
    next('/login')
  } else if (token && to.path === '/login') {
    // 限制用户有token的页面操作
    next(from)
  } else {
    next()
  }
})

export const initRouter = (app: App<Element>) => {
  app.use(router)
}

// export default router