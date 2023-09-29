import {Service} from "@/services";
import {useStore} from "@/stores/store";

export const emailLoginApi = (data) => {
    return Service.post("/api/email_login/", data)
}