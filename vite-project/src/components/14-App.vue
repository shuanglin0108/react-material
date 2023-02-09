<template>
  <!-- 匿名插槽和具名插槽，插槽作用域 -->
  <Child>
    <!-- 匿名插槽 -->
    <a href="#">link</a>

    <!-- 具名插槽 -->
    <!-- template v-slot:link -->
    <template v-slot:link>
      <a href="#">标签</a>
    </template>

    <!-- template v-slot:btn -->
    <!-- <template v-slot:btn>
      <button>按钮</button>
    </template> -->
    
    <!-- 插槽作用域：在父组件中的子组件标签内部，获取子组件的数据 -->
    <template #btn="scope">
      <!-- scope 这个对象是自定义的，但是一般都叫scope，scope专门收集所对应的子组件内部的slot标签身上的标签属性，做为自己的属性（除了name属性） -->
      <button>按钮222、 {{ scope.title }}、{{ scope.mynum }}</button>
    </template>


  </Child>
</template>

<script lang='ts' setup>
import Child from './14-AppChild.vue'
import { } from 'vue';
</script>
<style lang="scss" scoped>
</style>