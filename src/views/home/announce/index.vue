<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" :label="getToday()" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row[getToday()] }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="保山" width="95">
        <template slot-scope="scope">
          <span>{{ scope.row.保山 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="隆阳区" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.隆阳区 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="昌宁县" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.昌宁县 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="腾冲县" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.腾冲县 }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="施甸县" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.施甸县 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="龙陵县" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.龙陵县 }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/home/announce'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: false

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    getToday() {
      const date = new Date()
      const year = date.getFullYear() // 年
      const month = date.getMonth() + 1 // 月
      const day = date.getDate() // 日

      return year + '-' + month + '-' + day
    },
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
        console.log(response)
      })
    }
  }
}
</script>
