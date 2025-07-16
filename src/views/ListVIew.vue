<template>
  <title1 title="用户列表">
    <template #left>
      <el-button type="primary" @click="addUser">新增用户</el-button>
    </template>
    <template #right>
      <el-input v-model="searchKeyword" placeholder="搜索用户名" size="small" clearable></el-input>
    </template>
  </title1>

  <list :keyword="searchKeyword"></list>
</template>

<script setup>
import { ref } from 'vue'
import list from '@/components/list/list.vue'
import title1 from '@/components/title.vue'

const searchKeyword = ref('')
const addUser = () => {
  console.log('点击新增用户')
}
</script>

<style scoped>
/* 可选容器样式 */
</style>
