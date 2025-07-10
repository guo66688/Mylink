<template>
  <div v-if="!isLogin">
    <Loginmenu></Loginmenu>
  </div>
  <div v-else>
    <success></success>
  </div>
</template>
<script setup>
import Loginmenu from '@/components/login/loginmenu.vue'
import success from '@/components/login/success.vue';
import {useStore} from '@/stores/UseStore';
import {computed, ref} from 'vue'
const isLogin = computed(()=>{
  return useStore().isLogin
})
</script>
<style scoped>

</style>