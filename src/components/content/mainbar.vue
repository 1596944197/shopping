<template>
  <div class="bar">
    <bar>
      <baritem path="/home" activeColor="red">
        <img src="~assets/images/home.svg" alt="" slot="item-icon" />
        <img src="~assets/images/home_active.svg" alt="" slot="item-active" />
        <div slot="item-text">首页</div>
      </baritem>
      <baritem path="/category" activeColor="pink">
        <img src="~assets/images/shopcart.svg" alt="" slot="item-icon" />
        <img src="~assets/images/shopcart_active.svg" alt="" slot="item-active" />
        <div slot="item-text">分类</div>
      </baritem>
      <baritem path="/cart" activeColor="blue">
        <img src="~assets/images/category.svg" alt="" slot="item-icon" />
        <img src="~assets/images/category_active.svg" alt="" slot="item-active" />
        <div slot="item-text">购物车</div>
      </baritem>
      <baritem path="/profile" activeColor="orange">
        <img src="~assets/images/profile.svg" alt="" slot="item-icon" />
        <img src="~assets/images/profile_active.svg" alt="" slot="item-active" />
        <div slot="item-text">我的</div>
      </baritem>
    </bar>
  </div>
</template>

<script>
import bar from 'components/common/TABbar/bar';
import baritem from "components/common/TABbar/baritem";

export default {
  components: {
    bar,
    baritem,
  },
};
</script>

<style scoped>
</style>