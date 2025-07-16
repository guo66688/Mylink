<template>
  <el-card class="table-card">
    <el-table :data="filteredTable" border stripe>
      <el-table-column label="用户名" prop="name" width="180"></el-table-column>
      <el-table-column label="手机号" prop="phone" width="200"></el-table-column>
      <el-table-column label="时间" prop="date"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" size="small" @click="updateLink(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="deleteLink(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="filteredTable.length"
        :page-size="5"
      />
    </div>
  </el-card>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { listStore } from '@/stores/listStore'

const props = defineProps({
  keyword: {
    type: String,
    default: ''
  }
})

const store = listStore()

const table = computed(() => store.getList())

const filteredTable = computed(() => {
  if (!props.keyword) return table.value
  return table.value.filter(item => item.name.includes(props.keyword))
})

const updateLink = (row) => {
  alert(`你正在修改 ${row.name} 的信息`)
}

const deleteLink = (row) => {
  alert(`你确定要删除 ${row.name} 吗？`)
}

onMounted(async () => {
  await store.setList()
})
</script>

<style scoped>
.table-card {
  padding: 20px;
}

.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
