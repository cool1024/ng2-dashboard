/*存系统储设置&权限令牌*/
import { AuthHeaders } from './auth'

export enum StorageType {
    localStorage = 1,
    sessionStorage = 2
}
export const StorageSetting = {
    tokensSaveMethod: StorageType.localStorage,//令牌存储位置
    dataSaveMethod: StorageType.sessionStorage,//临时数据存储位置
    tokenParams: AuthHeaders//令牌参数(['ng-params-one', 'ng-params-two'])
}