<template>
  <slot></slot>
  <slot name="link"></slot>
  <slot name="btn" title="哈哈" :mynum="num"></slot>
  <p>14-我是子组件</p>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
let num = ref(20)
</script>
<style lang="scss" scoped>
</style>