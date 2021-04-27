<template>
    <div>
        <SlotChild>
            第二个slot
        </SlotChild>
    </div>
</template>

<script>
import SlotChild from '../../components/SlotChild.vue'
// @ is an alias to /src

export default {
  name: 'SlotPage',
  components: {
      SlotChild
  }
}
</script>
