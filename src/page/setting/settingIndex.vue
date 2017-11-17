<template>
  <div class="setting-index">
    <!-- 左侧导航 -->
    <div class="setting-menu">
      <el-menu mode="vertical" default-active="activeIndex" class="el-menu-vertical-demo" router="true">
        <el-menu-item index="/theme">主题设置</el-menu-item>
      </el-menu>
    </div>

    <!-- 右侧主内容区 -->
    <div class="setting-main">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '/theme',
      };
    }
  }
</script>

<style scoped>

  .setting-index {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
  }

  .setting-index .setting-menu {
    padding-left: 0px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
    text-align: center;
  }

  .setting-index .setting-main {
    border-left: solid 10px #E9ECF1;
    position: relative;
    width: 100%;
    padding: 25px;
    background-color: #fff;
  }

</style>
