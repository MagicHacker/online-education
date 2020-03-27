<template>
  <div class="classify-page-wrap">
    <div class="classify-search-wrap">
      <el-input
        v-model="classifyName"
        placeholder="分类名称"
        clearable
      ></el-input>
      <el-date-picker
        type="date"
        placeholder="添加时间"
        v-model="addTime"
        clearable
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-button type="primary" @click="searchCategory">搜索</el-button>
    </div>
    <el-alert
      type="info"
      title="注：课程分类最多添加2级"
      show-icon
      :closable="false"
    ></el-alert>
    <div class="classify-table-wrap">
      <el-button type="primary" size="mini" icon="el-icon-plus" @click="addItem"
        >新增</el-button
      >
      <el-table border :data="tableData">
        <el-table-column
          align="center"
          label="分类名称"
          prop="cate_name"
        ></el-table-column>
        <el-table-column
          align="center"
          label="分类排序"
          prop="cate_sort"
        ></el-table-column>
        <el-table-column
          align="center"
          label="添加时间"
          prop="create_time"
        ></el-table-column>
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
export default class ClassifyManage extends Vue {
  classifyName = "";
  addTime = "";
  tableData = [];
  total = 0;
  pageNum = 1;
  pageSize = 10;
  mounted(): void {
    this.searchCategory();
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
  // 查询数据
  queryData(): void {
    this.axios
      .get("http://localhost:3000/class/getClass", {
        params: {
          className: this.classifyName,
          createTime: this.addTime,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      })
      .then(res => {
        const { result, total } = res.data;
        this.tableData = result;
        this.total = total;
      });
  }
  // 搜索功能
  searchCategory(): void {
    this.queryData();
  }
  editItem(row): void {
    this.$router.push({ name: "addClassify", params: { cateId: row.cate_id } });
  }
  delItem(row): void {
    const cateId = row.cate_id;
    // 判断的提示
    this.$confirm("是否删除", {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    })
      .then(() => {
        this.axios
          .delete("http://localhost:3000/class/deleteClass", {
            params: {
              classId: cateId
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
    this.$router.push({ path: "addClassify" });
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
