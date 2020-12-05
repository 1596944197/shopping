<template>
  <div id="cart">
    <Navbar class="cart-nav">
      <div slot="center">购物车({{ cartLength }})</div>
    </Navbar>
    <CartList></CartList>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import Navbar from "components/common/NAVbar/bar";
// 这个东西好像是用来直接传递store里面的getters方法的
import { mapGetters } from "vuex";

import CartList from "./childComponents/cartList";
import CartBottomBar from "./childComponents/cartBottomBar";

export default {
  components: {
    Navbar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // 这是一个函数
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style scoped>
.cart-nav {
  /* 使用变量 */
  background: var(--color-tint);
  color: aliceblue;
  font-weight: bold;
  font-size: 20px;
}
#cart {
  width: 100%;
  height: 100vh;
}
</style>