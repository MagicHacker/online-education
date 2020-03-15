<template>
  <div class="edit-teacher-wrap">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="账号">
        <el-input v-model="formData.phoneNumber" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="formData.grade" placeholder="年级"></el-input>
      </el-form-item>
      <el-form-item label="科目">
        <el-input v-model="formData.subject" placeholder="科目名称"></el-input>
      </el-form-item>
      <el-form-item label="佣金比例">
        <el-input v-model="formData.commission" placeholder="佣金百分比">
          <i slot="suffix" class="icon-percent"></i>
        </el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="area" v-model="formData.brief" placeholder="教师简介，最多150字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button type="info">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface FormData {
  phoneNumber: string;
  grade: string;
  subject: string;
  commission: number;
  brief: string;
}
@Component
export default class EditTeacher extends Vue {
  formData: FormData = {
    phoneNumber: "",
    grade: "",
    subject: "",
    commission: 0,
    brief: ""
  };
}
</script>
<style lang="less" scoped>
.edit-teacher-wrap {
  width: 700px;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  margin: 0 auto;
  .icon-percent {
    &::before {
      content: "\0025";
      font-size: 14px;
      display: inline;
      color: #000;
    }
  }
}
</style>
