<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" >Home</el-menu-item>
    <el-menu-item index="2">列表</el-menu-item>
    <el-menu-item index="5">添加联系人</el-menu-item>
    <el-menu-item index="6" v-if="checkRole('/report')">报表</el-menu-item>
    <el-menu-item index="7" v-if="checkRole('/report2')">报表2</el-menu-item>
    <el-sub-menu>
      <template #title>
        我的
      </template>
    <el-menu-item index="3">登录</el-menu-item>
    <el-menu-item index="4">注册</el-menu-item>
    </el-sub-menu>
    
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch, inject } from 'vue'                                                                           
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/UseStore'

const store = useStore()
// const { user } = store.state
const router = useRouter()
const roleAry = inject('roleAry')

const activeIndex = ref('3')
const activeIndex2 = ref('1')

function checkRole(path){
  console.log(path)
  let roles = roleAry[path]
  console.log(roles);

  
  if(!roles)
  return true
  if(!store.isLogin){
    return false
  }
  return roles.includes(store.user.role)
}
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key)
  if(key === '1'){
    router.push('/')
  }else if(key === '2'){
    router.push('/list')
  }else if(key === '3'){
    router.push('/login')
  }else if(key === '4'){
    router.push('/register')
  }else if(key === '5'){
    router.push('/add')
  }else if(key === '6'){
    router.push('/report')
  }else if(key === '7'){
    router.push('/report2')
  }
}
</script>
