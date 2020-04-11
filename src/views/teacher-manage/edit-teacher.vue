<template>
  <div class="edit-teacher-wrap">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="账号">
        <el-input v-model="formData.phoneNumber" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item label="名字">
        <el-input v-model="formData.name" placeholder="名字"></el-input>
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
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button type="info" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface FormData {
  phoneNumber: string;
  name: string;
  grade: string;
  subject: string;
  commission: number;
  brief: string;
}
@Component
export default class EditTeacher extends Vue {
  formData: FormData = {
    phoneNumber: "",
    name: "",
    grade: "",
    subject: "",
    commission: 0,
    brief: ""
  };
  mounted(): void {
    this.queryData();
  }
  queryData(): void {
    this.axios
      .get("http://localhost:3000/teacher/getTeachers", {
        params: {
          phone: this.$route.params.id,
          pageNum: 1,
          pageSize: 1
        }
      })
      .then(res => {
        const { result, code } = res.data;
        if (code === 0) {
          this.formData.phoneNumber = result[0].phone;
          this.formData.grade = result[0].gride;
          this.formData.subject = result[0].subject;
          this.formData.commission = result[0].commission;
          this.formData.brief = result[0].brief;
        }
      });
  }
  submit(): void {
    this.axios
      .post("http://localhost:3000/teacher/updateTeacher", {
        phone: this.formData.phoneNumber,
        name: this.formData.name,
        gride: this.formData.grade,
        subject: this.formData.subject,
        commission: this.formData.commission,
        brief: this.formData.brief
      })
      .then(res => {
        const { code } = res.data;
        if (code === 0) {
          this.$message({
            type: "success",
            message: "提交成功"
          });
          this.$router.replace({ name: "teacherManage" });
        }
      });
  }
  cancel(): void {
    this.$message({
      type: "info",
      message: "取消提交"
    });
    this.$router.replace({ name: "teacherManage" });
  }
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
