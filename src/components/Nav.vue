<template>
  <header class="nav-wrapper">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      class="nav-menu"
    >
      <!-- 左侧主菜单区 -->
      <el-menu-item index="1">🏠 Home</el-menu-item>
      <el-menu-item index="2">📋 列表</el-menu-item>
      <el-menu-item index="5">➕ 添加联系人</el-menu-item>
      <el-menu-item index="6" v-if="checkRole('/report')">📊 报表</el-menu-item>
      <el-menu-item index="7" v-if="checkRole('/report2')">📈 报表2</el-menu-item>
      <el-sub-menu index="10">
        <template #title>
          🤖 AI
        </template>
        <el-menu-item index="11">AI 助手</el-menu-item>
        <el-menu-item index="12">AI 医生</el-menu-item>
        <el-menu-item index="13">AI 厨师</el-menu-item>
        <el-menu-item index="14">AI 图片生成</el-menu-item>
      </el-sub-menu>

      <!-- 右侧菜单区 -->
      <div class="flex-grow"></div> <!-- 占位自动撑开 -->
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
import { useStore } from '../stores/UseStore'

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

// 新增 AI 路由的跳转
const handleSelect = (key: string) => {
  switch (key) {
    case '1': router.push('/home'); break
    case '2': router.push('/list'); break
    case '3': router.push('/login'); break
    case '4': router.push('/register'); break
    case '5': router.push('/add'); break
    case '6': router.push('/report'); break
    case '7': router.push('/report2'); break
    // AI 菜单
    case '11': router.push('/helper'); break
    case '12': router.push('/doctor'); break
    case '13': router.push('/cooker'); break
    case '14': router.push('/imgCreate'); break
  }
}
</script>

<style scoped>
.nav-wrapper {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.nav-menu {
  display: flex !important;
  align-items: center;
  padding: 0 40px;
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-sub-menu {
  font-weight: 500;
  font-size: 16px;
  flex: 1 1 0%;
  text-align: center;
}
.flex-grow {
  flex-grow: 1;
}
.right-align {
  margin-left: auto;
}
</style>