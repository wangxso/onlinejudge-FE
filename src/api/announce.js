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
    },
    update(announce){
        return requestJson("put", "/announce/", announce)
    },
    add(announce){
        return requestJson("post", "/announce/", announce)
    },
    deleteAnnounce(aid){
        return requestJson("delete", `/announce/${aid}`)
    }
}

export default announce