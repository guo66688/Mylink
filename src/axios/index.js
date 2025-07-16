import axios from "axios";
const _axios = axios.create({timeout:10000});
_axios.interceptors.request.use(
    function(config){
        config.headers.Authorization="Bearer sk-3db6db180d944194b2b139e4aa1b8409";
        if (config.method == 'post')
            config.headers['Content-Type']="application/json";
        return config;
    }
);

_axios.interceptors.request.use(
    (response)=>{return response}
    ,(error)=>{
        console.log(error);
        alert.apply(error)
    }
)

export default _axios;