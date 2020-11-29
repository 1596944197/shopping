<template>
  <div id="detail">
    <DetailNavbar></DetailNavbar>
    <Scroll class="content" ref="scroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="Goods"></DetailBaseInfo>
      <DetailShopInfo :shop="Shop"></DetailShopInfo>
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></DetailGoodsInfo>
      <DetailParamsInfo :paramInfo="paramsInfo"></DetailParamsInfo>
      <DetailCommentInfo :commentInfo='commentInfo'></DetailCommentInfo>
    </Scroll>
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

import { getGoodsDetail, Goods, Shop, GoodsParam } from "network/detail";

import Scroll from "components/common/scroll/scroll";

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
    Scroll,
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
      commentInfo:{},
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
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      console.log(data.rate.list);
      // 7.评论信息
      if(data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0]
      }
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
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