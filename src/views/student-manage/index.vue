<template>
  <div class="student-page-wrap">
    <div class="student-search-wrap">
      <el-input v-model="studentName" placeholder="姓名"></el-input>
      <el-input v-model="phoneNumber" placeholder="手机号"></el-input>
      <el-date-picker
        v-model="registerTime"
        type="datetime"
        placeholder="注册时间"
      ></el-date-picker>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table border>
      <el-table-column label="姓名"></el-table-column>
      <el-table-column label="手机号"></el-table-column>
      <el-table-column label="已购课程"></el-table-column>
      <el-table-column label="注册时间"></el-table-column>
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
export default class StudentManage extends Vue {
  studentName = "";
  phoneNumber = "";
  registerTime = "";
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
