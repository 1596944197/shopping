import Toast from './toast'

const obj = {
}


// main.js运行时会执行
obj.install = function (Vue) {
  // 1创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2通过new，根据组件构造器，创建出来一个组件对象
  const toast = new toastConstructor()

  // 3将组件对象，挂载在某一个元素上
  toast.$mount(document.createElement('div'))

  // 4toast.$el对应的就是div
  document.body.appendChild(toast.$el)


  Vue.prototype.$toast = toast
}


export default obj