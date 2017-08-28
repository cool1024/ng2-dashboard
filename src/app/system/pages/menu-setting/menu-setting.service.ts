import { Injectable } from '@angular/core';
import { RequestService } from './../../services/request.service';
import { Observable } from 'rxjs/Observable';
import { ApiData } from './../../class/api';

@Injectable()
export class MenuSettingService {

  constructor(private request: RequestService) { }

  //获取全部菜单
  get getMenuGroups(): Observable<ApiData> {
    return this.request.url('/menu/group')
  }

  //添加菜单
  addMenu(params: any): Observable<ApiData> {
    return this.request.post('/menu/add', params)
  }

  //删除菜单
  deleteMenu(menuid: any): Observable<ApiData> {
    return this.request.delete('/menu/delete', { menuid })
  }

  //修改菜单
  changeMenu(params: any): Observable<ApiData> {
    return this.request.put('/menu/update', params)
  }

  //排序菜单
  sortMenu(ids: string) {
    return this.request.put('/menu/sort', ids)
  }

  //通过parentid获取指定子菜单列表
  getChildByParentId(childslist: Array<{ parentid: number, groups: Array<{ id: number, icon: string, title: string, url: string, parentid: number }> }>, parentid: number): Array<{ id: number, icon: string, title: string, url: string, parentid: number }> {
    let childs = new Array<{ id: number, icon: string, title: string, url: string, parentid: number }>();
    for (let i = 0; i < childslist.length; i++) {
      if (childslist[i].parentid == parentid) {
        childs = childslist[i].groups
        break
      }
    }
    return childs
  }

}
