<template>
	<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item><el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
/* 主内容区 */
main { display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
main .el-menu{background-color: transparent!important;}
</style>
