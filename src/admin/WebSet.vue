<template>
  <div class="">
    <el-tabs tab-position="left" style="height: 800px">
      <el-tab-pane label="网站配置" style="width: 420px">
        <div class="sitpage">
          <h4>网站标题</h4>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <h4>网站LOGO</h4>
         <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

          <h4>关键字</h4>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <h4>描述</h4>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <el-row class="sitpagesitmap">
          <el-button type="danger" round>取消</el-button>
          <el-button type="primary" round>保存</el-button>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="资源配置">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  data() {
    return {

    };
  }
};
</script>
<style scoped>
.sitpagesitmap {
  margin-top: 20px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>