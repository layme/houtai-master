<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="block">
            <el-date-picker v-model="publishDate" placeholder="请选择公布日期" type="date" clearable="true"
                            @change="getDate"></el-date-picker>
          </div>
        </el-col>
        <el-col :span="8">
          <el-input v-model="noticeGenerationDate" placeholder="请输入操作日期（多个时间就用空格隔开）" aria-required="true"/>
        </el-col>
        <el-col :span="2" :offset="0">
          <el-button type="primary" icon="search" @click="validatorFormForSearch">查询</el-button>
        </el-col>
      </el-row>
    </el-form>

    <div v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(f, f, f, 0.6)"
         style="margin-top: 40px">
      <el-row :gutter="30">
        <el-col :span="5">
          <div class="grid-content bg-primary">{{ allCount }}<br><span>应发总数</span></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-success">{{ successCount }}<br><span>成功数量</span></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-error">{{ failureCount }}<br><span>失败数量</span></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-warning">{{ loseCount }}<br /><span>失效数量</span><br/>
            <el-button style="position: relative; top: -23px; text-decoration: underline" type="text"
                       v-if="this.loseCount > 0" @click="validatorFormForXLS">点击此处导出数据</el-button></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-info"><i :class="isEquals"></i><br><span>是否相等</span></div>
        </el-col>
        <el-col :span="3">
          <div style="padding-top: 40px">
            <el-button v-if="this.isEquals === 'el-icon-close'" id="getErrorBtn" size="large" type="" icon="search"
                       @click="validatorFormForUnequals">
              查找差异
            </el-button>
          </div>
        </el-col>
      </el-row>

      <div id="repairDiv" v-if="this.isRepair > 0 && this.failureCount > 0">
        <el-tooltip content="一键处理" placement="bottom" effect="light">
          <button :class="btnClass" @click="validatorFormForRepair"/>
        </el-tooltip>
      </div>

      <el-dialog title="处理结果" v-model="dialogVisible" size="tiny" top="30%">
        <p>出版社接收到：{{ inBookConcern }} 件， 处理结果：{{ inRepairResult }}</p>
        <p>出版社未接收到： {{ outBookConcern }} 件， 处理结果：{{ outRepairResult }}</p>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="成功公布(及)且失效案件" v-model="dialogTableVisible" size="tiny" top="30%">
        <el-table :data="successAndLoseList" style="width: 100%">
          <el-table-column property="requestID" label="申请号" ></el-table-column>
        </el-table>
      </el-dialog>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
    data() {
      return {
        loading: '',

        publishDate: '',
        noticeGenerationDate: '',
        newPublishDate: '',

        allCount: '',
        successCount: '',
        failureCount: '',
        loseCount: '',

        isEquals: '',
        btnClass: 'repairBtn',
        isRepair: 0,

        inBookConcern: '',
        outBookConcern: '',
        inRepairResult: '',
        outRepairResult: '',

        dialogVisible: false,
        dialogTableVisible: false,
        successAndLoseList: []
      }
    },
    methods: {

      // 查询公布和公布及数据的表单验证
      validatorFormForSearch() {
        if (this.publishDate === '' || this.noticeGenerationDate === '') {
          this.$message({
            message: '警告，查询条件不可为空！',
            type: 'warning'
          });
        } else {
          this.getPublishNoticeData();
        }
      },

      // 一键处理表单验证
      validatorFormForRepair() {
        if (this.publishDate === '' || this.noticeGenerationDate === '') {
          this.$message({
            message: '警告，查询条件不可为空！',
            type: 'warning'
          });
        } else {
          this.repairPublishNotice();
        }
      },

      // 导出xls文件表单验证
      validatorFormForXLS() {
        if (this.publishDate === '') {
          this.$message({
            message: '警告，公布日期不可为空！',
            type: 'warning'
          });
        } else {
          this.getPublishNoticeLoseXls();
        }
      },

      // 查询差异案件表单验证
      validatorFormForUnequals() {
        if (this.publishDate === '' || this.noticeGenerationDate === '') {
          this.$message({
            message: '警告，查询条件不可为空！',
            type: 'warning'
          });
        } else {
          this.getPublishNoticeSuccessAndLoseList();
        }
      },

      getPublishNoticeData() {
        this.loading = true;
        axios.get('http://localhost:8088/api/getPublishNoticeData', {
          params: {
            publishDate: this.newPublishDate,
            noticeGenerationDate: this.noticeGenerationDate
          }
        })
          .then(response => {
            console.log(response);
            this.allCount = response.data.allCount;
            this.successCount = response.data.successCount;
            this.failureCount = response.data.failureCount;
            this.loseCount = response.data.loseCount;
            this.isRight();
            this.isRepair = 1;
            this.loading = false;
          })
          .catch(error => {
            this.loading = false;
            this.errorNotice("连接超时，请检查网络连接");
          });
      },

      // 错误提示
      errorNotice(val) {
        this.$notify.error({
          title: '错误',
          message: val,
          duration: 0
        });
      },

      // 获取日期
      getDate(val) {
        this.newPublishDate = val.replace(/-/g, '');
      },

      // 自动调整是否相等的图标
      isRight() {
        var sum = this.successCount + this.failureCount + this.loseCount;
        if (this.allCount === sum) {
          this.isEquals = 'el-icon-check';
        } else {
          this.isEquals = 'el-icon-close';
        }
      },

      // 一键处理公布和公布及
      repairPublishNotice() {
        this.btnClass = 'repairing';
        axios.get('http://localhost:8088/api/oneKeyRepairPublishNotice', {
          params: {
            publishDate: this.newPublishDate,
            noticeGenerationDate: this.noticeGenerationDate
          }
        })
          .then(response => {
            console.log(response);
            this.inBookConcern = response.data.inBookConcern;
            this.outBookConcern = response.data.outBookConcern;
            this.inRepairResult = response.data.inRepairResult;
            this.outRepairResult = response.data.outRepairResult;
            this.isRepair = 0;
            this.dialogVisible = true;
          })
          .catch(error => {
            this.btnClass = 'repairBtn';
            this.errorNotice("处理失败");
          });
      },

      // 导出文件
      getPublishNoticeLoseXls() {
        this.loading = true;
        window.location.href = "http://localhost:8088/api/getPublishNoticeLoseXls?publishDate=" + this.newPublishDate;
        this.loading = false;
      },

      // 查询公布公布及某期发送成功且失效的案件列表
      getPublishNoticeSuccessAndLoseList() {
        this.loading = true;
        axios.get('http://localhost:8088/api/getPublishNoticeSuccessAndLoseList', {
          params: {
            publishDate: this.newPublishDate,
            noticeGenerationDate: this.noticeGenerationDate
          }
        })
          .then(response => {
            console.log(response);
            this.successAndLoseList = response.data;
            this.loading = false;
            this.dialogTableVisible = true;
          })
          .catch(error => {
            this.loading = false;
            this.errorNotice("连接超时，请检查网络连接");
          });
      }

    }
  }
</script>

<style scoped="true">

  .bg-primary {
    background-color: #20A0FF;
  }

  .bg-success {
    background-color: #13CE66;
  }

  .bg-info {
    background-color: #58B7FF;
  }

  .bg-warning {
    background-color: #F7BA2A;
  }

  .bg-error {
    background-color: #FF4949;
  }

  .grid-content {
    height: 100px;
    width: 100%;
    border-radius: 8px;
    text-align: center;
    color: #ffffff;
    font-size: 36px;
    padding-top: 45px;
  }

  .row-bg {
    padding: 10px 0;
  }

  span {
    position: relative;
    margin-top: 1080px;
    font-size: 20px;
  }

  #getErrorBtn {
    height: 80px;
    border-radius: 400px;
  }

  #repairDiv {
    text-align: center;
    margin-top: 60px;
    margin-right: 20%;
    min-width: 800px;
  }

  .repairBtn {
    background: url("../../assets/repairBtn.jpg") no-repeat;
    width: 255px;
    height: 255px;
    border: none;
    outline: none;
  }

  .repairing {
    background: url("../../assets/repairing.gif") no-repeat;
    width: 255px;
    height: 255px;
    border: none;
    outline: none;
  }


</style>
