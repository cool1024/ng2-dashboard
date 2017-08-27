import { Injectable } from '@angular/core';
import { RequestService } from './../../services/request.service';
import { Observable } from 'rxjs/Observable';
import { ApiData } from './../../class/api';

@Injectable()
export class MenuSettingService {

  constructor(private request:RequestService) { }

  get getMenuGroups():Observable<ApiData>{
    return this.request.get('/menu/group')
  }

  getChildByParentId(childslist:Array<{parentid:number,groups:Array<{id: number, icon: string, title: string, url: string, parentid: number}>}>,parentid:number):Array<{id: number, icon: string, title: string, url: string, parentid: number}>{
    let childs=new Array<{id: number, icon: string, title: string, url: string, parentid: number}>();
    for(let i=0;i<childslist.length;i++){
      if(childslist[i].parentid==parentid){
        childs=childslist[i].groups
        break
      }
    }
    return childs
  }

}
