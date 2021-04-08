import {requestJson} from "@/service/axios";

const carousel = {
    findCarouselPagination(page, pageSize){
        return requestJson("get", `/carousel/${page}/${pageSize}`)
    },
}

export default carousel;