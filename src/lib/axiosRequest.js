import axios from "axios";
// 封装拦截器
// 创建一个AjaxRequesr请求类
class AjaxRequest{
    constructor(){
        // 判断当前环境是否是在开发环境,如果是,设置请求的基础路径是http://localhost:3005
        this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3005' :'/';
        // 设置请求过期时间，如果超过2s没有返回结果，提示用户请求超时
        this.timeout = 2000;
    }
    // 创建请求方法
    
    request(config){
        const instance = axios.create({
            baseURL:this.baseURL,
            timeout:this.timeout
        })
        // 请求拦截器
        instance.interceptors.request.use((config)=>{
            config.headers.Authorization = localStorage.getItem('token');
            return config
        })
        // 响应拦截器
        instance.interceptors.response.use((res)=>res.data,(err)=>Promise.reject(err))

        return instance(config)
    }
}


export default new AjaxRequest()