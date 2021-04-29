<template>
  <div>
    <SlotChild :info="info">
      <template v-slot="{ user, sonInfo }">
        <p>来自于父级插入的内容</p>
        <p>{{ parent.name }}</p>
        <p>{{ user.name }}</p>
        <p>{{ sonInfo.msg }}</p>
      </template>
    </SlotChild>
  </div>
</template>

<script>
import SlotChild from './SlotChild.vue';

export default {
  name: 'SlotPage',
  components: {
    SlotChild
  },
  data() {
    return {
      parent: {
        name: 'slotParent'
      },
      info: {
        msg: '来自于Parent的props'
      }
    };
  }
};
</script>
