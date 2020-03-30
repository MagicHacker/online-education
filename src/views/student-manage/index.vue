<template>
  <div class="student-page-wrap">
    <div class="student-search-wrap">
      <el-input v-model="studentName" placeholder="姓名" clearable></el-input>
      <el-input v-model="phoneNumber" placeholder="手机号" clearable></el-input>
      <el-date-picker
        v-model="registerTime"
        type="date"
        placeholder="注册时间"
        value-format="yyyy-MM-dd"
        clearable
      ></el-date-picker>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <el-table border :data="tableData">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="手机号" prop="phone"></el-table-column>
      <el-table-column label="已购课程" prop="count"></el-table-column>
      <el-table-column label="注册时间" prop="rgtTime"></el-table-column>
    </el-table>
    <pagination-view
      :total="total"
      @changeSize="changePageSize"
      @changeCurrent="changeCurrentPage"
    ></pagination-view>
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
export default class StudentManage extends Vue {
  studentName = "";
  phoneNumber = "";
  registerTime = "";
  pageNum = 1;
  pageSize = 10;
  tableData = [];
  total = 0;
  mounted(): void {
    this.queryData();
  }
  queryData(): void {
    this.axios("http://localhost:3000/student/getStudents", {
      params: {
        name: this.studentName,
        phone: this.phoneNumber,
        rgtTime: this.registerTime,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
    }).then(res => {
      const { code, result, total } = res.data;
      if (code === 0) {
        this.tableData = result;
        this.total = total;
      }
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
.student-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  .student-search-wrap {
    width: 100%;
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
