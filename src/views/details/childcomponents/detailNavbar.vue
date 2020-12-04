<template>
  <div>
    <Navbar>
      <div slot="left" class="image">
        <img src="~assets/images/back.svg" @click="backTo" />
      </div>
      <div slot="center" class="detailNavbar">
        <div
          v-for="(item, index) in titles"
          v-text="item"
          :class="{ active: currentIndex == index }"
          @click="changeIndex(index)"
        ></div>
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "components/common/NAVbar/bar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      this.$emit('changeTop',index)
    },
    backTo() {
      // this.$router.go(-1);
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detailNavbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.active {
  color: var(--color-tint);
}
.image img {
  margin-top: 2vh;
}
</style>