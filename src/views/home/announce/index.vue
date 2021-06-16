<template>
  <div>
    <announce-table :list-loading="listLoading" :list="getSubList(0,15)" :title="'1.工单在途情况'" />

    <announce-table :list-loading="listLoading" :list="getSubList(15,23)" :title="'2.今日派单情况'" />

    <announce-table :list-loading="listLoading" :list="getSubList(23,35)" :title="'3.今日竣工情况'" />

    <announce-table :list-loading="listLoading" :list="getSubList(35,42)" :title="'4.10086工单在途情况'" />

    <announce-table :list-loading="listLoading" :list="getSubList(42,46)" :title="'5.今日客户画像工单情况'" />

  </div>
</template>

<script>
import { getList } from '@/api/home/announce'
import announceTable from './announce-table'

export default {
  components: { announceTable },

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
