<template>
  <el-dialog v-model="visible" title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button type="primary" @click="visible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, watch } from 'vue';

const props = defineProps<{
  visible: {
    type: boolean,
    default: true
  }
}>()

watch(() => props.visible, (newVal, oldVal) => {
  console.log(newVal, oldVal, 'newVal, oldVal===');
})

const state = reactive({
  visible: true,
  form: {
    name: ''
  },
  formLabelWidth: '120px'
})

const { visible, form, formLabelWidth } = toRefs(state)

</script>
<style lang="scss" scoped>
</style>