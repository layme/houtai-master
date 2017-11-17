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


    <div v-loading="loading" element-loading-text="拼命加载中">

      <el-table :data="ggZlxZhu" border show-summary style="width: 100%; margin-top: 20px;">
        <el-table-column label="著录项主表">
          <el-table-column prop="shenqingh" label="申请号"></el-table-column>
          <el-table-column prop="zhuanlimc" label="专利名称" width="350"></el-table-column>
          <el-table-column prop="shenqingr" label="申请日"></el-table-column>
          <el-table-column prop="anjianywzt" label="案件状态"></el-table-column>
          <el-table-column prop="zhufenlh" label="分类号"></el-table-column>
          <el-table-column prop="guaqibj" label="挂起标记" width="100"></el-table-column>
          <el-table-column prop="zantingbj" label="暂停标记" width="100"></el-table-column>
          <el-table-column prop="zhongzhibj" label="终止标记" width="100"></el-table-column>
          <el-table-column prop="suodingbj" label="锁定标记" width="100"></el-table-column>
        </el-table-column>
      </el-table>

      <el-row :gutter="60" style="margin-top: 50px">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>

      <el-row :gutter="60" style="margin-top: 50px">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>

      <el-row :gutter="60" style="margin-top: 50px">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        shenqingh: '',
        ggZlxZhu: [],
        faBzggGgajztjk: [],
        faBzggCbjyb: [],
        faBzggCbjbyLs: [],
        faBzggDggajb: [],
        faBzggCwajclb: [],
        faBzggZsglb: [],
        faBzggBfzsb: [],
        tBdList: [],
        tPubList: []
      }
    },
    methods: {
      onSubmit() {
        this.loading = true;
        axios.get('http://localhost:8088/api/getAllGGDataMap', {params: {shenqingh: this.shenqingh}},
          {timeout: 15000})
          .then(response => {
            console.log(response);
            this.ggZlxZhu = response.data.ggZlxZhu;
            this.faBzggGgajztjk = response.data.faBzggGgajztjk;
            this.faBzggCbjyb = response.data.faBzggCbjyb;
            this.faBzggCbjbyLs = response.data.faBzggCbjbyLs;
            this.faBzggDggajb = response.data.faBzggDggajb;
            this.faBzggCwajclb = response.data.faBzggCwajclb;
            this.faBzggZsglb = response.data.faBzggZsglb;
            this.faBzggBfzsb = response.data.faBzggBfzsb;
            this.tBdList = response.data.tBdList;
            this.tPubList = response.data.tPubList;
            this.loading = false;
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
  .cardTop {
    margin-top: 10px;
  }

  .headerHeight {
    height: 15px;
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
