import {defineStore} from "pinia";
import {message} from "ant-design-vue";

export const userStore = defineStore('gvb', {
    state: () => {
        return {
            UserInfo: {
                avatar: "/static/avatar/1.jpg",
                exp: 0,
                iss: "",
                nick_name: "",
                role: 0,
                user_id: 0,
            }
        }
    },
    actions: {
        //     modify userinfo
        setUserInfo(info) {
            this.$patch({
                UserInfo: info
            })
            //     持久化
            localStorage.setItem("userinfo", JSON.stringify(info))
        },
        // 加载userinfo
        loadUserInfo() {
            let info = localStorage.getItem("userinfo")
            if (info === null) {
                return
            }
            //     解析Json
            let userinfo = JSON.parse(info)
            //     判断时间是否失效
            let exp = userinfo.exp * 1000
            let nowTime = new Date().getTime()
            if (exp <= nowTime) {
                //     过期
                message.warn("登陆信息失效")
                return
            }
            this.setUserInfo(userinfo)
        }
    }
})