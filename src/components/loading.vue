<template>
  <div class="loading-overlay">
    <div class="loading-spinner">
      <div class="circle-container">
        <img src="../assets/loading-image.png" alt="loading" class="pic">
      </div>
      <p>请稍等...</p>
    </div>
  </div>
</template>

<script setup>
// 如果有其他逻辑，放这里
</script>

<style scoped>
.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px; /* 控制圆圈的大小 */
  height: 100px; /* 控制圆圈的大小 */
  border-radius: 50%; /* 使容器成为圆形 */
  border: 4px solid #06c7ee; /* 圆圈的边框颜色 */
  position: relative;
  animation: rotate 2s linear infinite; /* 旋转动画 */
  background-color: white; /* 圆圈背景颜色 */
  overflow: hidden; /* 确保图片不会溢出 */
}

.pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  animation: rotate 2s linear infinite; /* 使图片旋转 */
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6); /* 给背景添加遮罩层 */
}

.loading-spinner {
  text-align: center;
  color: #06c7ee;
  position: relative;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg); /* 初始状态 */
  }
  100% {
    transform: rotate(360deg); /* 旋转一圈 */
  }
}
</style>
