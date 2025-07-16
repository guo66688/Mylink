<template>
  <el-row class="title-row" align="middle">
    <el-col :span="6" class="title-left">
      <slot name="left"></slot>
    </el-col>
    <el-col :span="12" class="title-center">
      <h2>{{ title }}</h2>
    </el-col>
    <el-col :span="6" class="title-right">
      <slot name="right"></slot>
    </el-col>
  </el-row>
  <el-divider />
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

<style scoped>
.title-row {
  margin: 20px 0;
}

.title-left,
.title-right {
  display: flex;
  align-items: center;
}

.title-center {
  text-align: center;
}

h2 {
  margin: 0;
}
</style>
