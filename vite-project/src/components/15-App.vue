<template>
  <!-- 插槽作用域案例 -->

  <!-- Teleport 能够把里面的标签传送到指定标签的最后的位置 -->
  <Teleport to=".app">
    <p>这是一个p标签</p>
  </Teleport>
  
  <Table :arr="state.arr">
    <!-- let { index } = scope 从scope 中解构出来 -->

    <!-- <template #btns="scope">
      <button @click="hdClick(scope.index)">编辑</button>
    </template> -->

    <template #btns="{index}">
      <!-- 需求：点击这个按钮，获取这一行的数据 -->
      <button @click="hdClick(index)">编辑</button>
    </template>

  </Table>
  <Table :arr="state.arr">
    <template #btns>
      <button>编辑</button>
      <button>删除</button>
    </template>
  </Table>
</template>

<script lang='ts' setup>
import Table from '@/components/15-AppChild.vue'
import { reactive } from 'vue';

let state = reactive({
  arr: [{
    name: '小明',
    age: 18
  },{
    name: '小红',
    age: 19
  },{
    name: '小黄',
    age: 20
  }]
})

const hdClick = (index:number) => {
  console.log(state.arr[index]);
}

// 变量增强--在common.d.ts 中 添加 declare var globalVar: string
console.log(globalVar, globalObj, 'globalVar-----------globalObj');

fn('')

$("#app")

$.ajax()

</script>
<style lang="scss" scoped>
</style>