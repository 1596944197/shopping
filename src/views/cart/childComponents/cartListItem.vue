<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton
        @click.native="checkBtnClick"
        v-model="product.checked"
        :isChecked="product.checked"
      ></CheckButton>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title" v-text="product.title"></div>
      <div class="item-desc" v-text="product.desc"></div>
      <div class="info-bottom">
        <div class="item-price left" v-text="'￥' + product.price"></div>
        <div class="item-count right" v-text="'x' + product.count"></div>
        <div class="item-control">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./checkButton";

export default {
  name: "ShopCartItem",
  props: {
    product: Object,
  },
  components: {
    CheckButton,
  },
  methods: {
    checkBtnClick() {
      this.product.checked = !this.product.checked;
      this.$store.dispatch("changeChecked", this.product.checked);
    },
  },
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
.item-control {
  position: absolute;
  right: 5vh;
}
.item-control button {
  width: 20px;
  border-radius: 50%;
  outline: none;
  border: none;
  margin-left: 3px;
}
</style>
