<template>
  <div  id="recommends">
    <div v-for='item in recommend'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div v-text="item.title"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  #recommends{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px;
    border-bottom: 8px solid #eee;
  }
  #recommends > div {
    flex: 1;
    text-align: center;
  }
  img {
    width: 80%;
    margin-bottom: 8px;
  }
</style>