import { requestUrl,requestJson } from '@/service/axios'
const announce = {
    findAll() {
        return requestUrl('get', '/announce/findAll')
    },
    findAnnounceByAid(aid) {
        return requestJson('post', '/announce/findByAid', {"aid": aid})
    },
    findAnnouncePagination(page, pageSize) {
        return requestJson('get', `/announce/${page}/${pageSize}`)
    }
}

export default announce