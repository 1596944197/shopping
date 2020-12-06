import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引用toast插件
import toast from 'components/common/toast'
// 1.导入fastClick插件
import fastClick from 'fastclick'
// 1.导入图片懒加载插件
// import lazyLoad from 'vue-lazyload'

// 安装toast插件
Vue.use(toast)
// 2.解决移动端默认延迟,使用fastClick插件
fastClick.attach(document.body)

// 使用插件
// Vue.use(lazyLoad)

Vue.config.productionTip = false

// 是接收listItem中发出的事件
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


