<template>
  <header class="nav-wrapper">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      class="nav-menu"
    >
      <el-menu-item index="1">🏠 Home</el-menu-item>
      <el-menu-item index="2">📋 列表</el-menu-item>
      <el-menu-item index="5">➕ 添加联系人</el-menu-item>
      <el-menu-item index="6" v-if="checkRole('/report')">📊 报表</el-menu-item>
      <el-menu-item index="7" v-if="checkRole('/report2')">📈 报表2</el-menu-item>
      
      <el-sub-menu index="8" class="right-align">
        <template #title>
          👤 我的
        </template>
        <el-menu-item index="3">登录</el-menu-item>
        <el-menu-item index="4">注册</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </header>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/UseStore'

const store = useStore()
const router = useRouter()
const roleAry = inject('roleAry')

const activeIndex = ref('1')

function checkRole(path) {
  const roles = roleAry[path]
  if (!roles) return true
  if (!store.isLogin) return false
  return roles.includes(store.user.role)
}

const handleSelect = (key: string) => {
  switch (key) {
    case '1': router.push('/'); break
    case '2': router.push('/list'); break
    case '3': router.push('/login'); break
    case '4': router.push('/register'); break
    case '5': router.push('/add'); break
    case '6': router.push('/report'); break
    case '7': router.push('/report2'); break
  }
}
</script>

<style scoped>
.nav-wrapper {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item {
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
}

.el-menu--horizontal > .el-menu-item:hover {
  background-color: #f5f7fa;
  color: #409eff;
}

.right-align {
  margin-left: auto;
}

.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
  font-weight: 500;
  font-size: 16px;
}
</style>
