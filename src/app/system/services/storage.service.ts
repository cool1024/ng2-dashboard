import { Injectable } from '@angular/core';
import { Storage } from './../interfaces/storage';
import { StorageSetting, StorageType } from './../../config/storage';
import { SessionService } from './../services/session.service';
import { LocalService } from './../services/local.service';

@Injectable()
export class StorageService {

  storageService: Storage;

  constructor(private sessionService: SessionService, private localService: LocalService) {
    if (StorageSetting.tokensSaveMethod == StorageType.localStorage) {
      this.storageService = localService

    }
    if (StorageSetting.tokensSaveMethod == StorageType.sessionStorage) {
      this.storageService = sessionService
    }
  }

  getToken(): any {
    return this.storageService.getToken()
  }

  setToken(params: any) {
    this.storageService.setToken(params)
  }

  cleanAll() {
    this.storageService.cleanAll()
  }
}
