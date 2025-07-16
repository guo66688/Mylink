<template>
  <div id="Layout">
    <TextAI 
      placeholder="请描述你的菜品" 
      AITitle="厨师咨询" 
      StartC="C" 
      AIcontent="你是一个有经验的厨师长，请用专业厨师的角度为客户提供菜品或制作，如果客户咨询的问题和厨师无关，请你礼貌的拒绝。" 
    ></TextAI>
    
  </div>
</template>

<script setup>
import TextAI from '../components/TextAI.vue';
/*

*/
</script>

<style scoped>

.layout-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;  /* 保证至少占满视口高度 */
  max-width: 100%;    /* 防止超出宽度 */
  background-color: #f4f7fc;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;    /* 处理内容溢出 */
}


TextAI {
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: auto;  /* 允许出现滚动条 */
}

input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

input[type="text"]:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
}

.ai-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.ai-content {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
}


@media (max-width: 768px) {
  .layout-container {
    padding: 10px;
  }

  TextAI {
    width: 100%;
  }
}
 </style>