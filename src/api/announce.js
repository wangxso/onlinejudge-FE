import { requestUrl,requestJson } from '@/service/axios'
const announce = {
    findAll() {
        return requestUrl('get', '/announce/findAll')
    },
    findAnnounceByAid(aid) {
        return requestJson('post', '/announce/findByAid', {"aid": aid})
    }
}

export default announce