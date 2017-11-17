<template>
  <div class="allActive" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(f, f, f, 0.6)">
    <el-row class="head">
      <el-col :span="24" style="padding:20px 0;background: #33CCCC;">
        <el-col :span="8">
          {{ publishCheckPoolException }}<br>
          <span>公布校验池</span>
        </el-col>
        <el-col :span="8">
          {{ publishWaitAudit }}<br>
          <span>公布待审核 (改版5天内/外)</span>
        </el-col>
        <el-col :span="8" style="border: none;">
          {{ publishPoolException }}<br>
          <span>公布池异常</span>
        </el-col>
      </el-col>
    </el-row>

    <el-row class="head">
      <el-col :span="24" style="padding:20px 0;background: #33CCCC;">
        <el-col :span="8">
          {{ announcementCheckPoolException }}<br>
          <span>公告校验池</span>
        </el-col>
        <el-col :span="8">
          {{ announcementWaitAudit }}<br>
          <span>公告待审核</span>
        </el-col>
        <el-col :span="8" style="border: none;">
          {{ announcementPoolException }}<br>
          <span>公告池异常</span>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'allActive',
    data() {
      return {
        loading: true,
        publishCheckPoolException: 0,
        publishWaitAudit: 0,
        publishPoolException: 0,
        announcementCheckPoolException: 0,
        announcementWaitAudit: 0,
        announcementPoolException: 0
      }
    },
    created() {
      this.getDataByAxios();
    },
    mounted() {
    },
    methods: {
      getDataByAxios() {
        axios.get('http://localhost:8088/api/getMonitorData')
          .then(response => {
            this.publishCheckPoolException = response.data.publishCheckPoolException,
              this.publishWaitAudit = response.data.publishWaitAudit,
              this.publishPoolException = response.data.publishPoolException,
              this.announcementCheckPoolException = response.data.announcementCheckPoolException,
              this.announcementWaitAudit = response.data.announcementWaitAudit,
              this.announcementPoolException = response.data.announcementPoolException,
              this.loading = false
          })
          .catch(error => {
            this.loading = false;
            this.errorNotice();
          })
      },
      errorNotice() {
        this.$notify.error({
          title: '错误',
          message: '连接超时，请检查网络连接',
          duration: 0
        });
      }
    }
  }
</script>

<style>
  .allActive > .head > .el-col > .el-col {
    height: 240px;
    padding: 30px 0;
    border-right: solid 3px #fff;
  }

  .allActive .head {
    color: #fff;
    font-size: 80px;
    margin: 50px;
    text-align: center;
  }

  .allActive .head span {
    font-size: 26px;
  }

</style>
