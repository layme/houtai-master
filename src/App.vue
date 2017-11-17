<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                   :router="true">
            <el-menu-item style="font-size: 18px" index="/monitorData">数据监控</el-menu-item>
            <el-menu-item style="font-size: 18px" index="/publishIndex">发明公布</el-menu-item>
            <el-menu-item style="font-size: 18px" index="/announcementIndex">专利公告</el-menu-item>
            <el-menu-item style="font-size: 18px" index="/toolIndex">相关工具</el-menu-item>
            <el-menu-item style="font-size: 18px" index="/settingIndex">系统设置</el-menu-item>
            <div id="logo">YYH EOMS</div>
          </el-menu>

        </el-col>
      </el-row>
    </header>


    <main class="main">
        <router-view class="router-demo" />
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '/monitorData',
      };
    }
  }
</script>

<style>

  body {
    margin: 0;
  }

  #app {
    min-width: 1200px;
    height: 100%;
    margin: 0 auto;
    font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
  }

  #logo {
    display: block;
    padding-left: 1000px;
    padding-top: 7px;
    height: 55px;
    font-size: 36px;
    font-family: Arial;
    font-style: italic;
    color: #fff;
  }

  /* 头部导航 */
  header {
    z-index: 1000;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: solid 1px #3091F2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
  }

  header .el-menu-demo {
    padding-left: 300px !important;
  }

  /* 主内容区 */
  .main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    border: solid 40px #E9ECF1;
    background-color: #FCFCFC;
  }

  .router-demo {
    width: 100%;
    margin:0 auto;
  }

</style>
