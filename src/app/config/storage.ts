/*存系统储设置&权限令牌*/

export enum StorageType {
    localStorage = 1,
    sessionStorage = 2
}
export const StorageSetting = {
    tokensSaveMethod: StorageType.localStorage,//令牌存储位置
    dataSaveMethod: StorageType.sessionStorage,//临时数据存储位置
    tokenParams: ['ng-params-one', 'ng-params-two']//令牌参数
}