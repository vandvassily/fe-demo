<template>
  <div>
    <p>这是SlotChild</p>
    <slot v-bind:user="slotSon" :sonInfo="sonInfo">这是默认slot</slot>
    <p>{{ info.msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'SlotChild',
  props: {
    info: Object
  },
  data() {
    return {
      slotSon: {
        name: 'slotSon'
      },
      sonInfo: {
        msg: '来自于sonSlot的消息'
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
