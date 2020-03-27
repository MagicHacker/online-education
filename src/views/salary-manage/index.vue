<template>
  <div class="salary-page-wrap">
    <div class="salary-search-wrap">
      <el-input
        v-model="salaryName"
        :clearable="true"
        placeholder="教师姓名"
      ></el-input>
      <el-input
        v-model="operateType"
        :clearable="true"
        placeholder="处理类型"
      ></el-input>
      <el-date-picker
        v-model="dateTime"
        type="datetime"
        placeholder="申请时间"
      ></el-date-picker>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table border>
      <el-table-column label="教师编号" align="center"></el-table-column>
      <el-table-column label="教师姓名" align="center"></el-table-column>
      <el-table-column label="处理类型" align="center"></el-table-column>
      <el-table-column label="提现金额" align="center"></el-table-column>
      <el-table-column label="申请时间" align="center"></el-table-column>
      <el-table-column label="处理前金额" align="center"></el-table-column>
      <el-table-column label="处理后金额" align="center"></el-table-column>
    </el-table>
    <pagination-view></pagination-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PaginationView from "../../components/pagination-view/index.vue";
@Component({
  components: {
    PaginationView
  }
})
export default class SalaryManage extends Vue {
  salaryName = "";
  operateType = "";
  dateTime = "";
}
</script>
<style lang="less" scoped>
.salary-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  .salary-search-wrap {
    width: 900px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    /deep/ .el-input {
      width: 200px;
    }
  }
}
</style>
