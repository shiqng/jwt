import axios  from "../lib/axiosRequest";
export const login = username => axios.request({url:'/login',method:'POST',data:{username}})
export const validate = () => axios.request({url:'/validate'})