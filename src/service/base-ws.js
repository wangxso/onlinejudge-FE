let baseWS
// 开发环境
if (process.env.NODE_ENV === 'development') {
    baseWS = 'ws://localhost:8081/ws/';
} else if (process.env.NODE_ENV === 'production') {
    baseWS = 'ws://oj.api.wangx.wang/ws/'
}

export default baseWS