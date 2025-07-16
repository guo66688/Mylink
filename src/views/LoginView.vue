<template>
  <div class="container">
    <Loginmenu v-if="!isLogin" />
    <success v-else />
  </div>
</template>

<script setup>
import Loginmenu from '@/components/login/loginmenu.vue'
import success from '@/components/login/success.vue'
import { useStore } from '@/stores/UseStore'
import { computed } from 'vue'

const isLogin = computed(() => useStore().isLogin)
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
