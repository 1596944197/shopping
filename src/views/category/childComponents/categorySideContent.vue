<template>
  <div class="sidecontent">
    <CategorySideContentItem
      v-for="(item, index) in subCategoryList"
      :key="index"
      :subCategoryItem="item"
    />
  </div>
</template>

<script>
import CategorySideContentItem from "./categorySideContentItem";
export default {
  name: "CategorySideContent",
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    CategorySideContentItem,
  },
};
</script>
<style scoped>
.sidecontent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
</style>