<template>
  <div class="page-container">
    <el-card class="block">
      <ZMD />
    </el-card>

    <el-card class="block university-section">
      <div class="university-info">
        <div class="text">
          <h2>XX大学简介</h2>
          <p>
            嘉应大学是一所拥有悠久历史的综合性高等学府，校园风景优美，学科门类齐全，
            致力于培养德智体美劳全面发展的高素质人才。
          </p>
          <el-button type="primary" @click="learnMore">了解更多</el-button>
        </div>
        <div class="image">
          <img src="https://source.unsplash.com/600x400/?university,campus" alt="校园图" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import ZMD from '../components/ZMD.vue'

const learnMore = () => {
  window.open('https://www.jyu.edu.cn/sy.htm', '_blank')
}
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.block {
  margin-bottom: 30px;
  padding: 20px;
}

.university-section {
  display: flex;
  flex-direction: column;
}

.university-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.university-info .text {
  flex: 1;
  padding-right: 40px;
}

.university-info .text h2 {
  margin-bottom: 20px;
}

.university-info .text p {
  margin-bottom: 20px;
  color: #555;
  line-height: 1.6;
}

.university-info .image {
  flex: 1;
  min-width: 300px;
  text-align: right;
}

.university-info .image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
