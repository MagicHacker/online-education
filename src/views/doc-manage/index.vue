<template>
  <div class="document-page-wrap">
    <div class="document-search-wrap">
      <el-input v-model="docName" placeholder="文档名称"></el-input>
      <el-date-picker
        type="datetime"
        v-model="uploadTime"
        placeholder="上传时间"
      ></el-date-picker>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="document-table-wrap">
      <el-button type="primary" size="mini" icon="el-icon-plus">新增</el-button>
      <el-table border>
        <el-table-column align="center" label="文档名称"></el-table-column>
        <el-table-column align="center" label="上传时间"></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="deleteDoc(scope.row)"
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
export default class DocManage extends Vue {
  docName = "";
  uploadTime = "";
  deleteDoc(): void {
    console.log("删除");
  }
}
</script>
<style lang="less" scoped>
.document-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  .document-search-wrap {
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
  .document-table-wrap {
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
