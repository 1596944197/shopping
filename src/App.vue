<template>
  <div id="app">
    <!-- 内容显示区 -->
    <!-- 使来回切换的时候不销毁 -->
    <!-- 使detail.vue不保持keep，为了重新获取iid ,排除是根据name来排除的，所以需要在对应的组件那里添加name-->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <mainbar />
  </div>
</template>

<script>
import mainbar from "components/content/mainbar.vue";
export default {
  components: { mainbar },
};
</script>

<style>
@import "assets/css/base.css";
</style>