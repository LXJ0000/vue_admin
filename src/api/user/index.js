import {Service} from "@/services";
// 邮箱登录接口
export const emailLoginApi = (data) => {
// 代理
    return Service.post("/api/email_login/", data)
}
//用户信息接口
export const userListApi = (params)=>{
    return Service.get("/api/user/", {params})
}

//
export const userCreateApi = (data)=>{
    return Service.post('/api/user/', data)
}