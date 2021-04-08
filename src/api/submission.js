import { requestJson } from '@/service/axios'

const submission = {
    findAllPagination(index, pageSize){
        return requestJson("get", `/submission/${index}/${pageSize}`)
    },
    submitAnswer(submission, tid) {
        return requestJson("post", `/submission?tid=${tid}`, submission)
    },
    getCount(){
        return requestJson("get", "/submission/count")
    },
    getSubmissionStatics() {
        return requestJson("get", "/submission/statics")
    }
}

export default submission