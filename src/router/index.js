import { createRouter, createWebHistory } from "vue-router";

// views 目录
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ListView from '../views/ListVIew.vue'   // 注意：ListVIew.vue 的 I 是大写还是小写，确保路径对
import AddView from '../views/AddView.vue'
import ReportView from '../views/ReportView.vue'
import Report2View from '../views/Report2View.vue'
import Home from '../views/Home.vue'
// pages 目录
import cooker from "../views/cooker.vue";
import doctor from "../views/doctor.vue";
import helper from "../views/helper.vue";
import imgCreate from "../views/imgCreate.vue";

const routes = [
  // 重定向到 helper
  {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requireAuth:true
      }
  },
  {
      path: '/homes',
      name: 'homes',
      component: Home
  },
  // pages 路由
  {
    path: '/helper',
    name: 'helper',
    component: helper
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: doctor
  },
  {
    path: '/cooker',
    name: 'cooker',
    component: cooker
  },
  {
    path: '/imgCreate',
    name: 'imgCreate',
    component: imgCreate
  },

  // views 路由
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requireAuth: false }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { requireAuth: false }
  },
  {
    path: '/list',
    name: 'list',
    component: ListView,
    meta: { requireAuth: true }
  },
  {
    path: '/add',
    name: 'add',
    component: AddView,
    meta: { requireAuth: true }
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView,
    meta: { requireAuth: true, role: ['VIP', 'SVIP'] }
  },
  {
    path: '/report2',
    name: 'report2',
    component: Report2View,
    meta: { requireAuth: true, role: ['SVIP'] }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes
})

// 权限守卫（和你原来一样）
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem('token')) {
      if (to.meta.role) {
        if (to.meta.role.includes(sessionStorage.getItem('role'))) {
          next();
        } else {
          alert('您没有权限访问');
          return;
        }
      } else {
        next();
      }
    } else {
      alert('请先登录');
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
