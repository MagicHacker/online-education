import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/login.vue";
import MainPage from "../views/main-page/main-page.vue";
import HomePage from "../views/home-page/index.vue";
import TeacherManage from "../views/teacher-manage/index.vue";
import StudentManage from "../views/student-manage/index.vue";
import ClassifyManage from "../views/classify-manage/index.vue";
import CourseManage from "../views/course-manage/index.vue";
import OrderManage from "../views/order-manage/index.vue";
import DocManage from "../views/doc-manage/index.vue";
import SalaryManage from "../views/salary-manage/index.vue";
import AddClassify from "../views/classify-manage/add-classify.vue";
import CourseCatalog from "../views/course-manage/course-catalog.vue";
import NewCourse from "../views/course-manage/new-course.vue";
import EditTeacher from "../views/teacher-manage/edit-teacher.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/mainPage",
    name: "mainPage",
    component: MainPage,
    children: [
      {
        path: "homePage",
        name: "homePage",
        component: HomePage
      },
      {
        path: "teacherManage",
        name: "teacherManage",
        component: TeacherManage
      },
      {
        path: "editTeacher",
        name: "editTeacher",
        component: EditTeacher
      },
      {
        path: "studentManage",
        name: "studentManage",
        component: StudentManage
      },
      {
        path: "classifyManage",
        name: "classifyManage",
        component: ClassifyManage
      },
      {
        path: "courseManage",
        name: "courseManage",
        component: CourseManage
      },
      {
        path: "courseCatalog",
        name: "courseCatalog",
        component: CourseCatalog
      },
      {
        path: "newCourse",
        name: "newCourse",
        component: NewCourse
      },
      {
        path: "orderManage",
        name: "orderManage",
        component: OrderManage
      },
      {
        path: "docManage",
        name: "docManage",
        component: DocManage
      },
      {
        path: "salaryManage",
        name: "salaryManage",
        component: SalaryManage
      },
      {
        path: "addClassify",
        name: "addClassify",
        component: AddClassify,
        props: true
      }
    ]
  },
  {
    path: "/",
    redirect: "/login"
  }
];

const router = new VueRouter({
  routes
});

export default router;
