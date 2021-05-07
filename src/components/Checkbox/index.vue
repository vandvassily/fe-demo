<template>
  <label>
    <span>
      <input
        type="checkbox"
        :checked="checked"
        :disabled="disabled"
        @change="change"
      />
    </span>
    <slot>单选框</slot>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    disabled: Boolean
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'CheckboxGroup') {
          parent = parent.$parent;
        } else {
          return true;
        }
      }
      return false;
    }
  },
  mounted() {
    console.log(' ' + this.disabled);
  },
  methods: {
    change(e) {
      this.$emit('change', e.target.checked);
      if (this.isGroup) {
        this.setParentValue(e.target.checked);
      }
    },
    setParentValue(val) {
      const parent = this.$parent;
      const value = parent.value.slice();

      if (val) {
        /* istanbul ignore else */
        value.push(this.label);
        parent.$emit('input', value);
      } else {
        const index = value.indexOf(this.label);

        /* istanbul ignore else */
        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  },
  watch: {}
};
</script>