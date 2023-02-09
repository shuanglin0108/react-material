<template>
  <!-- watch的写法 -->
  <p>{{ num }}</p>
  <button @click="num++">按钮</button>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs, watch } from 'vue';
// let num = ref(20)

// watch(要监听的响应式数据，数据更新的时候执行的回调函数)
// watch(num, (newVal, oldVal) => {
//   console.log(newVal, oldVal);
// })

let obj = {
  num: 32
}

let objRet = reactive(obj)
let { num } = toRefs(objRet)
watch(num, (newVal, oldVal) => {
  console.log(newVal, oldVal);
})

</script>
<style lang="scss" scoped>
</style>