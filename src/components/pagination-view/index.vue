<template>
  <div class="pagination-view-wrap">
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      layout="total, sizes,prev,pager,next,jumper"
      :total="total"
      @size-change="changePageSize"
      @current-change="changeCurrent"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class PaginationView extends Vue {
  currentPage = 1
  @Prop() total
  changePageSize(val: number): void {
    this.$emit('changeSize', val)
  }
  changeCurrent(val: number): void {
    this.$emit('changeCurrent', val)
  }
}
</script>
<style lang="less" scoped>
.pagination-view-wrap {
  margin-top: 20px;
}
</style>
