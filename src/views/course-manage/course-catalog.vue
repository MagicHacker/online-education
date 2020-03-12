<template>
  <div class="courseCatalog-page-wrap">
    <div class="courseCatalog-search-wrap">
      <el-input v-model="catalogName" placeholder="目录名称"></el-input>
      <el-date-picker
        type="datetime"
        v-model="liveTime"
        placeholder="直播时间"
        clearable
      ></el-date-picker>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary" @click="goBack">返回上一页</el-button>
    </div>
    <el-table border>
      <el-table-column label="课程目录" align="center"></el-table-column>
      <el-table-column label="直播时间" align="center"></el-table-column>
      <el-table-column label="直播状态" align="center"></el-table-column>
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
export default class CourseCatalog extends Vue {
  catalogName = "";
  liveTime = "";
  goBack(): void {
    this.$router.go(-1);
  }
}
</script>
<style lang="less" scoped>
.courseCatalog-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  .courseCatalog-search-wrap {
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
