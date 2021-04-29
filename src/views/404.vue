<template>
  <div>
    <p>{{ errorMsg }}</p>
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'page404',
  data() {
    return {
      errorMsg: '404啦'
    };
  }
};
</script>
