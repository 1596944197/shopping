<template>
  <div class="detailSwiper">
    <Swiper class="Box">
      <SwiperItem v-for="item in topImages">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import SwiperItem from "components/common/swiper/SwiperItem.vue";
import Swiper from "components/common/swiper/Swiper.vue";
export default {
  components: {
    SwiperItem,
    Swiper,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.detailSwiper {
  width: 100%;
  /* margin-top: 44px;; */
}
.Box {
  width: 100%;
  height: 65vh;
  overflow: hidden;
}
</style>