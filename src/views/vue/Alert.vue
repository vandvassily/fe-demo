<template>
  <div>
    <transition
      name="fade"
      @after-enter="appearEvent"
      @after-leave="appearEvent"
    >
      <button
        v-if="firstShow"
        @click="handleOpen1"
      >打开提示1</button>
    </transition>
    <br>
    <button @click="handleOpen2">打开提示2</button>

  </div>
</template>

<script>
export default {
  name: 'AlertPage',
  components: {},
  data() {
    return {
      firstShow: false
    };
  },
  methods: {
    handleOpen1() {
      this.firstShow = false;
      this.$Alert.info({
        content: '我是提示信息 1'
      });
    },
    handleOpen2() {
      this.firstShow = true;
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3
      });
    },
    appearEvent() {
      console.log(123123);
    }
  }
};
</script>
