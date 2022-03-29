<template>
  <div class="app-container">
    <div style="width: 100%;margin-top:30px;" class="header">
           <div>
              <div class="titleavatar">
      <el-avatar  :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div class="titlename"><span>王力群</span></div>
      <div class="titledisplay">
         <i class="el-icon-edit"></i>
         <span>前端</span>
         <i class="el-icon-user"></i>
         <span>管理员</span>
         <i class="el-icon-location-outline"></i>
         <span>北京</span>
      </div>
     
    </div>
     </div>
       <div style="width: 100%;margin-top:30px;" class="body">
         <div class="actionintext">  <h4>站内通知</h4></div>
       
        <el-empty description="描述文字"></el-empty>
     </div>

  </div>
</template>


<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>

<style lang="scss" scoped >
  .body {
    padding: 20px;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    height: 204px;
    color: var(--gray-10);
    background: #F1F3F4;
    background-size: cover;
    border-radius: 4px;
    :deep(.arco-avatar-trigger-icon-button) {
      color: rgb(var(--arcoblue-6));
      :deep(.arco-icon) {
        vertical-align: -1px;
      }
    }
    .user-msg {
      .arco-icon {
        color: rgb(var(--gray-10));
      }
      .arco-typography {
        margin-left: 6px;
      }
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 204px;
    color: var(--gray-10);
    background: url(//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/41c6b125cc2e27021bf7fcc9a9b1897c.svg~tplv-49unhts6dw-image.image)
      no-repeat;
    background-size: cover;
    border-radius: 4px;
    :deep(.arco-avatar-trigger-icon-button) {
      color: rgb(var(--arcoblue-6));
      :deep(.arco-icon) {
        vertical-align: -1px;
      }
    }
    .user-msg {
      .arco-icon {
        color: rgb(var(--gray-10));
      }
      .arco-typography {
        margin-left: 6px;
      }
    }
  }
  .titlename{
    display: flex;
    justify-content:center;
  }
  .titledisplay{
     display: flex;
    justify-content:center;
    padding: 8px;
  }
  .titleavatar{
     display: flex;
    justify-content:center;
    padding:8px;
  }
  .actionintext{
    display: flex;
  }
</style>