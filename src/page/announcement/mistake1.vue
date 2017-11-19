<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input v-model="shenqingh" placeholder="请输入申请号" autofocus="true" maxlength="13" minlength="13"/>
        </el-col>
        <el-col :span="6" :offset="0">
          <el-button type="primary" icon="search" @click="validateFormForSelect">查询</el-button>
        </el-col>
      </el-row>
    </el-form>


    <div v-loading="loading" element-loading-text="拼命加载中">

      <el-table :data="ggZlxZhu" border style="width: 100%; margin-top: 20px;">
        <el-table-column label="著录项主表">
          <el-table-column prop="shenqingh" label="申请号"></el-table-column>
          <el-table-column prop="zhuanlimc" label="专利名称" width="350"></el-table-column>
          <el-table-column prop="shenqingr" label="申请日" width="100"></el-table-column>
          <el-table-column prop="anjianywzt" label="案件状态" width="100"></el-table-column>
          <el-table-column prop="zhufenlh" label="分类号"></el-table-column>
          <el-table-column prop="guaqibj" label="挂起" width="70"></el-table-column>
          <el-table-column prop="zantingbj" label="暂停" width="70"></el-table-column>
          <el-table-column prop="zhongzhibj" label="终止" width="70"></el-table-column>
          <el-table-column prop="suodingbj" label="锁定" width="70"></el-table-column>
        </el-table-column>
      </el-table>

      <el-popover
        ref="popover0"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="faBzggGgajztjk" border>
          <el-table-column width="100" property="gonggaozt" label="公告状态"></el-table-column>
          <el-table-column width="100" property="gonggaor" label="公告日"></el-table-column>
          <el-table-column width="200" property="jiaoyanwcbj" label="校验完成标记"></el-table-column>
        </el-table>
      </el-popover>

      <el-popover
        ref="popover1"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="faBzggCbjyb" border>
          <el-table-column width="100" property="gonggaozt" label="公告状态"></el-table-column>
          <el-table-column width="200" property="fenleiwcbj" label="分类完成标记"></el-table-column>
          <el-table-column width="100" property="jiaoduijl" label="校对结论"></el-table-column>
        </el-table>
      </el-popover>

      <el-popover
        ref="popover2"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="faBzggCbjbyLs" border>
          <el-table-column width="100" property="gonggaozt" label="公告状态"></el-table-column>
          <el-table-column width="200" property="fenleiwcbj" label="分类完成标记"></el-table-column>
          <el-table-column width="100" property="jiaoduijl" label="校对结论"></el-table-column>
        </el-table>
      </el-popover>

      <el-row :gutter="100" style="margin-top: 50px">
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover0 :disabled="btn0">公告案件状态监控表</el-button></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover1 :disabled="btn1">出版检验表</el-button></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover2 :disabled="btn2">出版校验历史表</el-button></div>
        </el-col>
      </el-row>

      <el-popover
        ref="popover3"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="faBzggDggajb" border>
          <el-table-column width="200" property="gonggaozt" label="公告状态"></el-table-column>
          <el-table-column width="100" property="weiyongwjxx" label="未用文件"></el-table-column>
          <el-table-column width="100" property="weiyongfyxx" label="未用费用"></el-table-column>
        </el-table>
      </el-popover>

      <el-popover
        ref="popover4"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="faBzggCwajclb" border>
          <el-table-column width="100" property="cuowuzl" label="错误种类"></el-table-column>
          <el-table-column width="200" property="cuowumx" label="错误描述"></el-table-column>
          <el-table-column width="100" property="renlingr" label="认领人"></el-table-column>
        </el-table>
      </el-popover>

      <el-popover
        ref="popover5"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="faBzggZsglb" border>
          <el-table-column width="100" property="gonggaozt" label="公告状态"></el-table-column>
          <el-table-column width="100" property="gonggaor" label="公告日"></el-table-column>
          <el-table-column width="100" property="zhengshuzt" label="证书状态"></el-table-column>
          <el-table-column width="100" property="shoujianrxm" label="姓名"></el-table-column>
          <el-table-column width="100" property="shoujianrdz" label="地址"></el-table-column>
          <el-table-column width="100" property="shoujianryzbm" label="邮编"></el-table-column>
        </el-table>
      </el-popover>

      <el-row :gutter="100" style="margin-top: 50px">
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover3 :disabled="btn3">待公告案件表</el-button></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover4 :disabled="btn4">错误案件处理表</el-button></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover5 :disabled="btn5">证书管理表</el-button></div>
        </el-col>
      </el-row>

      <el-popover
        ref="popover6"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="faBzggBfzsb" border>
          <el-table-column width="150" property="juanqih" label="卷期号"></el-table-column>
          <el-table-column width="150" property="gonggaor" label="公告日"></el-table-column>
          <el-table-column width="100" property="zhengshuzt" label="证书状态"></el-table-column>
        </el-table>
      </el-popover>

      <el-popover
        ref="popover7"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="tBdList" border>
          <el-table-column width="80" property="pubtype" label="类型"></el-table-column>
          <el-table-column width="100" property="pflag" label="操作标记"></el-table-column>
          <el-table-column width="100" property="bdresult" label="校验结果"></el-table-column>
          <el-table-column width="90" property="zlxmgetresult" label="著录项"></el-table-column>
          <el-table-column width="90" property="gbdgetresult" label="公报袋"></el-table-column>
        </el-table>
      </el-popover>

      <el-popover
        ref="popover8"
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table :data="tPubList" border>
          <el-table-column width="200" property="pubtype" label="公告类型"></el-table-column>
          <el-table-column width="200" property="pubdate" label="公告日期"></el-table-column>
        </el-table>
      </el-popover>

      <el-row :gutter="100" style="margin-top: 50px">
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover6 :disabled="btn6">颁发证书表</el-button></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover7 :disabled="btn7">办登校验表</el-button></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"><el-button type="text" v-popover:popover8 :disabled="btn8">出版社公告表</el-button></div>
        </el-col>
      </el-row>

      <div id="repairDiv">
        <el-tooltip content="一键修改" placement="bottom" effect="light">
          <button :class="btnClass" @click="validateFormForFix"/>
        </el-tooltip>
      </div>
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
        tPubList: [],

        btnClass: 'repairBtn',

        btn0: true,
        btn1: true,
        btn2: true,
        btn3: true,
        btn4: true,
        btn5: true,
        btn6: true,
        btn7: true,
        btn8: true
      }
    },
    methods: {
      validateFormForSelect() {
        if(this.shenqingh === '') {
          this.$message({
            message: '警告，申请号不可为空！',
            type: 'warning'
          });
        } else {
          this.onSubmit();
        }
      },

      validateFormForFix() {
        if(this.shenqingh === '') {
          this.$message({
            message: '警告，申请号不可为空！',
            type: 'warning'
          });
        } else {

        }
      },

      onSubmit() {
        this.loading = true;
        axios.get('http://localhost:8088/api/getAllGGDataMap', {params: {shenqingh: this.shenqingh}})
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
            this.settingBtn();
            this.loading = false;
          })
          .catch(error => {
            this.loading = false;
            this.errorNotice("连接超时，请检查网络连接");
          });
      },

      oneKeyFix() {
        axios.get('http://localhost:8088/api/getAllGGDataMap', {params: {shenqingh: this.shenqingh}})
          .then(response => {

          })
          .catch(error => {
            this.errorNotice("修改失败");
          });
      },

      errorNotice(val) {
        this.$notify.error({
          title: '错误',
          message: val,
          duration: 0
        });
      },

      settingBtn() {
        if(this.faBzggGgajztjk !== '') {
          this.btn0 = false;
        }
        if(this.faBzggCbjyb !== '') {
          this.btn1 = false;
        }
        if(this.faBzggCbjbyLs !== '') {
          this.btn2 = false;
        }
        if(this.faBzggDggajb !== '') {
          this.btn3 = false;
        }
        if(this.faBzggCwajclb !== '') {
          this.btn4 = false;
        }
        if(this.faBzggZsglb !== '') {
          this.btn5 = false;
        }
        if(this.faBzggBfzsb !== '') {
          this.btn6 = false;
        }
        if(this.tBdList !== '') {
          this.btn7 = false;
        }
        if(this.tPubList !== '') {
          this.btn8 = false;
        }
      }
    }
  }
</script>

<style scoped="true">

  .bg-purple {
    background: #20A0FF;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
  }

  .el-button {
    color: #ffffff;
  }

  #repairDiv {
    text-align: center;
    margin-top: 50px;
    margin-right: 40%;
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
