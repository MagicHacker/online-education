<template>
  <div class="side-menu-wrap">
    <el-menu :unique-opened="true" :router="true" :default-active="activeIndex">
      <el-menu-item index="/mainPage/homePage">
        <svg-icon iconName="#icon-homepage"></svg-icon>
        <span>系统首页</span>
      </el-menu-item>
      <el-submenu index="">
        <template slot="title">
          <svg-icon iconName="#icon-user"></svg-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/mainPage/teacherManage">
          <svg-icon iconName="#icon-teacher"></svg-icon>
          <span>教师管理</span>
        </el-menu-item>
        <el-menu-item index="/mainPage/studentManage">
          <svg-icon iconName="#icon-student"></svg-icon>
          <span>学生管理</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/mainPage/classifyManage">
        <svg-icon iconName="#icon-classify"></svg-icon>
        <span>分类管理</span>
      </el-menu-item>
      <el-menu-item index="/mainPage/courseManage">
        <svg-icon iconName="#icon-course"></svg-icon>
        <span>课程管理</span>
      </el-menu-item>
      <el-menu-item index="/mainPage/orderManage">
        <svg-icon iconName="#icon-order"></svg-icon>
        <span>订单管理</span>
      </el-menu-item>
      <el-menu-item index="/mainPage/docManage">
        <svg-icon iconName="#icon-document"></svg-icon>
        <span>文档管理</span>
      </el-menu-item>
      <el-menu-item index="/mainPage/salaryManage">
        <svg-icon iconName="#icon-salary"></svg-icon>
        <span>收入管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SideMenu extends Vue {
  get activeIndex(): string {
    return this.$route.path;
  }
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
