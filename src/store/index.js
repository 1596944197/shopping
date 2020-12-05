import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    // 该方法里面的方法尽量功能简单单一
    count(state, payload) {
      payload.count++
      // console.log(state.cartList);
    },
    toCart(state, payload) {
      state.cartList.push(payload)
      // console.log(state.cartList);
    },
    changeChecked(state, payload) {
      state.cartList.checked = payload
    }
  },
  actions: {
    addCart(context, payload) {
      // 判断旧数组有没有重复
      let oldProduct = null
      for (const item of context.state.cartList) {
        if (item.iid == payload.iid) {
          oldProduct = item
        }
      }
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('count', oldProduct)
      } else {
        payload.count = 1
        payload.checked = false
        // context.state.cartList.push(payload)
        context.commit('toCart', payload)
      }
    },
    changeChecked(context, payload) {
      context.commit('changeChecked', payload)
    }
  },
  modules: {
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})
