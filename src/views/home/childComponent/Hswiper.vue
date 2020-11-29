<template>
  <swiper>
    <swiperItem v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad" />
      </a>
    </swiperItem>
  </swiper>
</template>

<script>
import swiper from "components/common/swiper/Swiper";
import swiperItem from "components/common/swiper/SwiperItem";
export default {
  name: "Hswiper",
  // 接收父组件的数据
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    swiper,
    swiperItem,
  },
  methods: {
    swiperLoad() {
      this.$emit("swiperLoad");
    },
  },
};
</script>