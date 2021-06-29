<template>
  <div class="App">
    <ul class="App-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/counter">Counter</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {},
})
</script>
<style lang="less" scoped>
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  &-links {
    display: flex;
     & > * {
       margin: 0 20px;
       list-style-type: none;
     }
  }
}
</style>
