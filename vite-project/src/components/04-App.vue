<!-- 通过 ref() 获取到元素 -->
<template>
  <p ref="op">这是p标签</p>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref, nextTick } from 'vue';
export default defineComponent({
  setup() {
    let op = ref() // 获取绑定了ref属性，且值为op的标签
    console.log('setup', op.value); // undefined

    // onMounted(() => {
    //   console.log('onMounted', op.value); // 挂载完成以后，才能获取到元素 <p>这是p标签</p>
    // })

    nextTick(() => {
      console.log('nextTick', op.value);  // 在下一次dom更新的时候执行（只会更新 1 次） <p>这是p标签</p> 
    })
    
    return {
      op
    };
  },
});
</script>
<style lang="scss" scoped>
</style>