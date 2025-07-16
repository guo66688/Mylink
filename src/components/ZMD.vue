<template>
  <div class="carousel-block">
    <el-carousel height="200px" trigger="click" indicator-position="outside" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="carousel-item">
          <h3>{{ item }}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.carousel-block {
  max-width: 800px;
  margin: 40px auto;
  border-radius: 8px;
  overflow: hidden;
}

.el-carousel {
  border-radius: 8px;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}

.el-carousel__item:nth-child(2n) .carousel-item {
  background: linear-gradient(135deg, #409eff, #66b1ff);
}

.el-carousel__item:nth-child(2n + 1) .carousel-item {
  background: linear-gradient(135deg, #67c23a, #85ce61);
}
</style>
