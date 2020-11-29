<template>
  <li class="item" @click="details">
    <img :src="item.show.img" alt="" @load="imgChange" />
    <div class="info">
      <p v-text="item.title" class="title"></p>
      <span v-text="item.price"></span>
      <span v-text="item.cfav" class="position"></span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 发出一个事件，在main里通过原型链接收
    imgChange() {
      this.$bus.$emit("imgChange");
    },
    // 跳转到详情页
    details() {
      this.$router.push("/detail/" + this.item.iid);
    },
  },
};
</script>

<style scoped>
.item {
  max-width: 49%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: space-between;
}

.item img {
  width: 100%;
  height: 90%;
  border-radius: 5px;
  padding-bottom: 10px;
}

.info {
  position: relative;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}

.info p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  line-height: 16px;
  font-size: 16px;
}

.info span {
  color: var(--color-high-text);
  margin-right: 20px;
  font-weight: bold;
}

.info .position {
  position: relative;
}

.info .position::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 1px;
  width: 15px;
  height: 15px;
  background: url("~assets/images/collect.svg") 0 0/14px 14px;
}
</style>