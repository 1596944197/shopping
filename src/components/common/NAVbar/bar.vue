<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }
  .left,.right{
    width: 60px;
  }
  .center {
    /* 设置该值防止将左右两边挤开 */
    flex: 1;
  }
</style>