import {requestJson} from "@/service/axios";

const contest = {
    findContestPagination(page, pageSize){
        return requestJson("get", `/contest/${page}/${pageSize}`)
    }
}

export default contest