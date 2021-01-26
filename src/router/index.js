import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import AddStudent from "../views/AddStudent.vue";
import StudentList from "../views/StudentList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/add-Student",
    name: "add-Student",
    component: AddStudent,
  },

  {
    path: "/student-list",
    name: "student-list",
    component: StudentList,
  },
];
const router = new VueRouter({
  routes,
});
export default router;
