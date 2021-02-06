import {requestJson} from "../service/axios";

const problem = {
    findAllProblem() {
        return requestJson("get","/problem/findAll")
    },
    findProblemByPid(pid) {
        return requestJson("get", "/problem/findOneByPid?pid="+pid)
    },
    findProblemPagination(page, pageSize){
        return requestJson("get", `/problem/${page}/${pageSize}`)
    },
    update(problem) {
        return requestJson("put", "/problem", problem)
    },
    add(problem) {
        return requestJson("post", "/problem", problem)
    }
}

export default problem