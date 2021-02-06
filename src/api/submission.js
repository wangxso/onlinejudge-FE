import { requestJson } from '@/service/axios'

const submission = {
    findAllPagination(index, pageSize){
        return requestJson("get", "/submission?index="+index+"&pageSize="+pageSize)
    }
}

export default submission