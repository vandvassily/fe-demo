<template>
  <div>
    <button @click="showToast">click toast</button>
  </div>
</template>

<script>
export default {
  name: 'ExtendPage',
  components: {},
  data() {
    return {};
  },
  methods: {
    showToast() {
      this.$Toast.showToast();
    }
  },
  computed: {},
  watch: {}
};
</script>
