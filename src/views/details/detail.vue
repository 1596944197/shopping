<template>
  <div id="detail">
    <DetailNavbar @changeTop="changeTop" ref="nav" />
    <Scroll class="content" ref="scroll" @scroll="place" :probeType="3">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="Goods"></DetailBaseInfo>
      <DetailShopInfo :shop="Shop"></DetailShopInfo>
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></DetailGoodsInfo>
      <DetailParamsInfo :paramInfo="paramsInfo" ref="params"></DetailParamsInfo>
      <DetailCommentInfo
        :commentInfo="commentInfo"
        ref="comment"
      ></DetailCommentInfo>
      <GoodsList :goods="recommends" ref="recommend" />
    </Scroll>
    <DetailBottomBar @addToCart="addCart"></DetailBottomBar>
    <BackTop @click.native="backtop" v-show="signal" />
  </div>
</template>

<script>
import DetailNavbar from "./childcomponents/detailNavbar";
import DetailSwiper from "./childcomponents/detailSwiper";
import DetailBaseInfo from "./childcomponents/detailBaseInfo";
import DetailShopInfo from "./childcomponents/detailShopInfo";
import DetailCommentInfo from "./childcomponents/detailCommentInfo";
import DetailGoodsInfo from "./childcomponents/detailGoodsInfo";
import DetailParamsInfo from "./childcomponents/detailParamInfo";
import DetailBottomBar from "./childcomponents/detailBottomBar";

import {
  getGoodsDetail,
  Goods,
  Shop,
  GoodsParams,
  getGoodsRecommend,
} from "network/detail";

import Scroll from "components/common/scroll/scroll";

import GoodsList from "components/content/goods/List";
import BackTop from "components/content/backTop/backTop";

export default {
  // 用于keep-alive的排除
  name: "detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailCommentInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      iid: null,
      // 保存的是商品详细页的轮播图图片
      topImages: [],
      Goods: {},
      Shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      // 商品推荐数据
      recommends: [],
      // 用来决定点击标题后定位到哪里
      titlePlaceY: [],
      // 用来给detailnavbar传索引
      currentIndex: null,
      // 205集因为没出现所以省略了
      // 用于判断backtop组件是否
      signal: false,
    };
  },
  created() {
    // 将地址栏的字符串赋值给iid
    this.iid = this.$route.params.iid;

    // 根据iid获取商品详细数据
    getGoodsDetail(this.iid).then((res) => {
      // 1.中转站，捕获所需要的所以数据detail
      const data = res.result;
      // 2.轮播图数据，这里不能用push添加数组方法，因为网络请求是多次的
      this.topImages = data.itemInfo.topImages;
      // 3.获取商品数据对象
      this.Goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 4.店铺信息数据
      this.Shop = new Shop(data.shopInfo);

      // 5.店铺商品信息
      this.detailInfo = data.detailInfo;

      // 6.商品参数信息
      this.paramsInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 7.评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 获取商品推荐数据
    getGoodsRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      // 将四个值push进去
      this.titlePlaceY = [];
      this.titlePlaceY.push(0);
      this.titlePlaceY.push(this.$refs.params.$el.offsetTop);
      this.titlePlaceY.push(this.$refs.comment.$el.offsetTop);
      this.titlePlaceY.push(this.$refs.recommend.$el.offsetTop);
      // hack做法必备条件
      this.titlePlaceY.push(Number.MAX_VALUE);
    },
    changeTop(index) {
      this.$refs.scroll.scrollTo(0, -this.titlePlaceY[index]);
    },
    place(y) {
      // 利用hack做法，
      // titlePlaceY[0,2000,3000,4000,很大的值],因为最后一个值是无意义的所以少遍历一次
      for (let i = 0; i < this.titlePlaceY.length - 1; i++) {
        if (
          this.currentIndex != i &&
          -y > this.titlePlaceY[i] &&
          -y < this.titlePlaceY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 判断backtop组件是否显示
      this.signal = -y > 1200;
    },
    backtop() {
      // 使用ref获取scroll组件里面的scroll属性里面的scrollTo方法
      this.$refs.scroll.scrollTo();
    },
    // 购物车方法
    addCart() {
      // 获取购物车展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.Goods.title;
      product.desc = this.Goods.desc;
      product.price = this.Goods.realPrice;
      product.iid = this.iid;

      // 将商品添加到购物车
      this.$store.dispatch('addCart',product)
    },
  },
};
</script>


<style scoped>
#detail {
  background: #fff;
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
/* 185集，省略了部分样式 */
</style>