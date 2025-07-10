<template>
    <el-row> 
      <el-col :span="6"><slot name="left"></slot></el-col>
        <el-col :span="12">
          <h2>{{ title }}</h2>
        </el-col>
        <el-col :span="6">
          <slot name="right"></slot>
        </el-col>
    </el-row>
    <el-divider></el-divider>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    title: String
})




</script>
<style scoped>
h2 {
    text-align: center;
}

</style>