<template>
  <div class="footer">
    <div class="footer-container">Footer区域</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer {
  background-color: cadetblue;
  height: 100px;
}

.footer-container {
    width: 1200px;
    margin: 0 auto;
}
</style>
