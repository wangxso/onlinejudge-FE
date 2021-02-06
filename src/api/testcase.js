import { requestJson } from '@/service/axios'

const testcase = {
    findTestCaseById(id) {
        return requestJson("get", `/testcase/${id}`)
    },
    add(testcase) {
        return requestJson("post", "/testcase",testcase)
    }
}

export default testcase