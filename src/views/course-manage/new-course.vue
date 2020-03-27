<template>
  <div class="new-course-wrap">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="课程名称">
        <el-input
          v-model="formData.courseName"
          placeholder="课程名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="一级分类">
        <el-select v-model="formData.oneLevel" placeholder="一级分类">
          <el-option label="小学" value="0"></el-option>
          <el-option label="初中" value="1"></el-option>
          <el-option label="高中" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-input v-model="formData.twoLevel" placeholder="填写学科"></el-input>
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="formData.grade" placeholder="年级"></el-input>
      </el-form-item>
      <el-form-item label="课程价格">
        <el-input v-model="formData.price" placeholder="课程价格"></el-input>
      </el-form-item>
      <el-form-item label="主讲老师">
        <el-select v-model="formData.teacher" placeholder="主讲老师">
          <el-option label="张三" value="张三"></el-option>
          <el-option label="李四" value="李四"></el-option>
          <el-option label="王五" value="王五"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预览图">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/">
          <el-button size="mini" type="primary">点击上传</el-button>
          <div slot="tip" class="tip-wrap">支持扩展名：png、jpg、jpeg</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="banner图">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/">
          <el-button size="mini" type="primary">点击上传</el-button>
          <div slot="tip" class="tip-wrap">支持扩展名：png、jpg、jpeg</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="课时单位">
        <el-radio label="按天" v-model="formData.unit"></el-radio>
        <el-radio label="按月" v-model="formData.unit"></el-radio>
      </el-form-item>
      <el-form-item label="课程详情">
        <el-input
          type="textarea"
          placeholder="课程详情"
          v-model="formData.detail"
        ></el-input>
      </el-form-item>
      <el-form-item label="课程目录">
        <div class="course-catalog-header">
          <div>
            <span>目录名称</span>
          </div>
          <div>
            <span>直播时间</span>
          </div>
          <div>
            <span>直播状态</span>
          </div>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-circle-plus"
            @click="addCourseCatalog"
          ></el-button>
        </div>
        <div class="course-catalog-content">
          <div>
            <span>高三语文</span>
          </div>
          <div>
            <span>2020-03-02</span>
          </div>
          <div>
            <span>等待直播</span>
          </div>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-remove"
          ></el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button type="info">取消</el-button>
      </el-form-item>
    </el-form>
    <el-dialog width="30%" :visible.sync="dialogVisible" center>
      <el-input v-model="catalogName" placeholder="目录名称"></el-input>
      <el-date-picker
        v-model="liveTime"
        placeholder="直播时间"
      ></el-date-picker>
      <span slot="footer">
        <el-button type="primary">确定</el-button>
        <el-button type="info">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface FormData {
  courseName: string;
  oneLevel: string;
  twoLevel: string;
  price: string;
  unit: string;
  teacher: string;
  detail: string;
  grade: string;
}
@Component
export default class NewCourse extends Vue {
  formData: FormData = {
    courseName: "",
    oneLevel: "",
    twoLevel: "",
    price: "",
    unit: "按天",
    teacher: "",
    detail: "",
    grade: ""
  };
  catalogName = "";
  dialogVisible = false;
  liveTime = "";
  addCourseCatalog(): void {
    this.dialogVisible = true;
  }
}
</script>
<style lang="less" scoped>
.new-course-wrap {
  width: 700px;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px;
  margin: 0 auto;
  .tip-wrap {
    height: 20px;
    line-height: 20px;
  }
  /deep/ .el-select {
    width: 100%;
  }
  .course-catalog-header,
  .course-catalog-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /deep/ .el-date-editor {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
