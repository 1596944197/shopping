<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scroll from "better-scroll";

export default {
  // 父组件决定是否使用该方法
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  // 使用生命周期mounted 渲染成html后调用
  mounted() {
    // 定义插件，创建对象
    this.scroll = new Scroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      // 传出一个名为scroll的方法，值为position
      this.$emit("scroll", position.y);
    });

    // 监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("loadMore");
      });
    }
  },
  methods: {
    scrollTo(x=0, y=0, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 图片刷新事件
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>