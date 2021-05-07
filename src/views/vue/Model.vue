<template>
  <div>
    <checkbox-group
      v-model="group"
      @change="printGroup"
      @input="printInput"
    >
      <checkbox label="选项1">
        <label>多选1</label>
      </checkbox>
      <checkbox label="选项2">
        <label>多选2</label>
      </checkbox>
    </checkbox-group>
    <br>
    <checkbox
      v-model="testModel"
      disabled
    >
      <label>单选1</label>
    </checkbox>
    <button @click="changeDefaultChecked">改变单选1的状态</button>
  </div>

</template>

<script>
import Checkbox from '@/components/Checkbox';
import CheckboxGroup from '@/components/CheckboxGroup';
export default {
  name: 'ModelPage',
  components: {
    Checkbox,
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
