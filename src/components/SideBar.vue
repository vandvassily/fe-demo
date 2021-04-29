<template>
  <aside class="sidebar">
    <div class="footer-container">sideBar</div>
    <template v-for="item in routes">
      <ul v-if="item.children" :key="item.name">
        <h3>{{ item.name }}</h3>
        <li
          v-for="link in item.children"
          :key="link.name"
          :class="$route.path.indexOf(item.path + '/' + link.path) > -1 ? 'active' : ''"
        >
          <router-link :to="item.path + '/' + link.path">
            {{ link.meta.title }}
          </router-link>
        </li>
      </ul>
    </template>
  </aside>
</template>

<script>
import { routes } from '../router';
export default {
  name: 'SideBar',
  props: {},
  data() {
    return {
      routes
    };
  },
  created() {
    console.log(this.$router);
    console.log(this.$router.getRoutes());
  },
  methods: {},
  filters: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sidebar {
  font-size: 16px;
  background-color: #fff;
  width: 20rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid #eaecef;
  overflow-y: auto;
  text-align: left;
  padding-left: 30px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    line-height: 1.7;

    a {
      padding-left: 2rem;
      text-decoration: none;
      color: #304455;
    }
    .active {
      a {
        font-weight: 600;
        color: #42b983;
      }
    }
  }
}
</style>
