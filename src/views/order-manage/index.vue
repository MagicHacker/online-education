<template>
  <div class="order-page-wrap">
    <div class="order-search-wrap">
      <el-input v-model="orderNumber" placeholder="订单编号"></el-input>
      <el-input v-model="salesName" placeholder="买家姓名"></el-input>
      <el-input v-model="courseStatus" placeholder="课程状态"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table border>
      <el-table-column align="center" label="课程信息"></el-table-column>
      <el-table-column align="center" label="课程老师"></el-table-column>
      <el-table-column align="center" label="实付款"></el-table-column>
      <el-table-column align="center" label="付款时间"></el-table-column>
      <el-table-column align="center" label="买家"></el-table-column>
      <el-table-column align="center" label="订单编号"></el-table-column>
      <el-table-column align="center" label="交易状态"></el-table-column>
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
export default class OrderManage extends Vue {
  orderNumber = "";
  salesName = "";
  courseStatus = "";
}
</script>
<style lang="less" scoped>
.order-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  .order-search-wrap {
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
