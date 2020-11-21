<template>
  <div id="tab-bar">
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
  box-shadow: 5px -1px 9px 2px rgba(187, 187, 187, 0.8);
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
