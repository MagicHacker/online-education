<template>
  <div class="pagination-view-wrap">
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[100, 200, 300]"
      :page-size="100"
      layout="total, sizes,prev,pager,next,jumper"
      :total="300"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class PaginationView extends Vue {
  currentPage = 2;
}
</script>
<style lang="less" scoped>
.pagination-view-wrap {
  margin-top: 20px;
}
</style>
