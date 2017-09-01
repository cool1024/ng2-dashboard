export class ApiData {
    
    constructor(public result: boolean, public msg: any, public datas: any, public id?: number) { }

    get message(): string {
        let message = ""

        if (typeof this.msg == 'string') {
            message = this.msg
        }
        else {
            for (let key in this.msg) {
                message = this.msg[key][0]
                break
            }
        }

        return message;
    }
}
export const ErrorMessages = {
    API_DATA_ERROR: '服务器数据错误，无法解析的数据格式~',
    SERVER_ERROR: '服务器处理异常，无法获取正常的服务器响应',
    NOTFOUND_ERROR: '┗|｀O′|┛ 嗷~~ 请求地址不存在',
    AUTH_ERROR: '权限校验失败，请提供正确的令牌',
    NETWORK_ERROR: '网络好像出问题了',
}