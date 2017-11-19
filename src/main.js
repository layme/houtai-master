// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './router-config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//加载路由中间件
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

//定义路由
const router = new VueRouter({
  routes: routeConfig
})

new Vue({
  router,
  el: "#app",
  render: h => h(App)
})
