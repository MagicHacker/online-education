<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="login-logo"></div>
      <div class="login-title">
        <span>在线教育管理系统</span>
      </div>
      <el-form class="login-form" :model="formData" :rules="formRules" ref="loginForm">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="formData.username">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" v-model="formData.password" show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
      </el-form>
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
  formData = {
    username: "",
    password: ""
  };
  formRules = {
    username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
  };
  loginIn(): void {
    (this.$refs.loginForm as any).validate(valid => {
      if (valid) {
        // 发请求进行登录
        this.axios("http://localhost:3000/user/login", {
          params: {
            username: this.formData.username,
            password: this.formData.password
          }
        }).then(res => {
          const { result, code } = res.data;
          if (code === 0) {
            this.$message({
              type: "success",
              message: "登录成功"
            });
            this.$router.push({ path: "/mainPage/homePage" });
            // 页面刷新state中数据丢失，故使用localStorage
            localStorage.setItem("userInfo", JSON.stringify(result[0]));
            this.$store.dispatch("getUserInfo", result[0]);
          } else {
            this.$message({
              type: "error",
              message: "登录失败，用户名或密码错误"
            });
          }
        });
      }
    });
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
      }
      /deep/ .el-form-item {
        width: 300px;
        margin: 0px auto 20px;
      }
    }
    .login-btn {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
