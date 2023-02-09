<template>
  <!-- toRefs() 的作用 -->
  <p>{{ num }}</p>
  <button @click="hdClick">按钮</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    let obj = {
      num: 31
    }

    // toRefs 的作用：在解构reactive() 得到的对象的时候，把他们解构成响应式数据。
    // 解构处理的数据依旧需要通过 .value的形式来操作   
    let {num} = toRefs(reactive(obj))
    
    const hdClick = () => {
      num.value++
      console.log(num.value);      
    }
    
    return {
      num,
      hdClick
    };
  },
});
</script>
<style lang="scss" scoped>
</style>