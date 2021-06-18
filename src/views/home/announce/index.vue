<template>
  <div>
    <div style="display:flex">
      <upload-button :title="'订单明细上传'" :action="'order/upload/detail'" />
      <upload-button />
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
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
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
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
        console.log(response)
      })
    }
  }
}
</script>
