<template>
  <p>13-我是子组件 {{ num }}</p>
  <button @click="hdClick">按钮</button>
</template>

<script lang='ts' setup>
import { } from 'vue';
// defineProps 里面的数据，只读，不改，想用的话，重新赋值
let props = defineProps({
  num: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits<{
  // update: 固定写法，后面的变量是父组件中v-model: 后面这个
  (event: 'update:num', n: number): void
}>()

let n = props.num
const hdClick = () => {
  n++
  // emit(上面的event的值，要修改成的值)
  emit('update:num', n)
}
</script>
<style lang="scss" scoped>
</style>