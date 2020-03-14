<template>
  <div class="teacher-page-wrap">
    <div class="teacher-search-wrap">
      <el-input v-model="teacherName" placeholder="教师姓名"></el-input>
      <el-input v-model="phoneNumber" placeholder="手机号"></el-input>
      <el-select v-model="teacherStatus" placeholder="状态" clearable>
        <el-option label="启用" value="0"></el-option>
        <el-option label="停用" value="1"></el-option>
      </el-select>
      <el-date-picker v-model="registerTime" type="datetime" placeholder="注册时间"></el-date-picker>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="teacher-table-wrap">
      <el-button type="primary" icon="el-icon-plus">新增</el-button>
      <el-table border>
        <el-table-column label="编号" align="center"></el-table-column>
        <el-table-column label="手机号" align="center"></el-table-column>
        <el-table-column label="姓名" align="center"></el-table-column>
        <el-table-column label="头像" align="center"></el-table-column>
        <el-table-column label="年级" align="center"></el-table-column>
        <el-table-column label="科目" align="center"></el-table-column>
        <el-table-column label="简介" align="center"></el-table-column>
        <el-table-column label="佣金比例" align="center"></el-table-column>
        <el-table-column label="收入" align="center"></el-table-column>
        <el-table-column label="已提现" align="center"></el-table-column>
        <el-table-column label="学生数" align="center"></el-table-column>
        <el-table-column label="课程数" align="center"></el-table-column>
        <el-table-column label="注册时间" align="center"></el-table-column>
        <el-table-column label="状态" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="editItem(scope.row)">编辑</el-button>
            <el-button size="mini" @click="delItem(scope.row)">停用</el-button>
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
export default class TeacherManage extends Vue {
  teacherName = "";
  phoneNumber = "";
  teacherStatus = "";
  registerTime = "";
  editItem(): void {
    console.log("编辑");
  }
  delItem(): void {
    console.log("删除");
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
