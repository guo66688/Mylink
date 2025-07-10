<template>
  <el-col>
      <h1>登录</h1>
      <el-col>
          <el-form label-width="auto" style="max-width: 600px">
            <el-form-item label="用户名" >
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-row>
            <el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="register">注册</el-button>
            </el-form-item>
            </el-row>
          </el-form>
      </el-col>
  
  </el-col>
</template>
<script setup>
import {useStore} from '@/stores/UseStore'
import { ref } from 'vue'
const form = ref({
  username: '',
  password: ''
})
const usestore = useStore()

const login = () => {
  usestore.login()
}
const register = () => {
  router.push('/register')
}
</script>
<style scoped>

</style>