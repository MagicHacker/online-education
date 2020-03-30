<template>
  <div class="salary-page-wrap">
    <div class="salary-search-wrap">
      <el-input v-model="teacherName" clearable placeholder="教师姓名"></el-input>
      <el-input v-model="dealType" clearable placeholder="处理类型"></el-input>
      <el-date-picker
        v-model="dateTime"
        type="date"
        placeholder="申请时间"
        clearable
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <el-table border :data="tableData">
      <el-table-column label="教师编号" align="center" prop="teacher_id"></el-table-column>
      <el-table-column label="教师姓名" align="center" prop="name"></el-table-column>
      <el-table-column label="处理类型" align="center" prop="sal_type"></el-table-column>
      <el-table-column label="提现金额" align="center" prop="sal_deal"></el-table-column>
      <el-table-column label="申请时间" align="center" prop="deal_time"></el-table-column>
      <el-table-column label="处理前金额" align="center" prop="sal_sum"></el-table-column>
      <el-table-column label="处理后金额" align="center" prop="sal_after"></el-table-column>
    </el-table>
    <pagination-view :total="total" @changeSize="changePageSize" @changeCurrent="changeCurrentPage"></pagination-view>
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
  teacherName = "";
  dealType = "";
  dateTime = "";
  tableData = [];
  total = 0;
  pageNum = 1;
  pageSize = 10;
  mounted(): void {
    this.queryData();
  }
  queryData(): void {
    this.axios("http://localhost:3000/salary/getSalarys", {
      params: {
        teacherName: this.teacherName,
        dealType: this.dealType,
        dealTime: this.dateTime,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
    }).then(res => {
      const { result, total } = res.data;
      this.tableData = result;
      this.total = total;
    });
  }
  search(): void {
    this.queryData();
  }
  changePageSize(val: number): void {
    this.pageSize = val;
    this.queryData();
  }
  changeCurrentPage(val: number): void {
    this.pageNum = val;
    this.queryData();
  }
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
