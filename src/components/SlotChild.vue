<template>
  <div>
    这是SlotChild
    <slot>这是默认slot</slot>
  </div>
</template>

<script>
export default {
  name: 'SlotChild',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
