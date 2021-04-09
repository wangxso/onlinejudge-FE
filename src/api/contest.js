import {requestJson} from "@/service/axios";

const contest = {
    findContestPagination(page, pageSize){
        return requestJson("get", `/contest/${page}/${pageSize}`)
    },
    findSubmission(cid, page, pageSize){
        return requestJson("get", `/contest/submission/${cid}/${page}/${pageSize}`)
    },
    submitAnswer(submission, cid){
        return requestJson("post", `/contest/submission/${cid}`, submission)
    },
    updateContest(contest) {
        return requestJson("put", "/contest", contest)
    },
    addContest(contest) {
        return requestJson("post", "/contest", contest)
    }
}

export default contest