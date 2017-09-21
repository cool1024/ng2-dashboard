export interface Storage {
    getToken(): any
    setToken(params: any)
    cleanToken()
    cleanAll()
}