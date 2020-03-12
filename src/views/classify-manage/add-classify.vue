<template>
  <div class="add-classify-wrap">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="分类名称">
        <el-input
          v-model="formData.name"
          placeholder="请输入学段名称(小学/初中/高中)"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类级别">
        <el-select v-model="formData.type" placeholder="分类级别">
          <el-option label="顶级分类" value="0"></el-option>
          <el-option label="一级分类" value="1"></el-option>
          <el-option label="二级分类" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类顺序">
        <el-input
          v-model="formData.order"
          placeholder="请输入顺序数字"
        ></el-input>
        <el-alert type="info" title="数字越小越靠前" show-icon></el-alert>
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
  name: string;
  type: string;
  order: string;
}
@Component
export default class AddClassify extends Vue {
  formData: FormData = {
    name: "",
    type: "",
    order: ""
  };
  submit(): void {
    this.$router.replace({ path: "classifyManage" });
  }
  cancel(): void {
    this.$router.replace({ path: "classifyManage" });
  }
}
</script>
<style lang="less" scoped>
.add-classify-wrap {
  width: 500px;
  height: 100%;
  margin: 50px auto 0px;
  /deep/ .el-select {
    width: 100%;
  }
  /deep/ .el-alert {
    height: 30px;
    margin-top: 10px;
  }
  /deep/.el-icon-close {
    opacity: 0;
  }
}
</style>
