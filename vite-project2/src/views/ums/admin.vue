<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="180" />
      <el-table-column prop="username" label="账号" width="180" />
      <el-table-column prop="nickName" label="姓名" width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="createTime" label="添加时间" width="180">
        <template v-slot:default="scope">{{ formateDate(scope.row.createTime) }}</template>
      </el-table-column>
      <el-table-column prop="loginTime" label="最后登录" width="180">
        <template v-slot:default="scope">{{ formateDate(scope.row.loginTime) }}</template>
      </el-table-column>
      <el-table-column prop="status" label="是否启用" width="180">
        <template v-slot:default="scope">
          <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default>
          <el-button type="text">分配角色</el-button>
          <el-button type="text">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <EditAdmin :visible="visible" />
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue';
import { getAdminLists } from '../../request/api'
import EditAdmin from './components/EditAdmin.vue';

const state = reactive<{
  tableData: {}[],
  visible: boolean
}>({
  tableData: [],
  visible: true
})

const { tableData, visible } = toRefs(state)

getAdminLists({
  keyword: '',
  pageSize: 10,
  pageNum: 1
}).then(res => {
  console.log(res);
  if (res.code === 200) {
    tableData.value = res.data.list
  }  
})

// 格式化时间
const formateDate = (time: string | undefined) => {
  if (!time) return
  const date = new Date(time)
  let year = date.getFullYear()
  let month = addZero(date.getMonth() + 1)
  let day = addZero(date.getDate())
  let hours = addZero(date.getHours())
  let min = addZero(date.getMinutes())
  let sec = addZero(date.getSeconds())
  return `${year}-${month}-${day}-${hours}-${min}-${sec}`
}

// 添加0
const addZero = (num: number) => {
  return num > 9 ? num : '0' + num
}
</script>
<style lang="scss" scoped>
</style>