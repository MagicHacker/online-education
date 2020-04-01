<template>
  <div class="order-page-wrap">
    <div class="order-search-wrap">
      <el-input
        v-model="orderNumber"
        placeholder="订单编号"
        clearable
      ></el-input>
      <el-input v-model="salesName" placeholder="买家姓名" clearable></el-input>
      <el-input
        v-model="courseStatus"
        placeholder="课程状态"
        clearable
      ></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <el-table border :data="tableData">
      <el-table-column
        align="center"
        label="课程信息"
        prop="courseName"
      ></el-table-column>
      <el-table-column
        align="center"
        label="课程老师"
        prop="teacherName"
      ></el-table-column>
      <el-table-column
        align="center"
        label="实付款"
        prop="pay_amount"
      ></el-table-column>
      <el-table-column
        align="center"
        label="付款时间"
        prop="pay_time"
      ></el-table-column>
      <el-table-column
        align="center"
        label="买家"
        prop="studentName"
      ></el-table-column>
      <el-table-column
        align="center"
        label="订单编号"
        prop="order_id"
      ></el-table-column>
      <el-table-column
        align="center"
        label="交易状态"
        prop="courseStatus"
      ></el-table-column>
    </el-table>
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
export default class OrderManage extends Vue {
  orderNumber = "";
  salesName = "";
  courseStatus = "";
  tableData = [];
  total = 0;
  pageNum = 1;
  pageSize = 10;
  mounted(): void {
    this.queryData();
  }
  queryData(): void {
    this.axios("http://localhost:3000/order/getOrders", {
      params: {
        orderId: this.orderNumber,
        buyerName: this.salesName,
        courseStatus: this.courseStatus,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
    }).then(res => {
      const { code, result, total } = res.data;
      if (code === 0) {
        this.tableData = result;
        this.total = total;
      }
    });
  }
  search(): void {
    this.queryData();
  }
  changePageSize(val: number): void {
    this.pageSize = val;
    this.queryData();
  }
  changeCurrentPage(val: number): void {
    this.pageNum = val;
    this.queryData();
  }
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
