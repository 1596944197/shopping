export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
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
        resolve('商品数量加1')
      } else {
        payload.count = 1
        payload.checked = false
        // context.state.cartList.push(payload)
        context.commit('toCart', payload)
        resolve('添加商品成功')
      }
    })
  },
  changeChecked(context, payload) {
    context.commit('changeChecked', payload)
  }
}