<template>
  <el-card class="form-card">
    <h2 class="form-title">添加联系人</h2>
    <el-divider></el-divider>
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formData.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="formData.type" placeholder="请选择分类">
          <el-option label="家庭" value="家庭"></el-option>
          <el-option label="公司" value="公司"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="form-footer">
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  type: ''
})

const submitForm = () => {
  axios.post('http://127.0.0.1:4523/m1/6731413-6442637-default/add', formData.value)
    .then(response => {
      alert("提交成功")
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
}
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
}

.form-title {
  text-align: center;
}

.form-footer {
  text-align: right;
}
</style>
