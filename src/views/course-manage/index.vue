<template>
  <div class="course-page-wrap">
    <div class="course-search-wrap">
      <el-input v-model="courseName" placeholder="课程名称"></el-input>
      <el-input v-model="teacherName" placeholder="教师姓名"></el-input>
      <el-input v-model="oneLevel" placeholder="一级分类"></el-input>
      <el-input v-model="twoLevel" placeholder="二级分类"></el-input>
      <el-date-picker
        type="datetime"
        v-model="createTime"
        placeholder="创建时间"
      ></el-date-picker>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="course-table-wrap">
      <el-button type="primary" size="mini" icon="el-icon-plus" @click="addItem"
        >新增</el-button
      >
      <el-table border>
        <el-table-column align="center" label="课程名称"></el-table-column>
        <el-table-column align="center" label="一级分类"></el-table-column>
        <el-table-column align="center" label="二级分类"></el-table-column>
        <el-table-column align="center" label="预览图"></el-table-column>
        <el-table-column align="center" label="Banner"></el-table-column>
        <el-table-column align="center" label="教师姓名"></el-table-column>
        <el-table-column align="center" label="年级"></el-table-column>
        <el-table-column align="center" label="价格"></el-table-column>
        <el-table-column align="center" label="课时单位"></el-table-column>
        <el-table-column align="center" label="展示状态"></el-table-column>
        <el-table-column align="center" label="课程状态"></el-table-column>
        <el-table-column align="center" label="课程目录"></el-table-column>
        <el-table-column align="center" label="创建时间"></el-table-column>
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
export default class CourseManage extends Vue {
  courseName = "";
  teacherName = "";
  oneLevel = "";
  twoLevel = "";
  createTime = "";
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
