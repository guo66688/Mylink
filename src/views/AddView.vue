<template>
    <h2>添加联系人</h2>
    <el-divider></el-divider>
    <div> 
       <el-form ref="form">
            <el-form-item label="姓名">
                <el-input placeholder="请输入姓名"v-model="formData.name" ></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input placeholder="请输入手机号" v-model="formData.phone"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-select v-model="formData.type" placeholder="请选择分类">
                    <el-option value="家庭"></el-option>
                    <el-option value="公司"></el-option>
                    <el-option value="其他"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
       </el-form>
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
// import { ElForm, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus'
const formData = ref({
    name: '',
    phone: '',
    type: ''
})
// const formRef = ref(null)
const submitForm = () => {
    // alert("提交成功")
    axios.post('http://127.0.0.1:4523/m1/6731413-6442637-default/add', formData.value)
    .then(response => {
        alert("提交成功")
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
}
</script>
<style scoped>

</style>