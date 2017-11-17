<template>
  <div class="gg-index">
    <!-- 左侧导航 -->
    <div class="gg-menu">
      <el-menu mode="vertical" default-active="activeIndex" class="el-menu-vertical-demo" router="true">
        <el-menu-item index="/dataMapGG">数据分布图</el-menu-item>
        <el-menu-item index="/mistakeGGJY">公告校验池</el-menu-item>
        <el-menu-item index="/mistakeGGDSH">公告待审核</el-menu-item>
        <el-menu-item index="/mistakeGGC">公告池异常</el-menu-item>
      </el-menu>
    </div>

    <!-- 右侧主内容区 -->
    <div class="gg-main">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '/dataMapGG',
      };
    }
  }
</script>

<style scoped>

  .gg-index {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
  }

  .gg-index .gg-menu {
    padding-left: 0px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
    text-align: center;

  }

  .gg-index .gg-main {
    border-left: solid 10px #E9ECF1;
    position: relative;
    width: 100%;
    padding: 25px;
    background-color: #fff;
  }

</style>
