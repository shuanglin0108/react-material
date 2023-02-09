<template>
  <p>{{ arr[0] }}</p>
  <p>{{ arr }}</p>
  <button @click="hdClick">按钮</button>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';
let arr = reactive([10, 20, 30])
const hdClick = () => {
  arr[0] = 1000
}

// Object.defineProperty   Vue2
// Proxy   Vue3
</script>
<style lang="scss" scoped>
</style>