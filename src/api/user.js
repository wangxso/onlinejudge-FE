import { requestJson } from '@/service/axios'

const user = {
    register(user) {
        return requestJson("post", "/user/register", user)
    },
    login(user, code){
        return requestJson("post", `/login?code=${code}`, user)
    },
    findUserById(uid){
        return  requestJson("post", "/user/findUserById", {"uid": uid})
    },
    findUserByUsername(username){
        return requestJson("get", `/user/${username}`)
    },
    getVerityCode(){
        return requestJson("get", "/code")
    },
    logout(user){
        return requestJson("post","/logout", user)
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
    },
    findUserSubmissionPassAndTotal(uid) {
        return requestJson("get", `/user/statics/submission/${uid}`)
    }
}

export default user