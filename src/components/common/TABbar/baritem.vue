<template>
  <div class="item" @click="monitor">
    <slot name="item-icon" v-if="!active"></slot>
    <slot name="item-active" v-else></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    // 引入路由地址
    path:String,
    // 用于设置每一个item的颜色
    activeColor:{
      // 这里接收父组件传来的数据
      type:String,
      default:'green'
    }
  },
  computed:{
    active(){
      // $route是活跃中的路由
      //  /home > item1(/home) = true
      //  /home > item2(/cart) = false
      //  /home > item3(/category) = flase
      //  /home > item4(/profile) = false
      let flag = this.$route.path.indexOf(this.path) != -1
      return flag
    },
    activeStyle(){
      // 如果处于活跃状态就将父组件的数据赋值到style里面
      return this.active ? {color:this.activeColor} : {}
    }
  },
  methods:{
    // 改变路由的地址
    monitor(){
      this.$router.replace(this.path)
    }
  }
}
</script>


<style>
  .item {
    flex: 1;
    text-align: center;
    height: 51px;
    font-family: 宋体;
  }
  .item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
</style>