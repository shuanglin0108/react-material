<template>
  <!-- v-model的传值 -->
  <vChild v-model:num="num"></vChild>
</template>

<script lang='ts' setup>
import vChild from './13-AppChild.vue'
import { ref } from 'vue';
const num = ref(20)
</script>
<style lang="scss" scoped>
</style>