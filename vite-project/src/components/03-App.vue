<template>
  <!-- ref方法（操作复杂类型数据） -->
  <p>{{ objRef.num }}</p>
  <button @click="objRef.num++">按钮1</button>
  <button @click="hdClick">按钮2</button>
</template>

<script lang='ts'>
import { defineComponent, ref, Ref } from 'vue';
export default defineComponent({
  setup() {
    // let obj:Ref<number> = ref(20)
    let obj = {
      num: 30
    }
    let objRef = ref(obj)
    console.log(objRef.value, 'objRef');

    let hdClick = () => {
      objRef.value.num += 5
    }
    
    return {
      objRef,
      hdClick
    };
  },
});
</script>
<style lang="scss" scoped>
</style>