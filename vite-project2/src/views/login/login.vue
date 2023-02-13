<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120">
    <el-form-item label="账号" prop="username">
      <el-input v-model="ruleForm.username" type="text"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="ruleForm.pwd" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginFn()">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue';
import { adminLoginApi, getAdminInfoApi } from '../../request/api'
import Cookie from 'js-cookie'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const state = reactive({
  ruleForm: {
    username: 'admin',
    pwd: '123456'
  }
})

let { ruleForm } = toRefs(state)

// 获取el-form组件对象
let ruleFormRef = ref()

// 获取项目路由对象
let router = useRouter()

// 获取当前项目vuex对象
let store = useStore()

const validatePwd = (rule: unknown, value: string | undefined, callback: (msg?: string) => void) => {
  if (!value) {
    callback('密码不能为空')
  } else {
    callback()
  }
}

// 校验规则
const rules = reactive({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  pwd: [
    { validator: validatePwd, trigger: 'blur' }
  ]
})

// 点击登录按钮触发
const loginFn = () => {
  ruleFormRef.value.validate().then(() => {
    console.log('校验通过');
    adminLoginApi({
      password: ruleForm.value.pwd,
      username: ruleForm.value.username
    }).then(res => {
      if (res.code === 200) {
        // 先存储token, localstorage, sessionstorage, cookie 可以设置过期事件
        // document.cookie 操作起来很麻烦
        // js-cookie 封装的
        Cookie.set('token', res.data.tokenHead + res.data.token, { expires: 7 })
        // 获取用户信息
        store.dispatch('getAdminInfo').then(res => {
          router.push('./homepage')
        })
        // getAdminInfoApi().then(res => {
        //   if (res.code === 200) {
        //     // 存储到vuex
        //     // res1.data.menus
        //     store.commit('updateMenus', res.data.menus)

        //     // 跳转homepage页面
        //     router.push('/homepage')
        //   }
        // })
      }
    })
    
  }).catch(() => {
    console.log('校验不通过');
    
  })
}

</script>
<style lang="less" scoped>
</style>