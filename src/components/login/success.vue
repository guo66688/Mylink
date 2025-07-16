<template>
  <el-card class="success-card">
    <el-avatar :src="user.photo" size="100"></el-avatar>
    <h3 class="welcome-text">欢迎回来，{{ user.name }}</h3>
    <el-button type="danger" @click="logout">退出登录</el-button>
  </el-card>
</template>

<script setup>
import { useStore } from '@/stores/UseStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const usestore = useStore()
const router = useRouter()

const user = computed(() => usestore.getUser())

const logout = () => {
  usestore.loginout()
  router.push('/login')
}
</script>

<style scoped>
.success-card {
  width: 400px;
  padding: 40px;
  text-align: center;
}

.welcome-text {
  margin: 20px 0;
}
</style>
