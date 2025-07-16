import config from '../../config.cfg' // 添加导入
import axios from 'axios';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNewStore = defineStore('NewStore', () => {
    const apiUrl = '/api/toutiao/index';  // 接口请求URL
    let requestParams = {
    key: config.API_KEY, // 从配置文件获取
    type: '',
    page: '',
    page_size: '10',
    is_filter: ''
    };
    const NewList = ref()
    
    const NewListGet = ()=>{
        return NewList.value
    }
    const NewListPage = (page = 1, type = 'top')=>{
        requestParams.page = page
        requestParams.type = type
        axios.get(apiUrl,
            {
                params:requestParams,
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded"
                },

            }
        )
            .then((res)=>{
                console.log(res);
                
                if(res.status === 200){
                    NewList.value = res.data.result.data
                    console.log(NewList.value);
                }else{
                    console.log('请求异常');
                }
            })
            .catch((error)=>{
                console.log(error);
            })
    }


    return { NewList, NewListGet, NewListPage }
})
