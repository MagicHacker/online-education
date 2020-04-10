<template>
  <div class="main-page-wrap">
    <header class="main-page-header">
      <div class="main-page-logo">
        <svg-icon iconName="#icon-logo"></svg-icon>
        <span>在线教育管理系统</span>
      </div>
      <div class="main-page-nav">
        <div>
          <svg-icon iconName="#icon-avatar"></svg-icon>
          <span>欢迎你，{{ username }}</span>
        </div>
        <div @click="exit">
          <svg-icon iconName="#icon-exit"></svg-icon>
          <span>退出登录</span>
        </div>
      </div>
    </header>
    <div class="main-page-area">
      <side-menu></side-menu>
      <div class="main-page-right">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import sideMenu from "../side-menu/index.vue";
@Component({
  components: {
    sideMenu
  }
})
export default class MainPage extends Vue {
  username = "";
  mounted(): void {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") as any);
    this.username = userInfo.username;
  }
  exit(): void {
    this.$router.replace({ path: "/login" });
  }
}
</script>
<style lang="less" scoped>
.main-page-wrap {
  width: 100%;
  height: 100%;
  .main-page-header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 20px;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(
      to right,
      #25acfc,
      #269dfc,
      #2b89fc,
      #2c87fc,
      #3079f9,
      #356df9
    );
    cursor: pointer;
    .main-page-logo {
      width: 190px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .main-page-nav {
      width: 240px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .main-page-area {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    justify-content: space-between;
    .main-page-right {
      width: calc(100% - 200px);
      height: calc(100% - 30px);
      overflow: auto;
    }
  }
}
</style>
