<template>
    <el-table :data="table">
        <el-table-column label="用户名" prop="name"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="时间" prop="Date"></el-table-column>
        <el-table-column label="操作" prop="action">
            <template #default="scpe">
                <el-button type="primary" size="mini" @click="updateLink(scpe.row)">编辑</el-button>
                <el-button type="danger" size="mini">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- {{ table.name }} -->
</template>
<script setup>
import {ref,computed, onMounted, watch} from 'vue'
import {listStore} from '@/stores/listStore'
const store = listStore()
// const data = ref([
//     {
//         name:'',
//         phone:'',
//         Date:''
//     }
// ])
const table =   computed(()=>{
    return store.getList()
})
const updateLink = (row)=>{
    alert('你正在修改'+row.name+'的信息')
}
onMounted(async ()=>{
    await store.setList()
    // table.value = store.list
    // console.log(store.getList());
    // table.value = store.list
    // console.log(table.value);
    
    // console.log();
    
    
})

</script>
<style scoped>

</style>