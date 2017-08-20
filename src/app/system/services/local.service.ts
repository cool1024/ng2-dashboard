import { Injectable } from '@angular/core';
import { Storage } from './../interfaces/storage';
import { StorageSetting } from './../../config/storage';

@Injectable()
export class LocalService implements Storage {

  tokenParams = StorageSetting.tokenParams

  constructor() { }

  getToken(): any {
    let tokenParams = {}
    this.tokenParams.forEach(key => {
      tokenParams[key] = localStorage.getItem(key) || ''
    });
    return tokenParams
  }

  setToken(params: any) {
    this.tokenParams.forEach(key => {
      //not support 0 or false, other like to empty value
      if (!!params[key]) localStorage.setItem(key, params[key])
    })
  }

  cleanToken(){
    this.tokenParams.forEach(key => {
      localStorage.removeItem(key)
    })
  }

  cleanAll(){
    localStorage.clear()
  }
  
}
