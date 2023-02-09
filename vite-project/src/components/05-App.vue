<template>
  <p>{{ objRef.num }}</p>
  <button @click="objRef.num++">按钮1</button>
  <button @click="oBtn">按钮2</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    // ref 用来实现基础数据类型的响应式
    // reactive 用来实现复杂数据类型的响应式
    let obj = {
      num: 30
    }

    let objRef = reactive(obj)
    console.log("objRef:", objRef);
    console.log('onjRef:1', objRef.num);

    let obj2 = {
      num: 10
    }
    let objRef2 = ref(obj2)
    console.log('onjRef2:', objRef2);
    console.log('onjRef2:value', objRef2.value.num);
    

    let oBtn = () => {
      objRef.num++
      console.log(objRef.num);
    }
    
    return {
      objRef,
      objRef2,
      oBtn
    };
  },
});
</script>
<style lang="scss" scoped>
</style>