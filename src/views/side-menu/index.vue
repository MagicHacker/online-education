<template>
  <div class="side-menu-wrap">
    <el-menu :unique-opened="true" :router="true" :default-active="activeIndex">
      <el-menu-item index="1">系统首页</el-menu-item>
      <el-submenu>
        <template slot="title">用户管理</template>
        <el-menu-item>教师管理</el-menu-item>
        <el-menu-item>学生管理</el-menu-item>
      </el-submenu>
      <el-menu-item>分类管理</el-menu-item>
      <el-menu-item>课程管理</el-menu-item>
      <el-menu-item>订单管理</el-menu-item>
      <el-menu-item>文档管理</el-menu-item>
      <el-menu-item>收入管理</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SideMenu extends Vue {
  activeIndex = 1;
}
</script>
<style lang="less" scoped>
.side-menu-wrap {
  width: 200px;
  height: 100%;
  /deep/ .el-menu {
    height: 100%;
  }
}
</style>
