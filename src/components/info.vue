<template>
  <div class="Layout">
    提问次数: {{ use.quecount }}   消耗token: {{ use.tokencount }}  图片生成: {{ use.imgcount }}
  </div>
</template>

<script setup>
import { useInfoStore } from '../store/infoStore';
const use = useInfoStore();
</script>

<style scoped>
.Layout {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 使容器占满整个视口高度 */
  font-size: 18px;
  color: #333;
  background-color: #f4f7fc; /* 背景颜色 */
  border-radius: 12px; /* 圆角效果 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  padding: 20px;
  text-align: center; /* 使文本居中 */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* 如果需要更多的样式优化，可以调整字体和背景色等 */
</style>
