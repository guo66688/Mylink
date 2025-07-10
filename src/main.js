// import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'
function getRoleAry(router){
  let roleAry=[]
  let routes = router.getRoutes()
  routes.forEach((r)=>{
    if(r.meta&&r.meta.role){
      roleAry[r.path] = r.meta.role
    }
  })
  return roleAry
}
const roleAry = getRoleAry(router)


const app = createApp(App)
app.provide('roleAry',roleAry)//发布到组件树上
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
