<template>
  <div class="button-container">
    <router-link to="/helper" class="router-linkcss">AI回答</router-link>
    <router-link to="/doctor" class="router-linkcss">AI中医</router-link>
    <router-link to="/cooker" class="router-linkcss">AI厨师</router-link>
    <router-link to="/imgCreate" class="router-linkcss">AI画图</router-link>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center; /* 居中对齐按钮 */
  align-items: center; /* 垂直居中 */
  flex-wrap: wrap; /* 允许按钮换行 */
  gap: 1rem; /* 按钮之间的间距 */
  padding: 20px;
}

.router-linkcss {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background-color: #ffffff;
  border: 1px solid #0078d7;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: auto;
  height: auto;
}

.router-linkcss:hover {
  background-color: #0078d7;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 120, 215, 0.3);
}

.router-linkcss:active {
  transform: translateY(1px);
  box-shadow: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .router-linkcss {
    padding: 0.8rem 1.5rem;
    font-size: 14px;
    width: 100%;  /* 在移动端占满宽度 */
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
