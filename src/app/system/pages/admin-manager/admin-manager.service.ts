import { Injectable } from '@angular/core';
import { RequestService } from './../../services/request.service';
import { ApiData } from './../../class/api';
import { Observable } from 'rxjs/Observable';
import { SystemService } from './../../system.service';

@Injectable()
export class AdminManagerService {

  constructor(private request: RequestService, private systemService: SystemService) { }

  add(params: any): Observable<ApiData> {
    if (!this.systemService.adminPageConfig.urls.insert) {
      console.error('the insert url is undefined')
    }
    return this.request.post(this.systemService.adminPageConfig.urls.insert, params)
  }

  update(params: any): Observable<ApiData> {
    if (!this.systemService.adminPageConfig.urls.update) {
      console.error('the update url is undefined')
    }
    return this.request.put(this.systemService.adminPageConfig.urls.update, params)
  }

  delete(id: number): Observable<ApiData> {
    if (!this.systemService.adminPageConfig.urls.delete) {
      console.error('the delete url is undefined')
    }
    return this.request.delete(this.systemService.adminPageConfig.urls.delete, { id })
  }

  search(params: any): Observable<ApiData> {
    if (!this.systemService.adminPageConfig.urls.select) {
      console.error('the select url is undefined')
    }
    return this.request.get(this.systemService.adminPageConfig.urls.select, params)
  }

  get getRolesOptions(): Observable<ApiData> {
    return this.request.url('/role/options');
  }

}
