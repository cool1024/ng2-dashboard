import { Injectable } from '@angular/core';
import { RequestService } from './../../services/request.service';
import { Observable } from 'rxjs/Observable';
import { ApiData } from './../../class/api';

@Injectable()
export class PermissionManagerService {

  constructor(private request: RequestService) { }

  //添加权限模块
  addPermissionModel(params: any): Observable<ApiData> {
    return this.request.post('/permission/model/add', params)
  }

  //删除权限模块
  deletePermissionModel(modelid: number): Observable<ApiData> {
    return this.request.delete('/permission/model/delete', { modelid })
  }

  //修改权限模块
  changePermissionModel(params: any): Observable<ApiData> {
    return this.request.put('/permission/model/update', params)
  }

  //添加权限
  addPermission(params: any): Observable<ApiData> {
    return this.request.post('/permission/add', params)
  }

  //删除权限
  deletePermission(permissionid: number): Observable<ApiData> {
    return this.request.delete('/permission/delete', { permissionid })
  }

  //修改权限
  changePermission(params: any): Observable<ApiData> {
    return this.request.put('/permission/update', params)
  }

  //获取权限模块列表&权限列表
  get getAllPermission(): Observable<ApiData> {
    return this.request.url('/permission/all')
  }
}
