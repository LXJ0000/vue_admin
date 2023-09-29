import {Service} from "@/services";

export const emailLoginApi = (data) => {
    return Service.post("/api/email_login/", data)
}