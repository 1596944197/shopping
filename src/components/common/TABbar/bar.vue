<template>
  <div id="tab-bar">
    <!-- 这是底部bar栏的整体框架不包括item，用插槽分开整体和每一个item -->
    <slot></slot>
  </div>
</template>


<style>
#tab-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 5px -1px 9px 2px rgba(187, 187, 187, 0.8);
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
