<template>
  <div class="gb-index">
    <!-- 左侧导航 -->
    <div class="gb-menu">
      <el-menu mode="vertical" default-active="activeIndex" class="el-menu-vertical-demo" router="true">
        <el-menu-item index="/dataMapGB">数据分布图</el-menu-item>
        <el-menu-item index="/mistakeGBJY">公布校验池</el-menu-item>
        <el-menu-item index="/mistakeGBDSH">公布待审核</el-menu-item>
        <el-menu-item index="/mistakeGBC">公布池异常</el-menu-item>
        <el-menu-item index="/mistakeGBJ">公布公布及</el-menu-item>
      </el-menu>
    </div>

    <!-- 右侧主内容区 -->
    <div class="gb-main">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '/dataMapGB',
      };
    }
  }
</script>

<style scoped>

  .gb-index {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
  }

  .gb-index .gb-menu {
    padding-left: 0px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
    text-align: center;
  }

  .gb-index .gb-main {
    border-left: solid 10px #E9ECF1;
    position: relative;
    width: 100%;
    padding: 25px;
    background-color: #fff;
  }
</style>
