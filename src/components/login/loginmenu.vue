<template>
  <el-card class="login-card">
    <h2 class="title">欢迎登录</h2>
    <el-form label-width="auto">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <div class="btn-group">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="success" @click="register">注册</el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script setup>
import { useStore } from '@/stores/UseStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const usestore = useStore()
const router = useRouter()

const form = ref({
  username: '',
  password: ''
})

const login = () => {
  usestore.login(form.value)
}

const register = () => {
  router.push('/register')
}
</script>

<style scoped>
.login-card {
  width: 400px;
  padding: 40px;
  text-align: center;
}

.title {
  margin-bottom: 20px;
}

.btn-group {
  display: flex;
  justify-content: space-between;
}
</style>
