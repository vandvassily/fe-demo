<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  componentName: 'CheckboxGroup',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    disabled: Boolean
  },
  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    change(val) {
      console.log(`group val: ${val}`);
    }
  }
};
</script>