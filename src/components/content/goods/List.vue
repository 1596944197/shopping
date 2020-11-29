<template>
  <ul class="list">
    <ListItem v-for="item in goods" :item="item"> </ListItem>
  </ul>
</template>

<script>
import ListItem from "./ListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    ListItem,
  },
};
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>