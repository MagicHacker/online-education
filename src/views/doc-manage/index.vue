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
      <el-button type="primary" size="mini" icon="el-icon-plus" @click="addItem"
        >新增</el-button
      >
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
    <el-dialog :visible.sync="dialogVisible" title="上传文档" center>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <el-button type="primary" size="mini">点击上传</el-button>
        <div slot="tip">
          支持扩展名：txt、doc、docx、xls、xlsx、pdf、ppt、pptx
        </div>
      </el-upload>
      <span slot="footer">
        <el-button type="primary">保存</el-button>
        <el-button type="info">取消</el-button>
      </span>
    </el-dialog>
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
  dialogVisible = false;
  deleteDoc(): void {
    console.log("删除");
  }
  addItem(): void {
    this.dialogVisible = true;
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
