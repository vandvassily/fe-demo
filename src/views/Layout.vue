<template>
  <div class="container">
    <Header />
    <Main />
    <SideBar />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
import Main from '@/components/Main.vue';


export default {
  name: 'Layout',
  components: {
      Header,
      SideBar,
      Main
  }
}
</script>

<style scoped lang="less">
.container {
    height: 100%;
}
</style>
