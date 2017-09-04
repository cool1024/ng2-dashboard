import { Injectable } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { Observable } from 'rxjs/Observable';
import { RequestService } from './request.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  constructor(private storageService: StorageService, private request: RequestService, private toastrService: ToastrService) { }

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
    this.request.url('/signout').subscribe(res => {
      this.toastrService.info(res.message, '提示消息')
    })
    this.storageService.cleanAll()
    this.isLoggedIn = false
  }

  //检测登入状态
  checkOnline(): Observable<boolean> {
    let obs = new Observable<boolean>()
    let token = this.storageService.getToken()
    return this.request.post('/check', token).map(res => {
      this.isLoggedIn = res.result
      return this.isLoggedIn
    })
  }
}
