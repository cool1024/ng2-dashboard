import { Injectable } from '@angular/core';
import { RequestService } from './../../../../../dashboard/services/request.service';
import { ApiData } from './../../../../../dashboard/classes/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoleManagerService {

  constructor(private req: RequestService) { }

  getRoles(params: any): Observable<ApiData> {
    return this.req.get('/role/search', params)
  }

  deleteRole(roleid: number): Observable<ApiData> {
    return this.req.delete('/role/delete', { roleid })
  }

  changeRole(params: any): Observable<ApiData> {
    return this.req.put('/role/update', params)
  }

  addRole(params: any): Observable<ApiData> {
    return this.req.post('/role/add', params)
  }

  get getPermissionDatas(): Observable<ApiData> {
    return this.req.url('/role/permissions')
  }
}
