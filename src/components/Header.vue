<template>
    <!-- 页脚区域 -->
  <header class="navbar">
      <div class="header-container">Header区域</div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.navbar {
    position: relative;
    width: 100%;
    height: 3.6rem;
    background-color: aqua;
    text-align: left;
}

.header-container {
    width: 1200px;
    margin: 0 auto;
}
</style>
