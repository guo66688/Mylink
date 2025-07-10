<template>
    <div>
        {{ user.name }}
        <el-avatar :src="user.url" size="100" />
        <el-button type="primary" @click="logout">退出登录</el-button>
    </div>
</template>
<script setup>
import { useStore } from '@/stores/UseStore'
import { computed } from 'vue';
const usestore = useStore()

const user = computed(()=>{
    return usestore.getUser()
})

const logout = () => {
  usestore.loginout()
  router.push('/login')
}



</script>
<style scoped>

</style>