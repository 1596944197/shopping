<template>
  <div class="home">
    <navbar class="home-nav"><div slot="center">购物节</div></navbar>
    <!-- 绑定数据，将banner的数据传递过去 -->
    <Hswiper :banner='banner'></Hswiper>
    <Hrecommend :recommend='recommend'></Hrecommend>
    <popular></popular>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>
import navbar from "components/common/NAVbar/bar";



import { getMultiData, getProductData } from "network/home";
import Hswiper from './childComponent/Hswiper.vue';
import Hrecommend from './childComponent/Hrecommend'
import popular from './childComponent/Popular'


export default {
  components: {
    navbar,
    Hswiper,
    Hrecommend,
    popular,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    getMultiData().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
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
</style>