<template>
  <div class="app-container">
    <el-divider content-position="left">{{ title }}</el-divider>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" :label="getToday()" width="135">
        <template slot-scope="scope">
          <span>{{ scope.row[getToday()] }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="保山" width="95">
        <template slot-scope="scope">
          <span>{{ filterUndifinedData(scope.row.保山) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="隆阳区" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ filterUndifinedData(scope.row.隆阳区) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="昌宁县" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ filterUndifinedData(scope.row.昌宁县) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="腾冲县" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ filterUndifinedData(scope.row.腾冲县) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="施甸县" width="200">
        <template slot-scope="scope">
          <span>{{ filterUndifinedData(scope.row.施甸县) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="龙陵县" width="110" align="center">
        <template slot-scope="scope">
          {{ filterUndifinedData(scope.row.龙陵县) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    listLoading: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true

    }
  },
  data: function() {
    return this.props
  },
  methods: {
    getToday() {
      // const date = new Date()
      // var year = date.getFullYear()
      // var month = date.getMonth() + 1
      // var day = date.getDate()
      // return year + '-' + month + '-' + day
      return '2021-6-20'
    },

    filterUndifinedData(data) {
      return data || 0
    }
  }
}
</script>
