<template>
  <div class="teacher-page-wrap">
    <div class="teacher-search-wrap">
      <el-input
        v-model="teacherName"
        placeholder="教师姓名"
        clearable
      ></el-input>
      <el-input v-model="phoneNumber" placeholder="手机号" clearable></el-input>
      <el-select v-model="teacherStatus" placeholder="状态" clearable>
        <el-option label="启用" value="0"></el-option>
        <el-option label="停用" value="1"></el-option>
      </el-select>
      <el-date-picker
        v-model="registerTime"
        type="date"
        placeholder="注册时间"
        value-format="yyyy-MM-dd"
        clearable
      ></el-date-picker>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="teacher-table-wrap">
      <el-button type="primary" icon="el-icon-plus" @click="addItem"
        >新增</el-button
      >
      <el-table border :data="tableData">
        <el-table-column
          label="手机号"
          align="center"
          prop="phone"
        ></el-table-column>
        <el-table-column
          label="姓名"
          align="center"
          prop="name"
          width="80px"
        ></el-table-column>
        <el-table-column
          label="年级"
          align="center"
          prop="gride"
          width="50px"
        ></el-table-column>
        <el-table-column
          label="科目"
          align="center"
          prop="subject"
          width="80px"
        ></el-table-column>
        <el-table-column
          label="佣金比例"
          align="center"
          prop="commission"
          width="80px"
        ></el-table-column>
        <el-table-column
          label="学生数"
          align="center"
          prop="stuCount"
          width="70px"
        ></el-table-column>
        <el-table-column
          label="课程数"
          align="center"
          prop="courseCount"
          width="70px"
        ></el-table-column>
        <el-table-column
          label="状态"
          align="center"
          prop="status"
          width="50px"
        ></el-table-column>
        <el-table-column
          label="注册时间"
          align="center"
          prop="rgt_time"
        ></el-table-column>
        <el-table-column
          label="简介"
          align="center"
          prop="brief"
          width="200px"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="editItem(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="delItem(scope.row)"
              >停用</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
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
export default class TeacherManage extends Vue {
  teacherName = "";
  phoneNumber = "";
  teacherStatus = "";
  registerTime = "";
  pageNum = 1;
  pageSize = 10;
  total = 0;
  tableData = [];
  mounted(): void {
    this.queryData();
  }
  queryData(): void {
    this.axios("http://localhost:3000/teacher/getTeachers", {
      params: {
        name: this.teacherName,
        phone: this.phoneNumber,
        status: this.teacherStatus,
        regTime: this.registerTime,
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
  // 改变每页条数
  changePageSize(val: number): void {
    this.pageSize = val;
    this.queryData();
  }
  // 改变当前页数
  changeCurrentPage(val: number): void {
    this.pageNum = val;
    this.queryData();
  }
  editItem(): void {
    console.log("编辑");
  }
  delItem(): void {
    console.log("删除");
  }
  addItem(): void {
    this.$router.push({ path: "editTeacher" });
  }
}
</script>
<style lang="less" scoped>
.teacher-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  .teacher-search-wrap {
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
  .teacher-table-wrap {
    width: 100%;
    margin-top: 20px;
    text-align: left;
    /deep/ .el-button {
      padding: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
