import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ListVIew from '../views/ListVIew.vue'
import AddView from '../views/AddView.vue'
import ReportView from '../views/ReportView.vue'
import Report2View from '../views/Report2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requireAuth:true
      }

    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/list',
      name: 'list',
      component: ListVIew,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/add',
      name: 'add',
      component: AddView,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/report',
      name: 'report',
      component: ReportView,
      meta:{
        requireAuth:true,
        role:['VIP',"SVIP"]
      }
    },
    {
      path: '/report2',
      name: 'report2',
      component: Report2View,
      meta:{
        requireAuth:true,
        role:["SVIP"]
      }
    },
  ],
})
router.beforeEach((to, from, next) => {
   // 显示加载状态

  
   if(to.meta.requireAuth){
    if(sessionStorage.getItem('token')){
      if(to.meta.role){
        if(to.meta.role.includes(sessionStorage.getItem('role'))){
          next()
        }else{
          alert('您没有权限访问')
          return
        }
      }
      else{
        next()
      }
    }else{
      alert('请先登录')
      next({ name: 'login' })
    }
   }else{
    next()
   }

  // 隐藏加载状态
  // loading.close()
})

export default router
