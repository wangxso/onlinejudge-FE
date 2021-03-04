import {requestJson} from "@/service/axios";

const sms = {
    getSmsCode(phone) {
        return requestJson("get", `/sms/${phone}`)
    }
}

export default sms