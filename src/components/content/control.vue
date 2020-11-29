<template>
  <div id="control">
    <div
      v-for="(item, index) in titles"
      class="control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
#control {
  display: flex;
  justify-content: space-around;
  line-height: 44px;
  background: #fff;
  z-index: 99;
}
.control-item {
  flex: 1;
  text-align: center;
}
.active {
  color: var(--color-tint);
}
span {
  padding: 5px 8px;
}
.active span {
  border-bottom: 3px solid;
}
</style>