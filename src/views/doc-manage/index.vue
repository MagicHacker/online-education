<template>
  <div class="document-page-wrap">
    <div class="document-search-wrap">
      <el-input v-model="docName" placeholder="文档名称" clearable></el-input>
      <el-date-picker
        type="date"
        v-model="uploadTime"
        placeholder="上传时间"
        clearable
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-button type="primary" @click="search()">搜索</el-button>
    </div>
    <div class="document-table-wrap">
      <el-button type="primary" size="mini" icon="el-icon-plus" @click="addItem"
        >新增</el-button
      >
      <el-table border :data="tableData">
        <el-table-column
          align="center"
          label="文档名称"
          prop="doc_name"
        ></el-table-column>
        <el-table-column
          align="center"
          label="上传时间"
          prop="upload_time"
        ></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="deleteDoc(scope.row)"
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
  pageNum = 1;
  pageSize = 10;
  total = 0;
  tableData = [];
  mounted(): void {
    this.queryData();
  }
  // 搜索
  search(): void {
    this.queryData();
  }
  // 查询数据
  queryData(): void {
    this.axios("http://localhost:3000/doc/getDocs", {
      params: {
        docName: this.docName,
        uploadTime: this.uploadTime,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
    }).then(res => {
      const { result, total } = res.data;
      this.tableData = result;
      this.total = total;
    });
  }
  changePageSize(val: number): void {
    this.pageSize = val;
    this.queryData();
  }
  changeCurrentPage(val: number): void {
    this.pageNum = val;
    this.queryData();
  }
  deleteDoc(row): void {
    const docId = row.doc_id;
    this.$confirm("是否删除?", {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    })
      .then(() => {
        this.axios
          .delete("http://localhost:3000/doc/deleteDoc", {
            params: {
              docId
            }
          })
          .then(res => {
            const { code } = res.data;
            if (code === 0) {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              this.queryData();
            }
          });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "取消删除"
        });
      });
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
