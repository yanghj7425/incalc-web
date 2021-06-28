<template>
  <div>
    <el-upload
      class="upload-demo button-margin"
      :action="url"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="1"
      :data="{sheet:sheet}"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">{{ title }}</el-button>
      <!-- {{ sheet }} -->
      <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
    </el-upload>
  </div>
</template>
<script>
export default {
  props: {
    action: {
      type: String, required: true
    },
    title: {
      type: String, required: true, default: '文件上传'
    },
    sheet: {
      type: Number, required: true
    }
  },

  data() {
    return {
      props: this.props
    }
  },
  computed: {
    url: function() {
      return process.env.VUE_APP_BASE_API + this.action
    }
  },
  methods: {

    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  &-left {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.button-margin{
     padding-left:20px;
   }
</style>
