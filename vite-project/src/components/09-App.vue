<template>
  <!-- watch的其他写法 -->
  <p>{{ objRet.num }}</p>
  <button @click="objRet.num++">按钮</button>
</template>

<script lang='ts' setup>
import { reactive, watch, watchEffect } from 'vue';

let obj = {
  num: 32,
  num2: 11
}

let objRet = reactive(obj)

// watch(() => objRet.num, (newVal, oldVal) => {
//   console.log(newVal, oldVal, '--');
// })

// []
// watch([() => objRet.num, () => objRet.num2], (newVal, oldVal) => {
//   console.log(newVal, oldVal, '--');
// })

// 在页面刷新的时候就立即监听
watchEffect(() => {
  // 凡是写在这里的数据，只有发生变化，都会触发这里的代码执行
  console.log(objRet.num, 'watchEffect');  
})

</script>
<style lang="scss" scoped>
</style>