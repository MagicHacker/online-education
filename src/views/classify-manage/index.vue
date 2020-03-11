<template>
  <div class="classify-page-wrap">
    <div class="classify-search-wrap">
      <el-input v-model="classifyName" placeholder="分类名称"></el-input>
      <el-date-picker
        type="datetime"
        placeholder="添加时间"
        v-model="addTime"
      ></el-date-picker>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-alert
      type="info"
      title="注：课程分类最多添加2级"
      show-icon
      :closable="false"
    ></el-alert>
    <div class="classify-table-wrap">
      <el-button type="primary" size="mini" icon="el-icon-plus">新增</el-button>
      <el-table border>
        <el-table-column align="center" label="分类名称"></el-table-column>
        <el-table-column align="center" label="分类排序"></el-table-column>
        <el-table-column align="center" label="添加时间"></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="editItem(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="delItem(scope.row)"
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
export default class ClassifyManage extends Vue {
  classifyName = "";
  addTime = "";
  editItem(): void {
    console.log("编辑");
  }
  delItem(): void {
    console.log("删除");
  }
}
</script>
<style lang="less" scoped>
.classify-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  .classify-search-wrap {
    width: 700px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    /deep/ .el-input {
      width: 200px;
    }
  }
  .classify-table-wrap {
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
