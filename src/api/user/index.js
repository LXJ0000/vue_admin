import {Service} from "@/services";

// 代理
export const emailLoginApi = (data) => {
    return Service.post("/api/email_login/", data)
}