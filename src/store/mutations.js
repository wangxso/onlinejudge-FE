import {RECORD_TOKEN, RECORD_USER} from './mutation-types'
export default {
    // 记录token
    [RECORD_TOKEN] (state, token) {
        state.token = token
    },
    [RECORD_USER] (state, user) {
        state.user = user
    }
}