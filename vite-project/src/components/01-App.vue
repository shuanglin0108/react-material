<template>
  <div>
    <p>这是第一个组件</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from 'vue';
export default defineComponent({
  setup() {
    // 什么时候执行？
    console.log('执行了setup');
    onBeforeMount(() => {
      console.log('执行了onBeforeMount');
    })
    onMounted(() => {
      console.log('执行了onMounted');
    })
  }
})
</script>

<style>

</style>