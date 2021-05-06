<template>
  <div>
    <checkbox-group v-model="group" @change="printGroup" @input="printInput">
      <base-checkbox label="备选项1">
        <label>单选1</label>
      </base-checkbox>
      <base-checkbox label="备选项2">
        <label>单选2</label>
      </base-checkbox>
    </checkbox-group>
    <button @click="changeDefaultChecked">改变checked状态</button>
  </div>

</template>

<script>
import BaseCheckbox from '@/components/BaseCheckbox';
import CheckboxGroup from '@/components/CheckboxGroup';
export default {
  name: 'ModelPage',
  components: {
    BaseCheckbox,
    CheckboxGroup
  },
  data() {
    return {
      testModel: true,
      group: []
    };
  },
  methods: {
    printResult(checked) {
      console.log('this.testModel: ' + this.testModel);
      console.log(checked);
    },
    printGroup(data) {
      console.log(data);
    },
    printInput(data) {
      console.log('input ' + data);
    },
    changeDefaultChecked() {
      this.testModel = !this.testModel;
    }
  },
  computed: {},
  watch: {}
};
</script>
