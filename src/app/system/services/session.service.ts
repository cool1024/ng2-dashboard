import { Injectable } from '@angular/core';
import { Storage } from './../interfaces/storage';
import { StorageSetting } from './../../config/storage';

@Injectable()
export class SessionService implements Storage {

  tokenParams = StorageSetting.tokenParams

  constructor() { }

  getToken(): any {
    let tokenParams = {}
    this.tokenParams.forEach(key => {
      tokenParams[key] = sessionStorage.getItem(key) || ''
    });
    return tokenParams
  }

  setToken(params: any) {
    this.tokenParams.forEach(key => {
      //not support 0 or false, other like to empty value
      if (!!params[key]) sessionStorage.setItem(key, params[key])
    })
  }

  cleanToken(){
    this.tokenParams.forEach(key => {
      sessionStorage.removeItem(key)
    })
  }

  cleanAll(){
    sessionStorage.clear()
  }
}
