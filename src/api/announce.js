import { requestUrl } from '@/service/axios'
const announce = {
    findAll() {
        return requestUrl('get', '/announce/findAll')
    }
}

export default announce