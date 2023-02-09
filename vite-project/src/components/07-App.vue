<template>
  <p>{{ num }}</p>
  <button @click="num++">按钮</button>
</template>

<script lang='ts' setup>
// setup 语法糖加上之后，script之间的代码会被Vue 内部自动添加到原先的setup方法中
import { reactive, toRefs } from 'vue';

let obj = {
  num: 21
}
let objRef = reactive(obj)
let { num } = toRefs(objRef)

</script>
<style lang="scss" scoped>
</style>