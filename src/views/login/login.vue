<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="login-logo"></div>
      <div class="login-title">
        <span>在线教育管理系统</span>
      </div>
      <div class="login-form">
        <el-input placeholder="请输入用户名" v-model="username">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password>
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </div>
      <div class="login-btn">
        <el-button type="primary" @click="loginIn">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  username = "";
  password = "";
  loginIn(): void {
    this.$router.push({ path: "/mainPage" });
  }
}
</script>
<style lang="less" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  background: url("../../../public/images/login-bg.jpeg") no-repeat center
    center;
  background-size: 100%;
  position: relative;
  .login-box {
    width: 350px;
    height: 400px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -175px;
    top: 50%;
    margin-top: -200px;
    border-radius: 10px;
    .login-logo {
      width: 70px;
      height: 70px;
      margin: 15px auto 0px;
      background: url("../../../public/images/login-logo.png") no-repeat center
        center;
      background-size: 70px;
    }
    .login-title {
      width: 100%;
      text-align: center;
      color: #2188fb;
      margin-top: 20px;
      font-size: 24px;
    }
    .login-form {
      width: 100%;
      margin-top: 20px;
      /deep/ .el-input {
        width: 300px;
        margin-bottom: 20px;
      }
    }
    .login-btn {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
