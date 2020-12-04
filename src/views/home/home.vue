<template>
  <div class="home">
    <Navbar class="home-nav"><div slot="center">购物节</div></Navbar>
    <Scroll
      class="content"
      ref="scroll"
      :probeType="2"
      @scroll="contentRun"
      :pullUpLoad="true"
      @loadMore="loadMore"
    >
      <!-- 绑定数据，将banner的数据传递过去 -->
      <Hswiper :banner="banner" @swiperLoad.once="swiperLoad"></Hswiper>
      <Hrecommend :recommend="recommend"></Hrecommend>
      <!-- 封装思想，一张图片也要进行组件化 -->
      <Popular></Popular>
      <Control
        :titles="['流行', '热门', '精选']"
        @tabClick="tabClick"
        ref="control"
      />
      <List :goods="showGood" />
    </Scroll>
    <Control
      :titles="['流行', '热门', '精选']"
      @tabClick="tabClick"
      v-show="controlSignal"
      ref="control2"
      class="control"
    />
    <BackTop @click.native="backtop" v-show="signal" />
  </div>
</template>

<script>
import Navbar from "components/common/NAVbar/bar";
import Control from "components/content/control.vue";
import List from "components/content/goods/List";
import Scroll from "components/common/scroll/scroll";
import BackTop from "components/content/backTop/backTop";

import { getMultiData, getProductData } from "network/home";
import { debounce } from "common/utils";

import Hswiper from "./childComponent/Hswiper.vue";
import Hrecommend from "./childComponent/Hrecommend";
import Popular from "./childComponent/Popular";

export default {
  name: "home",
  components: {
    Navbar,
    Hswiper,
    Hrecommend,
    Popular,
    Control,
    List,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      // 浏览图
      goods: {
        // 此处的名称需要跟服务器那边同步
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentGood: "pop",
      // 回到顶部
      signal: false,
      // 用来保存control组件的top值
      offsetTop: null,
      controlSignal: false,
      /* // 179集*/
      saveY: 0,
    };
  },
  computed: {
    // 可有空无，也可以直接用currentGood属性来进行判断
    showGood() {
      return this.goods[this.currentGood].list;
    },
  },
  created() {
    // 从服务器请求数据,本项目数据都是从这里
    this.getMultiData();
    this.getProductData("pop");
    this.getProductData("new");
    this.getProductData("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 10);

    // 监听listitem的图片加载
    this.$bus.$on("imgChange", () => {
      refresh();
    });
  },
  // 179集，因为没有bug所以省略,必须有keep-alive才生效
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY,500);
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY();
  },
  methods: {
    // 这个方法的用处是根据用户点击的索引来决定显示的goods的数据
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentGood = "pop";
          break;
        case 1:
          this.currentGood = "new";
          break;
        case 2:
          this.currentGood = "sell";
      }
      // 使两个组件的currentindex保持一致
      this.$refs.control2.currentIndex = index;
    },
    // 这个方法的作用是根据组件传来的值来判断backtop组件显示还是隐藏
    contentRun(num) {
      // 判断组件是否显示
      this.signal = -num > 1200;
      // 决定组件是否吸顶
      this.controlSignal = -num > this.offsetTop ? true : false;
    },
    // 这个方法是利用了better-scroll组件的scrollTo方法来进行传送
    backtop() {
      // 使用ref获取scroll组件里面的scroll属性里面的scrollTo方法
      this.$refs.scroll.scrollTo();
    },
    loadMore() {
      this.getProductData(this.currentGood);
    },
    swiperLoad() {
      this.offsetTop = this.$refs.control.$el.offsetTop;
    },

    /* 
    以下是两个网络请求相关的方法
    */
    // 请求轮播图和推荐列表的数据
    getMultiData() {
      getMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    // 请求浏览页的数据
    getProductData(type) {
      const page = this.goods[type].page + 1;
      getProductData(type, page).then((res) => {
        this.goods[type].list = [...this.goods[type].list, ...res.data.list];
        this.goods[type].page++;
        // 调用结束上拉的方法
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 44px;
}
.home-nav {
  /* 使用变量 */
  background: var(--color-tint);
  color: aliceblue;
  font-weight: bold;
  font-size: 20px;
}
.content {
  /* height: 500px; */
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  /* background: #fff; */
}
.control {
  position: relative;
}
</style>