import { Injectable } from '@angular/core';
import { StorageService } from './../services/storage.service';

@Injectable()
export class AuthService {

  constructor(private storageService: StorageService) { }

  //是否登入
  isLoggedIn = false

  //跳转页面
  redirectUrl = ''

  //设置当前状态为登入
  setIn($params?: any) {
    if (!!$params) this.storageService.setToken($params)
    this.isLoggedIn = true
  }

  //设置当前状态为登出
  setOut() {
    this.storageService.cleanAll()
    this.isLoggedIn = false
  }
}
