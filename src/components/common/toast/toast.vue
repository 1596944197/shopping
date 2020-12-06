<template>
  <div class="toast" v-show="isShow">
    <h2 v-text="message"></h2>
  </div>
</template>

<script>
export default {
  /* props:{
    message:{
      type:String
    },
    show:{
      type:Boolean,
      default:false
    }
  }, */
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, duration = 2000) {
      this.message = message;
      this.isShow = true;
      let time = setTimeout(() => {
        clearTimeout(time);
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  color: aliceblue;
}
</style>