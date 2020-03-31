<template>
  <div class="course-page-wrap">
    <div class="course-search-wrap">
      <el-input
        v-model="courseName"
        placeholder="课程名称"
        clearable
      ></el-input>
      <el-input
        v-model="teacherName"
        placeholder="教师姓名"
        clearable
      ></el-input>
      <el-input v-model="oneLevel" placeholder="一级分类" clearable></el-input>
      <el-input v-model="twoLevel" placeholder="二级分类" clearable></el-input>
      <el-date-picker
        type="date"
        v-model="createTime"
        placeholder="创建时间"
        value-format="yyyy-MM-dd"
        clearable
      ></el-date-picker>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="course-table-wrap">
      <el-button type="primary" size="mini" icon="el-icon-plus" @click="addItem"
        >新增</el-button
      >
      <el-table border :data="tableData">
        <el-table-column
          align="center"
          label="课程名称"
          prop="name"
          width="120px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="一级分类"
          prop="one_level"
          width="50px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="二级分类"
          prop="two_level"
          width="50px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="预览图"
          width="80px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="Banner"
          width="80px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="教师姓名"
          prop="teacherName"
          width="80px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="年级"
          prop="grade"
          width="50px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="价格"
          prop="price"
          width="80px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="课时单位"
          prop="course_unit"
          width="50px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="展示状态"
          prop="show_status"
          width="50px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="课程状态"
          prop="course_status"
          width="80px"
        ></el-table-column>
        <el-table-column align="center" label="课程目录" width="80px">
          <template><span>查看详情</span></template>
        </el-table-column>
        <el-table-column
          align="center"
          label="创建时间"
          prop="createTime"
          width="100px"
        ></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="editItem(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="success"
              @click="changeStatus(scope.row)"
              >上架</el-button
            >
            <el-button size="mini" type="danger" @click="deleteItem(scope.row)"
              >删除</el-button
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
export default class CourseManage extends Vue {
  courseName = "";
  teacherName = "";
  oneLevel = "";
  twoLevel = "";
  createTime = "";
  pageNum = 1;
  pageSize = 10;
  total = 0;
  tableData = [];
  mounted(): void {
    this.queryData();
  }
  queryData(): void {
    this.axios("http://localhost:3000/course/getCourses", {
      params: {
        courseName: this.courseName,
        teacherName: this.teacherName,
        oneLevel: this.oneLevel,
        twoLevel: this.twoLevel,
        createTime: this.createTime,
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
  changeStatus(): void {
    console.log("上架");
  }
  deleteItem(): void {
    console.log("删除");
  }
  addItem(): void {
    this.$router.push({ path: "newCourse" });
  }
}
</script>
<style lang="less" scoped>
.course-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  .course-search-wrap {
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
  .course-table-wrap {
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
