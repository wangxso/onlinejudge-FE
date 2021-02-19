import { requestJson } from '@/service/axios'

const user = {
    register(user) {
        return requestJson("post", "/user/register", user)
    },
    login(user, code){
        return requestJson("post", `/user/login?code=${code}`, user)
    },
    findUserById(uid){
        return  requestJson("post", "/user/findUserById", {"uid": uid})
    },
    getVerityCode(){
        return requestJson("get", "/code/")
    },
    logout(user){
        return requestJson("post","/user/logout", user)
    },
    getUserPagination(page, pageSize) {
        return requestJson("get", `/user/${page}/${pageSize}`)
    },
    updateUser(user){
        return requestJson("put", "/user", user)
    },
    getCount(){
        return requestJson("get", "/user/count")
    },
    delete(users){
        return requestJson("post", "/user/deletes", users)
    }
}

export default user