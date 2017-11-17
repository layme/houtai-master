<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input v-model="shenqingh" placeholder="请输入申请号" autofocus="true" maxlength="13" minlength="13"/>
        </el-col>
        <el-col :span="6" :offset="0">
          <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        :data="tableData"
        style="width: 100%; margin-top: 20px;">
        <el-table-column
          prop="date"
          label="表名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="申请号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="公告状态">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        shenqingh: ''
      }
    },
    methods: {
      onSubmit() {
        console.log(this.shenqingh);
        this.loading = true;
        axios.get('http://localhost:8088/api/getAllInfo',{params:{shenqingh: this.shenqingh}},
          {timeout: 15000})
          .then(response => {

          })
          .catch(error => {
            this.loading = false;
            this.errorNotice();
          });
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

<style scoped="true">

</style>
