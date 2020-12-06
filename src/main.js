import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引用toast插件
import toast from 'components/common/toast'
// 安装toast插件
Vue.use(toast)
// 1.导入fastClick插件
import fastClick from 'fastclick'


// 2.解决移动端默认延迟,使用fastclick插件
fastClick.attach(document.body)

Vue.config.productionTip = false

// 是接收listitem中发出的事件
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


