import {requestJson} from "@/service/axios";

const rank = {
    findRankPagination(page, pageSize){
        return requestJson("get", `/rank/${page}/${pageSize}`)
    }
}

export default rank