import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// import router from './router'
import { initRouter } from './router'
import { initStore } from './store'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
// app.use(router)

// 初始化路由
initRouter(app)
// 初始化vuex
initStore(app)
app.mount('#app')
