import { defineStore } from 'pinia'
import { ref, computed, watch, onMounted } from 'vue'
import axios from 'axios'

export const listStore = defineStore('list', ()=>{
    //变量
    const list = ref([])
    //方法
    const getList = () => {
        return list.value
    }
    const setList = async () => {
        const results = await axios.get('http://127.0.0.1:4523/m1/6731413-6442637-default/list')
        if(results.data.code == 2000){
             list.value.push(results.data.data)
             console.log(results.data.data);
             
        }
    }
    return{list,getList,setList}

})
