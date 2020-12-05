<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <CartListItem v-for="(item, index) in cartList" :product="item">
      </CartListItem>
    </Scroll>
  </div>
</template>

<script>
import CartListItem from "./cartListItem";
import Scroll from "components/common/scroll/scroll";
import { mapGetters } from "vuex";

export default {
  components: {
    CartListItem,
    Scroll,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    goHome() {
      this.$router.replace("/home");
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100vh;
  margin-top: 44px;
  /* 需要加hidden，不然会撑大 */
  overflow: hidden;
}
.cart-list {
  width: 100%;
  height: 100%;
}
</style>