<template>
  <Nav></Nav>
  <router-view />
</template>
<script setup>
import Nav from '@/components/Nav.vue'
import { onMounted } from 'vue';
</script>
<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: #f9f9f9;
}
</style>