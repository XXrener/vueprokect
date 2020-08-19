import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'

//引入路由

import VueRouter from 'vue-router'

Vue.use(VueRouter);

//1.引入组件
import Satart from "./components/Satart.vue"
import Cart from "./components/Cart.vue"
import Home from "./components/Home.vue"
import Hot from "./components/Hot.vue"
import Order from "./components/Order.vue"
import Pcontent from "./components/Pcontent.vue"
import Search from "./components/Search.vue"

//2.配置路由
const routes = [
  { path:'/satart',component:Satart },
  { path:'/cart' ,component: Cart },
  { path:'/home' ,component: Home },
  { path:'/hot' ,conponents: Hot },
  { path:'/order' ,component: Order },
  { path:'/pcontent' ,component: Pcontent },
  { path:'/search' ,component: Search },
  { path:'/*' , redirect:'/satart'}
]

//3.(实例化路由)

const router = new VueRouter({
  routes
})


//4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//5。使用路由 挂载在跟组件中

/* <router-view></router-view> */