export default {
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
}