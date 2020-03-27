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
import { Component, Vue, Prop } from "vue-property-decorator";
interface FormData {
  name: string;
  type: string;
  order: string;
}
@Component
export default class AddClassify extends Vue {
  @Prop() cateId!: string;
  formData: FormData = {
    name: "",
    type: "",
    order: ""
  };
  mounted(): void {
    this.axios
      .get("http://localhost:3000/class/getClass", {
        params: {
          classId: this.cateId
        }
      })
      .then(res => {
        const { result } = res.data;
        this.formData.name = result[0].cate_name;
        this.formData.order = result[0].cate_sort;
      });
  }
  submit(): void {
    if (this.cateId) {
      // 修改分类
      this.axios
        .post("http://localhost:3000/class/updateClass", {
          classId: this.cateId,
          className: this.formData.name,
          classSort: this.formData.order
        })
        .then(res => {
          const { code } = res.data;
          if (code === 0) {
            this.$message({
              type: "success",
              message: "修改成功"
            });
            this.$router.replace({ path: "classifyManage" });
          }
        });
    } else {
      // 添加分类
      this.axios
        .post("http://localhost:3000/class/addClass", {
          className: this.formData.name,
          classSort: this.formData.order
        })
        .then(res => {
          const { code } = res.data;
          if (code === 0) {
            this.$message({
              type: "success",
              message: "添加成功"
            });
            this.$router.replace({ path: "classifyManage" });
          }
        });
    }
  }
  cancel(): void {
    this.$message({
      type: "info",
      message: "取消修改"
    });
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
