<template>
  <div class="Counter">
    <div class="Counter-num">{{ num }}</div>
    <button @click="increment">+1</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const num = ref(0)
    const increment = () => num.value += 1
    return {
      num,
      increment
    }
  },
})
</script>
<style lang="less" scoped>
.Counter {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
}
</style>
