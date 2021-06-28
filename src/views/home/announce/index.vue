<template>
  <div>
    <div style="display:flex">
      <upload-button :title="'订单信息'" :action="'order/upload/detail'" :sheet="0" />
      <upload-button :title="'10086'" :action="'order/upload/10086'" :sheet="0" />
      <upload-button :title="'回捞池'" :action="'order/upload/pool'" :sheet="0" />
      <upload-button :title="'压力值'" :action="'/order/upload/pressure'" :sheet="0" />
      <upload-button :title="'画像订单'" :action="'/order/upload/pic'" :sheet="0" />
      <el-button size="small" style="margin-left: 20px" type="primary" :disabled="isDisabled" @click="downloadFile()"> 通告文件下载</el-button>

    </div>
    <div>

      <announce-table :list-loading="listLoading" :list="getSubList(0,16)" :title="'1.工单在途情况'" />

      <announce-table :list-loading="listLoading" :list="getSubList(16,24)" :title="'2.今日派单情况'" />

      <announce-table :list-loading="listLoading" :list="getSubList(24,36)" :title="'3.今日竣工情况'" />

      <announce-table :list-loading="listLoading" :list="getSubList(36,43)" :title="'4.10086工单在途情况'" />

      <announce-table :list-loading="listLoading" :list="getSubList(43,47)" :title="'5.今日客户画像工单情况'" />

    </div>
  </div>

</template>

<script>
import { getList } from '@/api/home/announce'
import announceTable from './announce-table'
import uploadButton from '@/components/upload/upload-button'
import { downloadFile } from '@/utils/download'

export default {
  components: { announceTable, uploadButton },

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
      list: [],
      isDisabled: false,
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    downloadFile() {
      this.isDisabled = true
      var url = 'announce/export'
      downloadFile(url)
    },

    /**
     * 获取子列表
     */
    getSubList(start, end) {
      if (end > this.list.length) {
        return []
      }
      var _list = this.list.slice(start, end)
      console.log(_list)
      return _list
    },

    /**
     * 服务器获取数据
     */
    fetchData() {
      this.listLoading = true

      getList({ date: '2021-06-20 23:38:30' }).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
