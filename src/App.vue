<template>
  <div id="app">
    <router-view></router-view>
    <mainbar/>
  </div>
</template>

<script>
import mainbar from 'components/content/mainbar.vue'
export default {
  components: { mainbar },
}
</script>

<style>
  @import 'assets/css/base.css';
</style>