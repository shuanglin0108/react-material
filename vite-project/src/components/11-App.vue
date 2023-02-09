<template>
  <!-- 父组件 :num="num" -->
  <Child :num="num" @fn="changeNum"></Child>
</template>

<script lang='ts' setup>
import Child from './11-AppChild.vue'
import { ref } from 'vue';
let num = ref(20)
const changeNum = () => {
  num.value++
}

</script>
<style lang="scss" scoped>
</style>