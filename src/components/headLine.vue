<template>
  <div class="content">
    <span class="T">头条新闻</span>
  </div>
</template>

<script setup>
</script>

<style scoped>
.content {
  width: 400px;
  height: 50px;
  background-color: #4789f4;                 /* 蓝色 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;                        /* 圆角 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, .15);  /* 阴影 */
}

.T {
  color: #ffffff;
  font-size: 24px;                           /* 更大字号 */
  font-weight: 600;                          /* 更粗 */
}
</style>
