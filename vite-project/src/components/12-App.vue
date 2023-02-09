<template>
  <input type="checkbox" v-model="checkAll"> 全选/全不选
  <!-- {{ list }} -->
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <input type="checkbox" v-model="checkList[index]">{{ item }}
    </li>
  </ul>
</template>

<script lang='ts' setup>
import { computed } from '@vue/reactivity';
import { reactive, toRefs, ref } from 'vue';
// let state = reactive({
//   list: [10, 20, 30, 40],
//   num: 20,
//   a: 30
// })
// const { list, num, a } = toRefs(state)


let data = reactive<DataTypes>({
  list: [10, 20, 30, 40],
  // checkList: [true, false, false, false]
  checkList: []
  // 一个数据，如果在试图上有使用到，就需要写道toRefs解构里面去，如果指示在js环境临时用，视图不需要用到，那么就不需要参与解构
})
const { list, checkList } = toRefs(data)

let checkAll = computed({
  get() {
    // checkAll 受 checkList这个数组的影响
    // checkList 包含有一个false， 就应该返回false
    return !data.checkList.includes(false)
  },
  set(newVal: boolean) {
    console.log(newVal, 'checkAll被修改的时候执行set的代码');
    // 把 checkList 的所有的数值都改成 newVal
    data.checkList = data.checkList.map(() => newVal)
  }
})

</script>
<style lang="scss" scoped>
</style>