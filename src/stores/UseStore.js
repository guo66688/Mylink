import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useStore = defineStore('main', ()=>{
    //变量
    const user = ref(sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {})
    const token = ref(sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '')
    const isLogin = ref(false)
    //计算属性


    //方法
    const loginout = () => {
      isLogin.value = false
      user.value = {}
      token.value = ''
      user.value.role = ''

      sessionStorage.removeItem('user')
      sessionStorage.removeItem('token')
    }

    const setUser = (useri) => {
      user.value = useri
      sessionStorage.setItem('user', JSON.stringify(useri))
    }
    const setToken = (tokeni) => {
      token.value = tokeni
      sessionStorage.setItem('token', tokeni)
    }
    const getUser = () => {
      return user.value
    }
    const getToken = () => {
      return token.value
    }
    const login = ()=>{
        axios.post('http://127.0.0.1:4523/m1/6731413-6442637-default/login',)
        .then(res=>{
            if(res.data.code == 2000){
                
                let user_data = {
                    id: res.data.data.id,
                    name: res.data.data.name,
                    url : res.data.data.photo,
                    role: res.data.data.role
                }
                setUser(user_data)
                setToken(res.data.data.token)
                sessionStorage.setItem('role',res.data.data.role)
                console.log(token.value,user.value);
                isLogin.value = true
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return{user,token,isLogin,setUser,setToken,login,getUser,getToken,loginout}

})
