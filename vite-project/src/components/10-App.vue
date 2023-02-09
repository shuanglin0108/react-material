<template>
  <!-- 计算属性 -->
  <p>{{ dbnum }}</p>
  <button @click="num++">按钮</button>

  <p>{{ dbnum2 }}</p>
  <button @click="objRet.num++">按钮</button>
</template>

<script lang='ts' setup>
import { ref, computed, reactive } from 'vue';
let num = ref(20)

// 返回值就是计算属性的值，接收返回值之后，可以之间在上面展示
let dbnum = computed(() => {
  return num.value * 2
})

let obj = {
  num: 30
}

let objRet = reactive(obj)
let dbnum2 = computed(() => {
  return objRet.num * 5
})

// let checkAll = computed({
//   get() {

//   },
//   set() {
    
//   }
// })


</script>
<style lang="scss" scoped>
</style>